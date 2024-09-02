import Link from 'next/link';
import Status from './status';

export default function FeaturedWork({ item }) {
  console.log(item);
  return (
    <div className='relative p-4 border-[1px] border-foreground  grid rounded-3xl gap-4 text-left'>
      <img
        className='sticky rounded-2xl '
        src={
          process.env.NEXT_PUBLIC_STRAPI_URL +
          item.attributes.showcase.data?.[0].attributes.url
        }
        alt=''
      />
      <Link href='#' className='text-xl font-semibold'>
        {String(item.attributes.title)}
      </Link>
      <Status status={String(item.attributes.status)} />

      {/* //Tecnologias */}
      <span className='text-foreground/70'>
        {String(item.attributes.description)}
      </span>
    </div>
  );
}
