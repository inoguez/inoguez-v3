import CompetitiveEdge from '@/components/competitive-edge';
import Cta from '@/components/cta';
import FeaturedWork from '@/components/featured-work';
import FooterCta from '@/components/footer-cta';
import Status from '@/components/status';
import { i18n, Locale } from '@/i18n-config';
import fetchApi from '@/libs/strapi';
import {
  ApiCompetitiveEdgeCompetitiveEdge,
  ApiHomeHome,
  ApiWhatToBuildWhatToBuild,
  ApiWorkWork,
} from '@inoguez/strapi-types/ContentTypes';
import { Button } from '@nextui-org/react';
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}
async function getLayoutInfo(lang: string) {
  return await fetchApi<ApiHomeHome>({
    endpoint: 'home',
    query: { locale: lang },
    wrappedByKey: 'data',
  });
}

async function getCompetitiveEdges(lang: string) {
  return await fetchApi<ApiCompetitiveEdgeCompetitiveEdge[]>({
    endpoint: 'competitive-edges',
    query: { locale: lang },
    wrappedByKey: 'data',
  });
}

async function getFeaturedWork(lang: string) {
  return await fetchApi<ApiWorkWork[]>({
    endpoint: 'works',
    query: {
      locale: lang,
      'fields[0]': 'title',
      'fields[1]': 'content',
      'fields[2]': 'status',
      'fields[3]': 'description',
      'populate[showcase][fields][0]': 'url',
      'filters[featured][$eq]': 'true',
      'populate[technologies][fields][0]': 'name',
    },
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

export default async function Home({
  params,
}: Readonly<{
  params: { lang: Locale };
}>) {
  console.log(params);
  const layoutInfo = await getLayoutInfo(params.lang);
  const competitiveEdge = await getCompetitiveEdges(params.lang);
  const featuredWork = await getFeaturedWork(params.lang);
  const whatToBuild = await getWhatToBuild(params.lang);
  console.log(layoutInfo);
  console.log(whatToBuild);
  console.log(featuredWork);
  console.log(competitiveEdge);
  return (
    <main className='max-w-xl md:max-w-5xl mx-auto '>
      <div className='flex flex-col items-center gap-6 text-center'>
        <div className='flex flex-col items-center gap-8 text-center '>
          <div className='flex flex-col gap-4 '>
            <h1
              className='font-bold text-4xl md:text-8xl text-balance'
              dangerouslySetInnerHTML={{
                __html: layoutInfo?.attributes?.h1 ?? '<p></p>',
              }}
            ></h1>
            <h2 className='font-light text-lg md:text-2xl text-balance text-foreground/70'>
              {String(layoutInfo?.attributes?.h2)}
            </h2>
          </div>

          <div className='flex gap-2 max-w-md items-center justify-center'>
            <Cta
              whatToBuild={whatToBuild}
              label={String(layoutInfo?.attributes?.placeholderCtaInput)}
              ctaButtonText={String(layoutInfo?.attributes?.ctaButtonText)}
            />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h3 className='font-bold text-2xl'>
            {String(layoutInfo?.attributes?.competitiveEdge)}
          </h3>
          <div className='grid  md:grid-cols-3 gap-8'>
            {competitiveEdge?.map((e) => (
              <CompetitiveEdge
                competitiveEdge={e}
                key={String(e?.attributes?.title)}
              />
            ))}
          </div>
        </div>
        <h3 className='font-bold text-2xl'>
          {String(layoutInfo?.attributes?.featuredWork)}
        </h3>
        <div className='grid md:grid-cols-3'>
          {featuredWork?.map((e, index) => (
            <FeaturedWork item={e} key={index} />
          ))}
        </div>

        <div className=' flex flex-col gap-2'>
          <h3
            className='font-bold text-2xl '
            dangerouslySetInnerHTML={{
              __html: String(layoutInfo?.attributes?.h3Footer),
            }}
          />
          <FooterCta layoutInfo={layoutInfo} />
        </div>
      </div>
    </main>
  );
}
