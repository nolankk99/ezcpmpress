'use client';

import { Card, CardContent } from "./ui/card";
import { useLanguage } from '../lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-16 py-10 px-4 border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* SEO를 위한 관련 키워드 텍스트 */}
        <div className="mb-12 text-gray-600">
          <h2 className="font-bold text-lg mb-4 text-gray-800">
            {t('infoTitle', 'footer')}
          </h2>
          <div className="prose prose-gray max-w-none">
            <p className="mb-4">
              {t('paragraph1', 'footer')}
            </p>
            <p className="mb-4">
              {t('paragraph2', 'footer')}
            </p>
            <p>
              {t('paragraph3', 'footer')}
            </p>
          </div>
        </div>

        {/* Google 애드센스 위치 */}
        <Card className="mb-12 border border-gray-200">
          <CardContent className="flex items-center justify-center h-32">
            <p className="text-gray-400 text-sm">{t('adArea', 'footer')}</p>
            {/* 실제 애드센스 코드는 여기에 추가 */}
          </CardContent>
        </Card>

        {/* 저작권 정보 */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {currentYear} EZ Compress. {t('copyright', 'footer')}</p>
        </div>
      </div>
    </footer>
  );
} 