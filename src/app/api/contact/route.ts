import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { siteConfig } from '@/data/content';

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(6),
  email: z.string().email().optional().or(z.literal('')),
  message: z.string().optional(),
  privacy: z.literal(true),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Log in production — replace with SMTP / notification service
    console.log('[Contact Form]', {
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // Optional: send email via nodemailer / resend / sendgrid
    // await sendEmail({ to: siteConfig.contact.email, ...data });

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: 'Dati non validi', details: err.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Errore interno' }, { status: 500 });
  }
}
