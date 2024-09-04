import React from 'react';
import { i18n, Locale } from '@/i18n-config';
import fetchApi from '@/libs/strapi';
import {
  ApiContactContact,
  ApiWhatToBuildWhatToBuild,
} from '@inoguez/strapi-types/generated/contentTypes';
import ContactForm from '@/components/contact-form';
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
async function getContactInfo(lang: string) {
  return await fetchApi<ApiContactContact>({
    endpoint: 'contact',
    query: { locale: lang, populate: 'contactImage' },
    wrappedByKey: 'data',
  });
}
async function getWhatToBuild(lang: string) {
  return await fetchApi<ApiWhatToBuildWhatToBuild[]>({
    endpoint: 'what-to-builds',
    query: {
      locale: lang,
      'fields[0]': 'label',
      'fields[1]': 'value',
    },
    wrappedByKey: 'data',
  });
}
export default async function Contact({
  params,
}: Readonly<{
  params: { lang: Locale };
}>) {
  const contactInfo = await getContactInfo(params.lang);
  const whatToBuild = await getWhatToBuild(params.lang);
  console.log(contactInfo);
  console.log(whatToBuild);
  return (
    <main className='max-w-xl md:max-w-5xl mx-auto flex flex-col gap-4'>
      <h1 className='text-3xl font-bold text-center'>Contact</h1>
      <ContactForm contactInfo={contactInfo} whatToBuild={whatToBuild} />
    </main>
  );
}
