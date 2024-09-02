'use server';

// import { redirect } from 'next/navigation';

export async function sendOnBoardMessage(prevState: any, formData: FormData) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_INOGUEZ_URL}/api/contact`,
    { body: JSON.stringify({ firstName: 'john' }) }
  );
  const json = await res.json();

  if (!res.ok) {
    return { message: 'Please enter a valid email' };
  }

  return json;
  //   redirect('/dashboard');
}
