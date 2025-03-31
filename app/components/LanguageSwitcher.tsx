'use client';

import { useLanguage } from '../lib/LanguageContext';
import { Language } from '../lib/i18n';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from './ui/select';

export default function LanguageSwitcher() {
  const { language, setLanguage, availableLanguages } = useLanguage();

  return (
    <div className="flex items-center">
      <div className="hidden sm:flex">
        {/* 데스크탑에서는 버튼 목록으로 표시 */}
        {Object.entries(availableLanguages).map(([code, name]) => (
          <Button
            key={code}
            variant={language === code ? 'default' : 'ghost'}
            size="sm"
            className={`px-2 py-1 mx-1 text-xs ${
              language === code ? 'bg-blue-600' : ''
            }`}
            onClick={() => setLanguage(code as Language)}
          >
            {name}
          </Button>
        ))}
      </div>

      {/* 모바일에서는 드롭다운으로 표시 */}
      <div className="sm:hidden">
        <Select value={language} onValueChange={(value) => setLanguage(value as Language)}>
          <SelectTrigger className="w-[130px] h-8">
            <div className="flex items-center">
              <Globe className="w-3.5 h-3.5 mr-2" />
              <SelectValue placeholder={availableLanguages[language]} />
            </div>
          </SelectTrigger>
          <SelectContent>
            {Object.entries(availableLanguages).map(([code, name]) => (
              <SelectItem key={code} value={code}>
                {name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
} 