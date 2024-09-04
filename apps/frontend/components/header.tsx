'use client';
import { useCallback, useState } from 'react';
import { useLenis } from 'lenis/react';
import InoguezLogo from './inoguez-logo';
import MobileNavbar from './mobile-navbar';
import { cn } from '@nextui-org/react';
const BLUR_THRESHOLD = 50;
export default function Header() {
  const [blur, setBlur] = useState(false);
  const handleScroll = useCallback((scroll: number) => {
    setBlur(scroll > BLUR_THRESHOLD);
  }, []);

  useLenis(({ scroll }) => {
    handleScroll(scroll);
  });

  return (
    <header
      className={cn(
        `fixed w-full flex justify-between ease-in-out transition-all duration-400 p-4  z-50`,
        {
          'backdrop-blur-md shadow-md': blur,
          'shadow-none': !blur,
        }
      )}
    >
      <InoguezLogo
        className={'fill-foreground flex-1 flex items-center justify-center'}
        logoClassName={'fill-foreground '}
      />
      <MobileNavbar className='absolute right-[1.4rem] top-1/2 -translate-y-1/2 text-4xl min-w-0 rounded-full !p-2' />
    </header>
  );
}
