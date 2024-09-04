'use client';
import { ApiHomeHome } from '@inoguez/strapi-types/ContentTypes';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function FooterCta({ layoutInfo }: { layoutInfo: ApiHomeHome }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push('/contact')}
      className='rounded-full p-5 w-full'
    >
      {String(layoutInfo?.attributes?.ctaButtonFooterText)}
    </Button>
  );
}
