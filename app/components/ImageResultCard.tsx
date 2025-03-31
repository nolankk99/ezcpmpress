'use client';

import { Download, Trash2, ZoomIn } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { CompressedImage } from '../lib/types';
import { formatFileSize } from '../lib/imageUtils';
import { useState } from 'react';
import { useLanguage } from '../lib/LanguageContext';

interface ImageResultCardProps {
  image: CompressedImage;
  onDownload: (image: CompressedImage) => void;
  onDelete: (id: string) => void;
}

export default function ImageResultCard({ image, onDownload, onDelete }: ImageResultCardProps) {
  const { t } = useLanguage();
  const [showFullPreview, setShowFullPreview] = useState(false);
  
  const {
    id,
    name,
    originalSize,
    compressedSize,
    compressionRatio,
    previewUrl,
    format,
    width,
    height
  } = image;
  
  const toggleFullPreview = () => {
    setShowFullPreview(!showFullPreview);
  };
  
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        {/* 미리보기 이미지 */}
        <div 
          className="h-48 bg-gray-100 overflow-hidden cursor-pointer"
          onClick={toggleFullPreview}
        >
          <img 
            src={previewUrl} 
            alt={name} 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* 전체화면 미리보기 */}
        {showFullPreview && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={toggleFullPreview}
          >
            <div className="relative max-w-4xl max-h-[90vh] overflow-auto p-4">
              <img 
                src={previewUrl} 
                alt={name} 
                className="max-w-full max-h-full"
              />
              <Button 
                className="absolute top-2 right-2"
                variant="outline"
                size="sm"
                onClick={toggleFullPreview}
              >
                {t('close', 'compressor')}
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        {/* 파일 정보 */}
        <div className="mb-3">
          <h3 className="font-medium text-sm truncate" title={name}>
            {name}
          </h3>
          <div className="text-xs text-gray-500 mt-1">
            {width && height ? `${width} × ${height} ${t('pixels', 'compressor')}` : ''}
            {format && (width && height) ? ` • ${format.toUpperCase()}` : format.toUpperCase()}
          </div>
        </div>
        
        {/* 압축 결과 */}
        <div className="grid grid-cols-2 gap-2 text-xs mb-3">
          <div>
            <div className="text-gray-500">{t('originalSize', 'compressor')}</div>
            <div>{formatFileSize(originalSize)}</div>
          </div>
          <div>
            <div className="text-gray-500">{t('compressedSize', 'compressor')}</div>
            <div>{formatFileSize(compressedSize)}</div>
          </div>
        </div>
        
        {/* 압축률 */}
        <div className="mb-3">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-500">{t('compressionRatio', 'compressor')}</span>
            <span className="text-xs font-medium">
              {compressionRatio.toFixed(1)}% {t('reduction', 'compressor')}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className="bg-blue-600 h-1.5 rounded-full" 
              style={{ width: `${Math.min(compressionRatio, 100)}%` }}
            ></div>
          </div>
        </div>
        
        {/* 버튼 */}
        <div className="flex space-x-2">
          <Button 
            onClick={() => onDownload(image)} 
            className="flex-1"
            size="sm"
          >
            <Download className="h-4 w-4 mr-1" />
            {t('download', 'compressor')}
          </Button>
          <Button 
            onClick={() => onDelete(id)} 
            variant="outline"
            size="sm"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
} 