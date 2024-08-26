'use client';
import { ApiWhatToBuildWhatToBuild } from '@inoguez/strapi-types/ContentTypes';
import {
  Autocomplete,
  AutocompleteSection,
  AutocompleteItem,
} from '@nextui-org/autocomplete';
import { useMemo } from 'react';

export default function Cta({
  label,
  whatToBuild,
}: {
  label: string;
  whatToBuild: ApiWhatToBuildWhatToBuild[];
}) {
  console.log(whatToBuild);

  const reducedData = useMemo(() => {
    return whatToBuild.map((item) => ({
      label: item.attributes.label,
      value: item.attributes.value,
    }));
  }, [whatToBuild]);

  return (
    <div className='flex w-full flex-wrap md:flex-nowrap gap-4'>
      <Autocomplete
        label={label}
        defaultItems={reducedData}
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
          <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
}
