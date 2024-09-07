import { cn } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

export default function InoguezLogo({
  className,
  logoClassName,
}: {
  className?: string;
  logoClassName?: string;
}) {
  return (
    <div className={cn(className)}>
      <Link href='/'>
        <svg
          width='22'
          height='52'
          viewBox='0 0 22 52'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={cn(logoClassName)}
        >
          <path d='M14.4274 39.7649C13.3412 39.6564 12.199 39.6013 11 39.6013C10.0819 39.6013 9.35984 39.458 8.91167 39.1875C8.7475 39.0883 8.50007 38.9046 8.23864 38.4512C7.74613 37.5971 7.59441 36.4958 7.5734 36.1013V11.6946C8.65958 11.8023 9.80256 11.8558 11 11.8558C11.9181 11.8558 12.6402 11.9991 13.0883 12.2696C13.2525 12.3688 13.4999 12.5525 13.7614 13.0059C14.2539 13.8592 14.4056 14.9606 14.4266 15.3558V39.7657M21.5 51.5455V15.2683C21.5 15.2683 21.5 4.81066 11 4.81066C0.499999 4.81066 0.5 0 0.5 0V36.1896C0.5 36.1896 0.499999 46.648 11 46.648C21.5 46.648 21.5 51.5455 21.5 51.5455Z' />
        </svg>
      </Link>
    </div>
  );
}
