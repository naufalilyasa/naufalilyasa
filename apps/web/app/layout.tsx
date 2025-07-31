import "@repo/ui/globals.css";
import { Providers } from "@/components/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-mono bg-beige">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
