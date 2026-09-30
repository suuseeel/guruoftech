import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundFX } from "@/components/background-fx";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ChatWidget } from "@/components/chatbot/chat-widget";
import { Toaster } from "@/components/toaster";
import { BrandProvider } from "@/components/brand/context";
import { getRequestBrand } from "@/lib/brand-server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const brand = await getRequestBrand();
  return {
    title: {
      default: `${brand.name} — Software, Web & Mobile Development`,
      template: `%s — ${brand.name}`,
    },
    description: brand.description,
    icons: { icon: brand.favicon },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const brand = await getRequestBrand();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-background text-foreground">
        <BrandProvider brand={brand}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <BackgroundFX />
            <ScrollToTop />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatWidget />
            <Toaster />
          </ThemeProvider>
        </BrandProvider>
      </body>
    </html>
  );
}
