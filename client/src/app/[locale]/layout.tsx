import type { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import localFont from "next/font/local";
import { notFound } from "next/navigation";

import { Footer } from "@/src/app/[locale]/Layout/components/Footer";
import { Nav } from "@/src/app/[locale]/Layout/components/Nav";
import "@/src/app/globals.css";
import Providers from "@/src/app/providers";
import { routing } from "@/src/i18n/routing";
import { Locales } from "@/src/types/locales";

const geistSans = localFont({
    src: "../fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "../fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: Locales }>;
}) {
    const { locale } = await params;
    if (!routing.locales.includes(locale as Locales)) {
        notFound();
    }
    const messages = await getMessages();
    return (
        <NextIntlClientProvider messages={messages}>
            <html lang={locale}>
                <body
                    className={`${geistSans.variable} ${geistMono.variable} antialiased bg-secondaryBG min-h-screen`}
                >
                    <Providers>
                        <Nav />
                        {children}
                        <Footer />
                    </Providers>
                </body>
            </html>
        </NextIntlClientProvider>
    );
}
