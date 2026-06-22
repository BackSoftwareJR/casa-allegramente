import type { ReactNode } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function BlogLayout({ children, sidebar }: BlogLayoutProps) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-14">
      <div className="min-w-0">{children}</div>
      <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">{sidebar}</aside>
    </div>
  );
}
