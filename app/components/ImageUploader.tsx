'use client';

import { useState, useRef, useCallback } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { Button } from './ui/button';
import { isSupportedImageFile } from '../lib/imageUtils';
import { useLanguage } from '../lib/LanguageContext';

interface ImageUploaderProps {
  onFilesSelected: (files: File[]) => void;
  multiple?: boolean;
  className?: string;
}

export default function ImageUploader({
  onFilesSelected,
  multiple = true,
  className = '',
}: ImageUploaderProps) {
  const { t } = useLanguage();
  const [isDragging, setIsDragging] = useState(false);
  const [previewFiles, setPreviewFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback((files: FileList | null) => {
    if (!files || files.length === 0) return;

    const validFiles = Array.from(files).filter(file => isSupportedImageFile(file));
    
    if (validFiles.length === 0) {
      alert('JPG, PNG, WEBP 형식의 이미지 파일만 업로드할 수 있습니다.');
      return;
    }

    setPreviewFiles(validFiles);
    onFilesSelected(validFiles);
  }, [onFilesSelected]);

  const handleBrowseClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    handleFileChange(files);
  }, [handleFileChange]);

  const clearFiles = useCallback(() => {
    setPreviewFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 transition-colors text-center ${
          isDragging 
            ? 'border-blue-500 bg-blue-50' 
            : previewFiles.length > 0 
              ? 'border-green-500 bg-green-50' 
              : 'border-gray-300 hover:border-blue-400'
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple={multiple}
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={(e) => handleFileChange(e.target.files)}
        />

        {previewFiles.length > 0 ? (
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <ImageIcon className="h-6 w-6 text-green-600" />
              <span className="text-green-600 font-medium">
                {previewFiles.length} {t('imagesSelected', 'compressor')}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {previewFiles.map((file, index) => (
                <div 
                  key={index} 
                  className="relative w-20 h-20 rounded-md overflow-hidden border border-gray-200"
                >
                  <img
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              <Button 
                variant="outline" 
                type="button" 
                onClick={clearFiles}
                size="sm"
              >
                <X className="h-4 w-4 mr-2" />
                {t('cancel', 'compressor')}
              </Button>
              <Button 
                type="button" 
                onClick={handleBrowseClick}
                size="sm"
              >
                <Upload className="h-4 w-4 mr-2" />
                {t('selectOtherFiles', 'compressor')}
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <div>
              <p className="text-lg font-medium text-gray-700">{t('dropzoneText', 'compressor')}</p>
              <p className="text-gray-500 mt-1">{t('dropzoneOr', 'compressor')}</p>
            </div>
            <Button 
              type="button" 
              onClick={handleBrowseClick}
              className="mt-2"
            >
              {t('browseFiles', 'compressor')}
            </Button>
            <p className="text-xs text-gray-500 mt-2">
              {t('supportedFormats', 'compressor')} ({multiple ? t('multipleFiles', 'compressor') : t('singleFile', 'compressor')})
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 