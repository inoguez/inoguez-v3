'use client';
import { Drawer } from 'vaul';
import React, { useState } from 'react';
import { Button, cn } from '@nextui-org/react';
import {
  LuBookMarked,
  LuBriefcase,
  LuChevronsLeftRight,
  LuContact2,
  LuDribbble,
  LuGithub,
  LuHome,
  LuLayers,
  LuLinkedin,
  LuMenu,
  LuWand,
  LuX,
} from 'react-icons/lu';
import InoguezLogo from './inoguez-logo';
import Link from 'next/link';
import { useAppContext } from '@/app/providers/AppProvider';

export default function MobileNavbar({ className }: { className?: string }) {
  const NAVIGATION_ICONS = {
    home: LuHome,
    about: LuBookMarked,
    work: LuBriefcase,
    services: LuWand,
    blog: LuLayers,
    contact: LuContact2,
  };
  const { language, setLanguage, navigation } = useAppContext();
  const [open, setOpen] = useState(false);
  return (
    <Drawer.Root shouldScaleBackground open={open} onOpenChange={setOpen}>
      <Drawer.Trigger className={cn(className)} asChild>
        <Button variant='solid' className='  aspect-square !p-0 '>
          <LuMenu />
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40 ' />
        <Drawer.Content
          aria-describedby={undefined}
          className='fixed inset-x-0 bottom-0 z-50 mt-24 flex p-6 flex-col rounded-t-[10px] border bg-background h-[95vh]'
        >
          <div className='flex justify-between '>
            <Drawer.Title>
              <InoguezLogo className='fill-foreground' />
            </Drawer.Title>
            {/* <DrawerDescription>This action cannot be undone.</DrawerDescription>  */}
            <Drawer.Close asChild className='aspect-square !p-0 min-w-0'>
              <Button
                variant='solid'
                className='aspect-square !p-0 rounded-full'
              >
                <LuX className='text-xl' />
              </Button>
            </Drawer.Close>
          </div>
          <div className='grid gap-6 place-content-center flex-1 text-xl text-foreground'>
            {navigation?.map((item, index) => {
              const slug = item.attributes
                .slug as unknown as keyof typeof NAVIGATION_ICONS;
              const Icon = NAVIGATION_ICONS[slug] || NAVIGATION_ICONS['home'];
              const url = item?.attributes?.slug
                ? `${item?.attributes?.slug}`
                : `/`;
              console.log(url);
              return (
                <div key={index}>
                  <Link
                    onClick={() => setOpen(false)}
                    href={url}
                    className='flex items-center gap-2 link link--kale !text-foreground'
                  >
                    <Icon />
                    {String(item?.attributes?.title)}
                  </Link>
                </div>
              );
            })}
          </div>
          <div className='flex justify-evenly text-3xl px-4 py-12 text-foreground'>
            <a href=''>
              <LuGithub />
            </a>
            <a href=''>
              <LuLinkedin />
            </a>
            <a href=''>
              <LuDribbble />
            </a>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
