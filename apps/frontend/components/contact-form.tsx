'use client';
import {
  ApiContactContact,
  ApiWhatToBuildWhatToBuild,
} from '@inoguez/strapi-types/ContentTypes';
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  Input,
} from '@nextui-org/react';
import { useForm } from '@tanstack/react-form';
import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';

export default function ContactForm({
  contactInfo,
  whatToBuild,
}: {
  contactInfo: ApiContactContact;
  whatToBuild: ApiWhatToBuildWhatToBuild[];
}) {
  console.log(contactInfo);
  console.log(whatToBuild);
  const form = useForm({
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      typeOfService: '',
      moreInfo: '',
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  const title = String(contactInfo?.attributes?.title);
  const desc = String(contactInfo?.attributes?.description);
  const img = contactInfo?.attributes?.contactImage;
  console.log(img);
  const searchParams = useSearchParams();
  console.log(searchParams.get('service'));

  const reducedData = useMemo(() => {
    return whatToBuild?.map((item) => ({
      label: item?.attributes?.label,
      value: item?.attributes?.value,
    }));
  }, [whatToBuild]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className='max-w-md mx-auto border-[1px] border-foreground p-4 rounded-3xl flex flex-col gap-6'
    >
      <img
        src={process.env.NEXT_PUBLIC_STRAPI_URL + img?.data?.attributes?.url}
        alt=''
        className='aspect-video rounded-3xl overflow-hidden'
      />
      <div>
        <h1 className='text-xl font-bold'>{title}</h1>
        <span
          className='font-extralight'
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      </div>
      <div className='flex flex-col gap-4'>
        <form.Field name='name'>
          {(field) => (
            <Input
              size='md'
              radius='full'
              variant='bordered'
              label={'Name'}
              classNames={{
                label:
                  'text-foreground/50 group-data-[filled-within=true]:text-foreground',
                inputWrapper:
                  'border-[1px] border-foreground group-data-[focus=true]:border-foreground',
              }}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        <form.Field name='lastName'>
          {(field) => (
            <Input
              size='md'
              radius='full'
              variant='bordered'
              label={'Last Name'}
              classNames={{
                label:
                  'text-foreground/50 group-data-[filled-within=true]:text-foreground',
                inputWrapper:
                  'border-[1px] border-foreground group-data-[focus=true]:border-foreground',
              }}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        <form.Field name='email'>
          {(field) => (
            <Input
              size='md'
              radius='full'
              variant='bordered'
              label={'Email'}
              classNames={{
                label:
                  'text-foreground/50 group-data-[filled-within=true]:text-foreground',

                inputWrapper:
                  'border-[1px] border-foreground group-data-[focus=true]:border-foreground',
              }}
              type='email'
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
        <form.Field name='typeOfService'>
          {(field) => (
            // <Input
            //   size='md'
            //   radius='full'
            //   variant='bordered'
            //   label={'Service'}
            //   classNames={{
            //     label:
            //       'text-foreground/50 group-data-[filled-within=true]:text-foreground',
            //     inputWrapper:
            //       'border-[1px] border-foreground group-data-[focus=true]:border-foreground',
            //   }}
            //   name={field.name}
            //   value={field.state.value}
            //   onBlur={field.handleBlur}
            //   onChange={(e) => field.handleChange(e.target.value)}
            // />
            <Autocomplete
              size='md'
              label={'Service'}
              defaultItems={reducedData}
              onValueChange={(e) => {}}
              // placeholder='Search an animal'
              defaultSelectedKey='cat'
              classNames={{
                base: 'w-full text-foreground',
                listboxWrapper: 'max-h-[320px] text-foreground',
                selectorButton: 'text-default-500 text-foreground',
              }}
              inputProps={{
                classNames: {
                  input: 'ml-1 !text-foreground ',
                  inputWrapper:
                    ' !text-foreground border-[1px] !border-foreground ',
                  label:
                    'text-foreground/50 group-data-[filled-within=true]:text-foreground',
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
          )}
        </form.Field>
        <form.Field name='moreInfo'>
          {(field) => (
            <Input
              size='md'
              radius='full'
              variant='bordered'
              label={'Tell us about your vision'}
              classNames={{
                label:
                  'text-foreground/50 group-data-[filled-within=true]:text-foreground',
                inputWrapper:
                  'border-[1px] border-foreground group-data-[focus=true]:border-foreground',
              }}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        </form.Field>
      </div>
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
      >
        {([canSubmit, isSubmitting]) => (
          <Button
            type='submit'
            disabled={!canSubmit}
            className='rounded-full p-6 w-full'
          >
            {isSubmitting ? '...' : 'Submit'}
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
}
