// 이미지 처리 유틸리티 함수
import { v4 as uuidv4 } from 'uuid';
import Compressor from 'compressorjs';
import { CompressionOptions, CompressedImage, ImageFormat } from './types';

// 파일 확장자로부터 이미지 형식 추출
export function getImageFormat(filename: string): ImageFormat {
  const extension = filename.split('.').pop()?.toLowerCase() || '';
  
  if (extension === 'jpg' || extension === 'jpeg') return 'jpeg';
  if (extension === 'png') return 'png';
  if (extension === 'webp') return 'webp';
  
  // 기본값
  return 'jpeg';
}

// 바이트 크기를 사람이 읽기 쉬운 형식으로 변환
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 이미지 파일 압축
export function compressImage(
  file: File, 
  options: CompressionOptions
): Promise<CompressedImage> {
  return new Promise((resolve, reject) => {
    // 기본 옵션에 사용자 옵션 병합
    const compressorOptions: Compressor.Options = {
      quality: options.quality,
      maxWidth: options.maxWidth,
      maxHeight: options.maxHeight,
      convertSize: 5000000, // 5MB 이상은 WEBP로 자동 변환 (targetFormat이 지정되지 않은 경우)
      mimeType: options.targetFormat ? `image/${options.targetFormat}` : undefined,
      success: (compressedBlob) => {
        // 원본 파일명에서 확장자 추출 후 타겟 포맷에 맞게 변경
        const originalName = file.name;
        const nameWithoutExt = originalName.substring(0, originalName.lastIndexOf('.')) || originalName;
        const format = options.targetFormat || getImageFormat(file.name);
        const extension = format === 'jpeg' ? 'jpg' : format;
        const newName = `${nameWithoutExt}.${extension}`;
        
        // 미리보기 URL 생성
        const previewUrl = URL.createObjectURL(compressedBlob);
        
        // 결과 객체 생성
        const result: CompressedImage = {
          id: uuidv4(),
          originalFile: file,
          compressedBlob,
          originalSize: file.size,
          compressedSize: compressedBlob.size,
          compressionRatio: ((1 - (compressedBlob.size / file.size)) * 100),
          format: format as ImageFormat,
          previewUrl,
          name: newName,
        };
        
        // 이미지 크기 정보 추출 (비동기)
        const img = new Image();
        img.onload = () => {
          result.width = img.width;
          result.height = img.height;
          resolve(result);
        };
        img.onerror = () => {
          // 이미지 로딩 실패 시에도 너비/높이 없이 결과 반환
          resolve(result);
        };
        img.src = previewUrl;
      },
      error: (err) => {
        reject(err);
      }
    };
    
    // 이미지 압축 실행
    new Compressor(file, compressorOptions);
  });
}

// 다운로드 링크 생성
export function downloadCompressedImage(image: CompressedImage): void {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(image.compressedBlob);
  a.download = image.name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// 지원되는 이미지 파일인지 확인
export function isSupportedImageFile(file: File): boolean {
  const supportedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
  return supportedTypes.includes(file.type);
} 