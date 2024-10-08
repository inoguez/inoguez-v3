import '../globals.css';
import type { Metadata } from 'next';
import localfont from 'next/font/local';
import { Providers } from '../providers';
import InoguezLogo from '@/components/inoguez-logo';
import { cn } from '@nextui-org/react';
import { i18n, type Locale } from '@/i18n-config';
import fetchApi from '@/libs/strapi';
const myFont = localfont({ src: '../../fonts/Nohemi-VF.ttf' });
import {
  ApiNavigationNavigation,
  ApiSocialSocial,
} from '@inoguez/strapi-types/generated/contentTypes';
import { ReactLenis } from '@/libs/lenis';
import Header from '@/components/header';

import { BsCheckLg } from 'react-icons/bs';
import { SOCIALS_ICONS } from '@/libs/utils';
import Link from 'next/link';
import { DiVim } from 'react-icons/di';
import { AppProvider } from '../providers/AppProvider';
export const metadata: Metadata = {
  title: 'iNoguez',
  description: 'Generated by create next app',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

async function getNavigation(lang: string) {
  const nav = await fetchApi<ApiNavigationNavigation[]>({
    endpoint: 'navigations',
    query: { locale: lang },
    wrappedByKey: 'data',
  });
  return nav;
}
async function getSocials(lang: string) {
  const nav = await fetchApi<ApiSocialSocial[]>({
    endpoint: 'socials',
    query: { locale: lang },
    wrappedByKey: 'data',
  });
  return nav;
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const navigation = await getNavigation(params.lang);
  const socials = await getSocials(params.lang);
  return (
    <html lang='en' className='dark'>
      <body
        className={cn('!bg-foreground [font-display:swap]', myFont.className)}
      >
        <AppProvider
          initialLanguage={params.lang}
          socials={socials}
          navigation={navigation}
        >
          <ReactLenis root>
            <div
              vaul-drawer-wrapper=''
              className='relative wrapper min-h-dvh rounded-b-[3rem]'
            >
              <Header />
              <div className='p-6 pt-28 md:pt-32'>
                <Providers data-scroll data-scroll-speed>
                  {children}
                </Providers>
              </div>
            </div>
            <footer className='flex flex-col gap-4 bg-foreground rounded-3xl p-6 transition-colors duration-700'>
              <div className='flex items-center gap-4 text-background'>
                <div className='px-4'>
                  <InoguezLogo
                    logoClassName='fill-background'
                    className='fill-background transition-colors  duration-700'
                  />
                </div>
                <nav className='flex-1 grid grid-cols-2 gap-2  transition-colors duration-700'>
                  {navigation?.map((item, index) => {
                    const url = item?.attributes?.slug
                      ? `${params.lang}/${item?.attributes?.slug}`
                      : `/`;
                    console.log(url);
                    return (
                      <div key={index} className=''>
                        <Link className='link link--kale font-light' href={url}>
                          <span className='font-light'>
                            {String(item?.attributes?.title)}
                          </span>
                        </Link>
                      </div>
                    );
                  })}
                </nav>
              </div>
              <div className='flex tems-center text-background text-2xl transition-colors duration-700'>
                <div className='flex-1 flex justify-evenly'>
                  {socials?.map((e, index) => {
                    const title = e.attributes
                      .title as unknown as keyof typeof SOCIALS_ICONS;
                    const Icon = SOCIALS_ICONS[title]
                      ? SOCIALS_ICONS[title]
                      : SOCIALS_ICONS['Github'];
                    return (
                      <Link
                        className='link link--kale'
                        target='_blank'
                        href={String(e.attributes.url)}
                        key={index}
                      >
                        <Icon />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </footer>
          </ReactLenis>
        </AppProvider>
      </body>
    </html>
  );
}
