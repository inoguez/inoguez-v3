'use client';
import { Drawer } from 'vaul';
import React from 'react';
import { Button, cn } from '@nextui-org/react';
import {
  LuBookMarked,
  LuBriefcase,
  LuChevronsLeftRight,
  LuDribbble,
  LuGithub,
  LuHome,
  LuLayers,
  LuLinkedin,
  LuMenu,
  LuWand,
  LuX,
} from 'react-icons/lu';
import { ApiNavigationNavigation } from '@inoguez/strapi-types/ContentTypes';
import InoguezLogo from './inoguez-logo';

export default function MobileNavbar({
  navigation,
  className,
}: {
  navigation: ApiNavigationNavigation[];
  className?: string;
}) {
  console.log(navigation, 'xdxd');
  return (
    <Drawer.Root shouldScaleBackground>
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
            <a href='' className='flex items-center gap-2'>
              <LuHome />
              <span>Home</span>
            </a>
            <a href='' className='flex items-center gap-2'>
              <LuBookMarked />
              About
            </a>
            <a href='' className='flex items-center gap-2'>
              <LuBriefcase />
              Portfolio
            </a>
            <a href='' className='flex items-center gap-2'>
              <LuWand />
              Services
            </a>
            <a href='' className='flex items-center gap-2'>
              <LuLayers />
              Blog
            </a>
            <a href='' className='flex items-center gap-2'>
              <LuChevronsLeftRight />
              Repositories
            </a>
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
