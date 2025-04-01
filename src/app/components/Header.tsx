import { Theme } from '../../types/theme';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  theme?: Theme;
}

export const Header = ({ theme }: HeaderProps) => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHeaderClasses = () => {
    if (!theme) return 'bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-lg';
    return `${theme.colors.primary} backdrop-blur-lg`;
  };

  return (
    <header 
      className={`
        fixed w-full z-50 transition-all duration-300
        ${getHeaderClasses()}
        ${scrolled ? 'py-4 shadow-lg' : 'py-20'}
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-start justify-between max-w-4xl mx-auto w-full gap-8">
        <div className={`
            relative w-32 h-32 md:w-40 md:h-40
            transition-all duration-300
            ${scrolled ? 'transform scale-75' : ''}
          `}>
            <Image
              src="/images/profile.jpeg"
              alt="Léo Brunet"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 
              className={`
                font-playfair text-4xl md:text-6xl font-bold mb-4
                bg-clip-text text-transparent
                text-white
                transition-all duration-300
                ${scrolled ? 'transform scale-75 origin-left' : ''}
              `}
            >
              {t('header.title')}
            </h1>
            <p className={`
              text-xl md:text-2xl
              text-white/90
              transition-all duration-300
              mb-6
            `}>
              {t('header.subtitle')}
            </p>
            <div className="flex gap-4 text-white/80 text-sm md:text-base">
              <Link href="mailto:leobrunet91@gmail.com" className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                leobrunet91@gmail.com
              </Link>
              <Link href="https://github.com/leobrunet" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/léo-brunet-a75546174/" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full rotate-12 bg-gradient-to-r from-white/5 to-transparent" />
        <div className="absolute top-0 left-1/4 w-24 h-24 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute bottom-1/4 right-1/3 w-32 h-32 rounded-full bg-white/5 blur-3xl" />
      </div>
    </header>
  );
};
