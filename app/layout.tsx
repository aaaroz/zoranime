import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

import Providers from "@/components/auth/providers";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: {
    template: "%s | ZORANIME",
    default: "ZORANIME",
  },
  description: "The most popular anime and manga site on the internet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="ihCWTRC0MEpqWPZLR_TD8czCoqLJNWvojV-wthtZMQk"
        />
      </head>
      <body className={poppins.className} suppressHydrationWarning>
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <ScrollToTop />
            <Toaster position="top-right" duration={2000} />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
