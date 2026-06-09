import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function telHref(phoneRaw: string) {
  return phoneRaw ? `tel:${phoneRaw}` : '';
}

export function hasPhone(phoneRaw: string) {
  return Boolean(phoneRaw?.trim());
}

export function hasWhatsapp(whatsapp: string) {
  return Boolean(whatsapp?.trim());
}

export function hasEmail(email: string) {
  return Boolean(email?.trim()) && !email.startsWith('[');
}

export function whatsappHref(whatsapp: string, text?: string) {
  const base = `https://wa.me/${whatsapp}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function mailtoHref(email: string) {
  return `mailto:${email}`;
}
