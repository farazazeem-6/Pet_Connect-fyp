'use client';
import { ThemeProvider } from 'next-themes';
import { ThemeSync } from './ThemeSync';
import { Loader } from '@/components/elements';
import { useEffect, useState } from 'react';
import { globalStyles } from '@/theme';
import { QueryProvider } from '@/providers';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  globalStyles();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />;
  }
  return (
    <ThemeProvider attribute={'class'} defaultTheme="light">
      <QueryProvider>
        <ThemeSync />
        {children}
      </QueryProvider>
    </ThemeProvider>
  );
};
