import Link from 'next/link';
import Status from './status';
import Image from 'next/image';

export default function FeaturedWork({ item }) {
  console.log(item);
  const url = item?.attributes?.portrait?.data?.attributes?.url;
  console.log(url);
  return (
    <div className='relative p-4 border-[1px] border-foreground  grid rounded-3xl gap-4 text-left'>
      <div className='relative aspect-video  overflow-hidden'>
        {url && (
          <Image
            fill
            className='sticky rounded-2xl '
            src={url}
            alt={'Image showin the project' + item?.attributes?.title}
          />
        )}
      </div>
      <div>
        <Link
          href='#'
          className='text-xl font-semibold link link--kale !text-foreground'
        >
          {String(item?.attributes?.title)}
        </Link>
      </div>
      <Status status={String(item?.attributes?.status)} />

      {/* //Tecnologias */}
      <span className='text-foreground/70'>
        {String(item?.attributes?.description)}
      </span>
    </div>
  );
}
