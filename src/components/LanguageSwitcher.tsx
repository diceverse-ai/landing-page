'use client';

import { useRouter, usePathname } from 'next/navigation';
import NextImage from 'next/image';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (locale: string) => {
    // Si estamos en la página principal
    if (pathname === '/' || pathname === '/es') {
      router.push(locale === 'en' ? '/' : '/es');
      return;
    }
    // Para otras páginas
    const newPath = pathname.replace(/^\/es/, '');
    router.push(locale === 'en' ? newPath : `/es${newPath}`);
  };

  const isSpanish = pathname.startsWith('/es');

  return (
    <div className="relative mx-auto flex items-center gap-4 mt-8">
      <button
        onClick={() => switchLanguage('en')}
        className={`relative group flex items-center justify-center w-8 h-8 overflow-hidden rounded-full transition-transform ${
          !isSpanish ? 'scale-110 ring-2 ring-purple-500' : 'hover:scale-110'
        }`}
        aria-label="Switch to English"
      >
        <NextImage
          src="/flags/gb.svg"
          alt="English"
          width={32}
          height={32}
          className="object-cover w-full h-full"
        />
      </button>
      <button
        onClick={() => switchLanguage('es')}
        className={`relative group flex items-center justify-center w-8 h-8 overflow-hidden rounded-full transition-transform ${
          isSpanish ? 'scale-110 ring-2 ring-purple-500' : 'hover:scale-110'
        }`}
        aria-label="Cambiar a Español"
      >
        <NextImage
          src="/flags/es.svg"
          alt="Español"
          width={32}
          height={32}
          className="object-cover w-full h-full"
        />
      </button>
    </div>
  );
}