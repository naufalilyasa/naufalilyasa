"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const NextThemesProviderTag = NextThemesProvider as any;

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProviderTag
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      {children}
    </NextThemesProviderTag>
  );
}
