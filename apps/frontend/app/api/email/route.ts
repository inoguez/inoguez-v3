import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log(req);
  try {
    const { data, error } = await resend.emails.send({
      from: 'iNoguez OnBoarding <onboarding@resend.dev>',
      to: ['sk8ian100@gmail.com'],
      subject: 'New OnBoarding',
      react: EmailTemplate({ firstName: 'John' }),
    });
    console.log(data, error);
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
