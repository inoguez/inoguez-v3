'use server';

// import { redirect } from 'next/navigation';

export async function postOnBoardMessage(formData: FormData) {
  console.log(Object.fromEntries(formData));
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_INOGUEZ_URL}/api/contact`,
    { method: 'POST', body: JSON.stringify(Object.fromEntries(formData)) }
  );
  const json = await res.json();

  const { data, error } = json;
  console.log(json);
  if (error) {
    return { error };
  }

  return json;
  //   redirect('/dashboard');
}

export async function sendOnBoardEmail(formData: FormData) {
  console.log(Object.fromEntries(formData));
  const res = await fetch(`${process.env.NEXT_PUBLIC_INOGUEZ_URL}/api/email`, {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  const json = await res.json();

  const { id, error } = json;
  console.log(json);
  if (error) {
    return { error };
  }
  console.log(json);
  return json;
  //   redirect('/dashboard');
}
