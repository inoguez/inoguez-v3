'use client';
import { postOnBoardMessage, sendOnBoardEmail } from '@/app/actions';
import {
  ApiContactContact,
  ApiWhatToBuildWhatToBuild,
} from '@inoguez/strapi-types/generated/contentTypes';
import {
  Autocomplete,
  AutocompleteItem,
  Button,
  cn,
  Input,
} from '@nextui-org/react';
import { FieldApi, useForm } from '@tanstack/react-form';
import { useSearchParams } from 'next/navigation';
import React, { useMemo } from 'react';
import { zodValidator } from '@tanstack/zod-form-adapter';

import { z } from 'zod';
import { CircularProgress } from '@nextui-org/progress';

import { Toaster, toast } from 'sonner';
import { PopulatedImage } from '@/libs/utils';

function isValid(field: FieldApi<any, any, any, any>): boolean {
  return field.state.meta.isTouched && field.state.meta.errors.length > 0;
}
function FieldInfo(field: FieldApi<any, any, any, any>) {
  return field.state.meta.isTouched && field.state.meta.errors.length
    ? field.state.meta.errors.join(',')
    : field.state.meta.isValidating
    ? 'Validating...'
    : '';
}
export default function ContactForm({
  contactInfo,
  whatToBuild,
}: {
  contactInfo: ApiContactContact;
  whatToBuild: ApiWhatToBuildWhatToBuild[];
}) {
  function getFormData(object: any) {
    const formData = new FormData();
    Object.keys(object).forEach((key) => formData.append(key, object[key]));
    return formData;
  }
  const searchParams = useSearchParams();

  const form = useForm({
    defaultValues: {
      name: '',
      lastName: '',
      email: '',
      typeOfService: searchParams.get('service') ?? undefined,
      description: '',
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      const { id, error } = await postOnBoardMessage(getFormData(value));
      const response = await sendOnBoardEmail(getFormData(value));
      const success = id || response?.id;
      toast.success(
        success
          ? 'Form sent successfully'
          : '[' + error?.details?.errors?.[0]?.path?.[0] + '] ' + error?.message
      );
    },
    validatorAdapter: zodValidator(),
  });

  const title = String(contactInfo?.attributes?.title);
  const desc = String(contactInfo?.attributes?.description);
  const img = contactInfo?.attributes?.contactImage;

  const reducedData = useMemo(() => {
    return whatToBuild?.map((item) => ({
      label: item?.attributes?.label,
      value: item?.attributes?.value,
    }));
  }, [whatToBuild]);

  const populatedImg = img as unknown as PopulatedImage;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className='max-w-md mx-auto border-[1px] border-foreground p-4 rounded-3xl flex flex-col gap-6'
    >
      <Toaster richColors toastOptions={{ className: 'rounded-3xl' }} />
      <img
        src={
          process.env.NEXT_PUBLIC_STRAPI_URL +
          populatedImg?.data?.attributes?.url
        }
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
        <form.Field
          name='name'
          validators={{
            onChange: z.string().min(3, 'Name must be at least 3 characters'),
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: z.string().refine(
              async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes('error');
              },
              {
                message: "No 'error' allowed in name",
              }
            ),
          }}
        >
          {(field) => (
            <Input
              size='md'
              radius='full'
              variant='bordered'
              label={'Name'}
              isRequired
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
              isInvalid={isValid(field)}
              errorMessage={FieldInfo(field)}
            />
          )}
        </form.Field>
        <form.Field
          name='lastName'
          validators={{
            onChange: z
              .string()
              .min(3, 'Last Name must be at least 3 characters'),
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: z.string().refine(
              async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes('error');
              },
              {
                message: "No 'error' allowed in name",
              }
            ),
          }}
        >
          {(field) => (
            <Input
              size='md'
              radius='full'
              variant='bordered'
              label={'Last Name'}
              isRequired
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
              isInvalid={isValid(field)}
              errorMessage={FieldInfo(field)}
            />
          )}
        </form.Field>
        <form.Field
          name='email'
          validators={{
            onChange: z.string().email('Must be a valid email'),
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: z.string().refine(
              async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes('error');
              },
              {
                message: "No 'error' allowed in first name",
              }
            ),
          }}
        >
          {(field) => (
            <Input
              size='md'
              radius='full'
              variant='bordered'
              isRequired
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
              isInvalid={isValid(field)}
              errorMessage={FieldInfo(field)}
            />
          )}
        </form.Field>
        <form.Field
          name='typeOfService'
          validators={{
            onChange: z.string().min(1, 'You must select a type of service'),
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: z.string().refine(
              async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes('error');
              },
              {
                message: "No 'error' allowed in name",
              }
            ),
          }}
        >
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
              onSelectionChange={(e) => field.handleChange(e as string)}
              selectedKey={field.state.value}
              name={field.name}
              value={field.state.value}
              isRequired
              // placeholder='Search an animal'
              // defaultSelectedKey='cat'
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
              isInvalid={isValid(field)}
              errorMessage={FieldInfo(field)}
            >
              {(item) => (
                <AutocompleteItem key={String(item?.value)}>
                  {item ? String(item?.label) : ''}
                </AutocompleteItem>
              )}
            </Autocomplete>
          )}
        </form.Field>
        <form.Field
          name='description'
          validators={{
            onChange: z
              .string()
              .min(
                20,
                'You must enter a description with at least 20 characters'
              ),
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: z.string().refine(
              async (value) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return !value.includes('error');
              },
              {
                message: "No 'error' allowed in name",
              }
            ),
          }}
        >
          {(field) => (
            <Input
              size='md'
              radius='full'
              variant='bordered'
              label={'Tell us about your vision'}
              isRequired
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
              isInvalid={isValid(field)}
              errorMessage={FieldInfo(field)}
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
            className={cn('rounded-full p-6 w-full', {
              'bg-foreground/50': !canSubmit,
            })}
          >
            {isSubmitting ? <CircularProgress /> : 'Submit'}
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
}
