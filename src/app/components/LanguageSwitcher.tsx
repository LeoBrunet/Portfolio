import { useLanguage } from '@/i18n/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="bg-white/90 backdrop-blur-lg rounded-full shadow-lg p-2 flex gap-2">
        <button
          onClick={() => setLanguage('en')}
          className={`
            px-3 py-1.5 rounded-full text-sm font-medium transition-all
            ${language === 'en' 
              ? 'bg-gray-900 text-white' 
              : 'text-gray-600 hover:bg-gray-100'
            }
          `}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('fr')}
          className={`
            px-3 py-1.5 rounded-full text-sm font-medium transition-all
            ${language === 'fr' 
              ? 'bg-gray-900 text-white' 
              : 'text-gray-600 hover:bg-gray-100'
            }
          `}
        >
          FR
        </button>
      </div>
    </div>
  );
};
