import "@repo/ui/globals.css";
import { Providers } from "@/components/providers";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${inter} bg-beige text-black selection:bg-ruby selection:text-beige`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
