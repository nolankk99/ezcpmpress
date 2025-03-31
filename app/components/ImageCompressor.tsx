'use client';

import { useState, useCallback } from 'react';
import { CompressionOptions as CompressionOptionsType, CompressedImage } from '../lib/types';
import { compressImage, downloadCompressedImage } from '../lib/imageUtils';
import ImageUploader from './ImageUploader';
import CompressionOptions from './CompressionOptions';
import ImageResultCard from './ImageResultCard';
import { Button } from './ui/button';
import { Loader2, RefreshCw, Trash } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function ImageCompressor() {
  const { t } = useLanguage();
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [options, setOptions] = useState<CompressionOptionsType>({
    quality: 0.8,
    maxWidth: undefined,
    maxHeight: undefined,
    targetFormat: undefined,
  });
  const [results, setResults] = useState<CompressedImage[]>([]);
  const [summary, setSummary] = useState({
    totalOriginalSize: 0,
    totalCompressedSize: 0,
    averageCompressionRatio: 0,
  });

  // 파일 선택 핸들러
  const handleFilesSelected = useCallback((selectedFiles: File[]) => {
    setFiles(selectedFiles);
    // 새 파일이 선택되면 이전 결과 초기화
    setResults([]);
  }, []);

  // 압축 옵션 변경 핸들러
  const handleOptionsChange = useCallback((newOptions: CompressionOptionsType) => {
    setOptions(newOptions);
  }, []);

  // 파일 압축 처리
  const handleCompression = useCallback(async () => {
    if (files.length === 0) return;
    
    setIsProcessing(true);
    
    try {
      const compressPromises = files.map((file) => compressImage(file, options));
      const compressedResults = await Promise.all(compressPromises);
      
      setResults(compressedResults);
      
      // 압축 통계 계산
      const totalOriginalSize = compressedResults.reduce((sum, img) => sum + img.originalSize, 0);
      const totalCompressedSize = compressedResults.reduce((sum, img) => sum + img.compressedSize, 0);
      const averageCompressionRatio = compressedResults.reduce((sum, img) => sum + img.compressionRatio, 0) / compressedResults.length;
      
      setSummary({
        totalOriginalSize,
        totalCompressedSize,
        averageCompressionRatio
      });
    } catch (error) {
      console.error('이미지 압축 중 오류 발생:', error);
      alert('이미지 압축 중 오류가 발생했습니다. 다시 시도해 주세요.');
    } finally {
      setIsProcessing(false);
    }
  }, [files, options]);

  // 이미지 다운로드 핸들러
  const handleDownload = useCallback((image: CompressedImage) => {
    downloadCompressedImage(image);
  }, []);

  // 모든 이미지 다운로드
  const handleDownloadAll = useCallback(() => {
    if (results.length === 0) return;
    
    results.forEach((image) => {
      downloadCompressedImage(image);
    });
  }, [results]);

  // 이미지 삭제 핸들러
  const handleDelete = useCallback((id: string) => {
    setResults((prev) => prev.filter((img) => img.id !== id));
  }, []);

  // 모두 초기화
  const handleReset = useCallback(() => {
    setFiles([]);
    setResults([]);
    setSummary({
      totalOriginalSize: 0,
      totalCompressedSize: 0,
      averageCompressionRatio: 0
    });
  }, []);

  return (
    <div className="space-y-6">
      {/* 이미지 업로드 영역 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">{t('stepImageSelect', 'compressor')}</h2>
        <ImageUploader 
          onFilesSelected={handleFilesSelected} 
          multiple={true}
        />
      </div>
      
      {/* 압축 설정 영역 */}
      {files.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">{t('stepCompressionSettings', 'compressor')}</h2>
          <CompressionOptions 
            onChange={handleOptionsChange} 
            disabled={isProcessing}
          />
          
          <div className="mt-4 flex justify-center">
            <Button 
              onClick={handleCompression} 
              disabled={isProcessing}
              size="lg"
              className="w-full sm:w-auto"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  {t('processing', 'compressor')}
                </>
              ) : (
                t('compressImages', 'compressor')
              )}
            </Button>
          </div>
        </div>
      )}
      
      {/* 압축 결과 영역 */}
      {results.length > 0 && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">{t('stepResults', 'compressor')}</h2>
            <div className="flex space-x-2">
              <Button 
                onClick={handleDownloadAll} 
                variant="outline"
                size="sm"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                {t('downloadAll', 'compressor')}
              </Button>
              <Button 
                onClick={handleReset} 
                variant="outline"
                size="sm"
              >
                <Trash className="h-4 w-4 mr-2" />
                {t('reset', 'compressor')}
              </Button>
            </div>
          </div>
          
          {/* 압축 통계 */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-gray-500 text-sm">{t('totalOriginalSize', 'compressor')}</p>
                <p className="text-lg font-semibold">
                  {(summary.totalOriginalSize / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-sm">{t('totalCompressedSize', 'compressor')}</p>
                <p className="text-lg font-semibold">
                  {(summary.totalCompressedSize / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 text-sm">{t('averageCompressionRatio', 'compressor')}</p>
                <p className="text-lg font-semibold">
                  {summary.averageCompressionRatio.toFixed(1)}% {t('reduction', 'compressor')}
                </p>
              </div>
            </div>
          </div>
          
          {/* 결과 이미지 카드 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {results.map((image) => (
              <ImageResultCard
                key={image.id}
                image={image}
                onDownload={handleDownload}
                onDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* 사용 가이드 */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">{t('guideTitle', 'compressor')}</h2>
        <div className="prose prose-sm max-w-none">
          <h3 className="text-lg font-medium">{t('whyCompress', 'compressor')}</h3>
          <p>
            {t('whyCompressDesc', 'compressor')}
          </p>
          
          <h3 className="text-lg font-medium mt-4">{t('optimalSettings', 'compressor')}</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>{t('webImages', 'compressor')}</li>
            <li>{t('printImages', 'compressor')}</li>
            <li>{t('socialMedia', 'compressor')}</li>
          </ul>
          
          <h3 className="text-lg font-medium mt-4">{t('whatIsWebP', 'compressor')}</h3>
          <p>
            {t('webpDesc', 'compressor')}
          </p>
        </div>
      </div>
    </div>
  );
} 