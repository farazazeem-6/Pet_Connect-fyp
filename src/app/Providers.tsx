'use client';
import { useEffect, useState } from 'react';
import { QueryProvider } from '@/providers';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    //we will show loader here
    return;
  }
  return <QueryProvider>{children}</QueryProvider>;
};
