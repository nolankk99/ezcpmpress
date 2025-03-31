'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { CompressionOptions as CompressionOptionsType, ImageFormat } from '../lib/types';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useLanguage } from '../lib/LanguageContext';

interface CompressionOptionsProps {
  onChange: (options: CompressionOptionsType) => void;
  disabled?: boolean;
}

export default function CompressionOptions({ onChange, disabled = false }: CompressionOptionsProps) {
  const { t } = useLanguage();
  const [quality, setQuality] = useState<number>(80);
  const [maxWidth, setMaxWidth] = useState<string>('');
  const [maxHeight, setMaxHeight] = useState<string>('');
  const [targetFormat, setTargetFormat] = useState<ImageFormat | 'original'>('original');
  const [currentTab, setCurrentTab] = useState('standard');

  // 설정 변경 시 부모 컴포넌트에 전달
  const handleChange = () => {
    onChange({
      quality: quality / 100,
      maxWidth: maxWidth ? parseInt(maxWidth, 10) : undefined,
      maxHeight: maxHeight ? parseInt(maxHeight, 10) : undefined,
      targetFormat: targetFormat === 'original' ? undefined : targetFormat as ImageFormat,
    });
  };

  const handleQualityChange = (value: number) => {
    setQuality(value);
    onChange({
      quality: value / 100,
      maxWidth: maxWidth ? parseInt(maxWidth, 10) : undefined,
      maxHeight: maxHeight ? parseInt(maxHeight, 10) : undefined,
      targetFormat: targetFormat === 'original' ? undefined : targetFormat as ImageFormat,
    });
  };

  const handleResizeChange = (width: string, height: string) => {
    setMaxWidth(width);
    setMaxHeight(height);
    onChange({
      quality: quality / 100,
      maxWidth: width ? parseInt(width, 10) : undefined,
      maxHeight: height ? parseInt(height, 10) : undefined,
      targetFormat: targetFormat === 'original' ? undefined : targetFormat as ImageFormat,
    });
  };

  const handleFormatChange = (format: ImageFormat | 'original') => {
    setTargetFormat(format);
    onChange({
      quality: quality / 100,
      maxWidth: maxWidth ? parseInt(maxWidth, 10) : undefined,
      maxHeight: maxHeight ? parseInt(maxHeight, 10) : undefined,
      targetFormat: format === 'original' ? undefined : format as ImageFormat,
    });
  };

  // 빠른 설정 프리셋
  const applyPreset = (preset: 'light' | 'medium' | 'high') => {
    let newQuality: number;
    let newWidth: string;
    let newHeight: string;
    let newFormat: ImageFormat | 'original';

    switch (preset) {
      case 'light':
        newQuality = 90;
        newWidth = '';
        newHeight = '';
        newFormat = 'original';
        break;
      case 'medium':
        newQuality = 75;
        newWidth = '1200';
        newHeight = '';
        newFormat = 'original';
        break;
      case 'high':
        newQuality = 60;
        newWidth = '800';
        newHeight = '';
        newFormat = 'webp';
        break;
      default:
        newQuality = 80;
        newWidth = '';
        newHeight = '';
        newFormat = 'original';
    }

    setQuality(newQuality);
    setMaxWidth(newWidth);
    setMaxHeight(newHeight);
    setTargetFormat(newFormat);

    onChange({
      quality: newQuality / 100,
      maxWidth: newWidth ? parseInt(newWidth, 10) : undefined,
      maxHeight: newHeight ? parseInt(newHeight, 10) : undefined,
      targetFormat: newFormat === 'original' ? undefined : newFormat,
    });
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <Tabs 
          defaultValue="standard" 
          value={currentTab}
          onValueChange={setCurrentTab}
        >
          <TabsList className="mb-4 grid grid-cols-2">
            <TabsTrigger value="standard">{t('quickSettings', 'compressor')}</TabsTrigger>
            <TabsTrigger value="advanced">{t('advancedSettings', 'compressor')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="standard" className="space-y-4">
            <div className="grid grid-cols-3 gap-2">
              <Button 
                onClick={() => applyPreset('light')} 
                variant={quality === 90 && maxWidth === '' && targetFormat === 'original' ? 'default' : 'outline'}
                disabled={disabled}
                className="p-3 h-auto"
              >
                <div className="text-xs text-center">
                  <div className="font-medium mb-1">{t('minimalCompression', 'compressor')}</div>
                  <div className="text-xs">90% {t('quality', 'compressor')}</div>
                  <div className="text-xs">{t('originalSizeKeep', 'compressor')}</div>
                </div>
              </Button>
              
              <Button 
                onClick={() => applyPreset('medium')} 
                variant={quality === 75 && maxWidth === '1200' && targetFormat === 'original' ? 'default' : 'outline'}
                disabled={disabled}
                className="p-3 h-auto"
              >
                <div className="text-xs text-center">
                  <div className="font-medium mb-1">{t('optimalCompression', 'compressor')}</div>
                  <div className="text-xs">75% {t('quality', 'compressor')}</div>
                  <div className="text-xs">{t('maxWidth', 'compressor')} 1200px</div>
                </div>
              </Button>
              
              <Button 
                onClick={() => applyPreset('high')} 
                variant={quality === 60 && maxWidth === '800' && targetFormat === 'webp' ? 'default' : 'outline'}
                disabled={disabled}
                className="p-3 h-auto"
              >
                <div className="text-xs text-center">
                  <div className="font-medium mb-1">{t('maximumCompression', 'compressor')}</div>
                  <div className="text-xs">60% {t('quality', 'compressor')}</div>
                  <div className="text-xs">{t('maxWidth', 'compressor')} 800px</div>
                  <div className="text-xs">{t('webpConversion', 'compressor')}</div>
                </div>
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="advanced" className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('compressionQuality', 'compressor')}: {quality}%
              </label>
              <div className="flex items-center space-x-2">
                <span className="text-xs">{t('low', 'compressor')}</span>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={quality}
                  onChange={(e) => handleQualityChange(parseInt(e.target.value, 10))}
                  disabled={disabled}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-xs">{t('high', 'compressor')}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('maxWidthPx', 'compressor')}
                </label>
                <Input
                  type="number"
                  placeholder={t('keepOriginal', 'compressor')}
                  value={maxWidth}
                  onChange={(e) => handleResizeChange(e.target.value, maxHeight)}
                  min="1"
                  disabled={disabled}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('maxHeightPx', 'compressor')}
                </label>
                <Input
                  type="number"
                  placeholder={t('keepOriginal', 'compressor')}
                  value={maxHeight}
                  onChange={(e) => handleResizeChange(maxWidth, e.target.value)}
                  min="1"
                  disabled={disabled}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('convertFormat', 'compressor')}
              </label>
              <Select
                value={targetFormat}
                onValueChange={(value) => handleFormatChange(value as ImageFormat | 'original')}
                disabled={disabled}
              >
                <SelectTrigger>
                  <SelectValue placeholder={t('keepOriginalFormat', 'compressor')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="original">{t('keepOriginalFormat', 'compressor')}</SelectItem>
                  <SelectItem value="jpeg">JPG</SelectItem>
                  <SelectItem value="png">PNG</SelectItem>
                  <SelectItem value="webp">WEBP ({t('recommended', 'compressor')})</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
} 