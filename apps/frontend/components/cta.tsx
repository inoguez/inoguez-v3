'use client';
import { ApiWhatToBuildWhatToBuild } from '@inoguez/strapi-types/ContentTypes';
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from '@nextui-org/autocomplete';
import { Button } from '@nextui-org/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo, useState } from 'react';

export default function Cta({
  label,
  ctaButtonText,
  whatToBuild,
  onValueChange,
  value,
}: {
  label: string;
  ctaButtonText: String;
  whatToBuild: ApiWhatToBuildWhatToBuild[];
  onValueChange?: (value: string) => void;
  value?: string;
}) {
  const [valor, setValor] = useState('');

  console.log(valor);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const reducedData = useMemo(() => {
    return whatToBuild?.map((item) => ({
      label: item?.attributes?.label,
      value: item?.attributes?.value,
    }));
  }, [whatToBuild]);

  if (!whatToBuild) return;

  function handleClick() {
    router.push(
      `${pathname}/contact` + '?' + createQueryString('service', valor)
    );
  }

  return (
    <div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
      <Autocomplete
        label={label}
        defaultItems={reducedData}
        onSelectionChange={(e) => {
          console.log(e);
          setValor(String(e));
          onValueChange && onValueChange(String(e));
        }}
        onValueChange={(e) => {}}
        // placeholder='Search an animal'
        defaultSelectedKey='cat'
        classNames={{
          base: 'max-w-xs text-foreground',
          listboxWrapper: 'max-h-[320px] text-foreground',
          selectorButton: 'text-default-500 text-foreground',
        }}
        inputProps={{
          classNames: {
            input: 'ml-1 !text-foreground ',
            inputWrapper:
              'h-[48px]  !text-foreground border-[1px] !border-foreground',
            label: '!text-foreground after:text-accent',
          },
        }}
        listboxProps={{
          hideSelectedIcon: true,
          itemClasses: {
            base: [
              'rounded-medium',
              'text-foreground',
              'transition-opacity',
              'data-[hover=true]:text-background',
              'dark:data-[hover=true]:bg-accent',
              'data-[pressed=true]:opacity-70',
              'data-[hover=true]:bg-foreground',
              'data-[selectable=true]:focus:bg-accent',
              'data-[focus-visible=true]:ring-accent',
            ],
          },
        }}
        popoverProps={{
          offset: 10,
          classNames: {
            backdrop: '!bg-background/30  !backdrop-blur transition-all',
            base: 'rounded-large text-foreground ',
            content:
              'p-1 border-small border-default-100 !bg-background/30  !backdrop-blur transition-all  ',
          },
        }}
        clearButtonProps={{ className: 'text-foreground' }}
        radius='full'
        variant='bordered'
      >
        {(item) => (
          <AutocompleteItem key={String(item?.value)}>
            {item ? String(item?.label) : ''}
          </AutocompleteItem>
        )}
      </Autocomplete>
      <Button onClick={handleClick} className='rounded-full p-6'>
        {ctaButtonText}
      </Button>
    </div>
  );
}
