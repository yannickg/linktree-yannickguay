import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yannick Guay | Links",
  description: "Connect with Yannick Guay and discover resources for digital entrepreneurs and content creators.",
  keywords: ["yannick guay", "digital entrepreneur", "content creator", "linktree"],
  authors: [{ name: "Yannick Guay" }],
  metadataBase: new URL("https://yannickguay.com"),
  openGraph: {
    title: "Yannick Guay | Links",
    description: "Connect with Yannick Guay and discover resources for digital entrepreneurs and content creators.",
    url: "https://yannickguay.com",
    siteName: "Yannick Guay",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yannick Guay | Links",
    description: "Connect with Yannick Guay and discover resources for digital entrepreneurs and content creators.",
    creator: "@yannickguay",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4W5Z1EYVBY"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4W5Z1EYVBY');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
