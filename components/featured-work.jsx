import Link from 'next/link';
import Status from './status';
import Image from 'next/image';

export default function FeaturedWork({ item }) {
  console.log(item);
  console.log(item.attributes.showcase.data?.[0].attributes.url);
  const path = item.attributes.showcase.data?.[0].attributes.url;
  return (
    <div className='relative p-4 border-[1px] border-foreground  grid rounded-3xl gap-4 text-left'>
      {path && (
        <Image
          fill
          className='sticky rounded-2xl '
          src={process.env.NEXT_PUBLIC_STRAPI_URL + path}
          alt=''
        />
      )}
      <div>
        <Link
          href='#'
          className='text-xl font-semibold link link--kale !text-foreground'
        >
          {String(item.attributes.title)}
        </Link>
      </div>
      <Status status={String(item.attributes.status)} />

      {/* //Tecnologias */}
      <span className='text-foreground/70'>
        {String(item.attributes.description)}
      </span>
    </div>
  );
}
