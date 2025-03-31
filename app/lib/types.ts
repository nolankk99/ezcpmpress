// 이미지 압축 관련 타입 정의

// 지원하는 이미지 형식
export type ImageFormat = 'jpg' | 'jpeg' | 'png' | 'webp';

// 압축 설정 옵션
export interface CompressionOptions {
  quality: number;        // 압축 품질 (0-1)
  maxWidth?: number;      // 최대 너비
  maxHeight?: number;     // 최대 높이
  targetFormat?: ImageFormat; // 출력 형식
  preserveExif?: boolean; // EXIF 데이터 유지 여부
}

// 변환된 이미지 결과
export interface CompressedImage {
  id: string;             // 고유 ID
  originalFile: File;     // 원본 파일
  compressedBlob: Blob;   // 압축된 파일 Blob
  originalSize: number;   // 원본 크기 (bytes)
  compressedSize: number; // 압축된 크기 (bytes)
  compressionRatio: number; // 압축률 (%)
  format: ImageFormat;    // 파일 형식
  previewUrl: string;     // 미리보기 URL
  name: string;           // 파일 이름
  width?: number;         // 너비
  height?: number;        // 높이
} 