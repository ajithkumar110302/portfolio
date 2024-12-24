import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ajithkumar.pro'),
  title: "Ajitkumar's Portfolio",
  description: "I am a skilled software engineer specializing in front-end development with extensive experience in React js, TypeScript, javascript, Framer Motion, Next.js, Gatsby and SEO. Based in Bangalore Karnataka India, Ajithkumar's portfolio showcases modern web solutions and innovative designs crafted to enhance user experience and performance.",
  openGraph: {
    title: "Ajitkumar's Portfolio",
    description: "I am a skilled software engineer specializing in front-end development with extensive experience in React js, TypeScript, javascript, Framer Motion, Next.js, Gatsby and SEO. Based in Bangalore Karnataka India, Ajithkumar's portfolio showcases modern web solutions and innovative designs crafted to enhance user experience and performance.",
    url: 'https://ajithkumar.pro',
    siteName: 'Ajithkumar Portfolio',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Ajithkumar - Software Engineer',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },

  // Twitter card metadata
  twitter: {
    card: 'summary_large_image',
    title: "Ajitkumar's Portfolio",
    description: "I am a skilled software engineer specializing in front-end development with extensive experience in React js, TypeScript, javascript, Framer Motion, Next.js, Gatsby and SEO. Based in Bangalore Karnataka India, Ajithkumar's portfolio showcases modern web solutions and innovative designs crafted to enhance user experience and performance.",
    images: [
      {
        url: '/og-image.webp',
        alt: 'Ajithkumar - Software Engineer',
        width: 1200,
        height: 630,
      },
    ],
  },

  // Additional metadata
  keywords: [
    "Ajith Kumar",
    "portfolio",
    "software engineer",
    "front-end developer",
    "React developer",
    "JavaScript developer",
    "software engineer in bangalore",
    "front-end developer in bangalore",
    "React developer in bangalore",
    "JavaScript developer in bangalore",
    "Tailwind CSS",
    "Framer Motion",
    "Next.js",
    "TypeScript",
    "Gatsby developer",
    "Gatsby developer in bangalore",
    "Firebase",
    "Netlify",
    "AWS",
    "Contentful",
    "SEO specialist",
    "UI/UX developer",
    "web development",
    "full-stack developer",
    "dynamic web pages",
    "localization",
    "scalable web apps",
    "static site generation",
    "Ajith Kumar portfolio",
    "ajithkumar.pro",
    "React projects",
    "modern web design",
    "web animation",
    "interactive websites",
    "freelance developer",
    "coding portfolio",
    "developer portfolio website"
  ],
  authors: [{ name: 'Ajithkumar' }],
  creator: 'Ajithkumar',
  publisher: 'Ajithkumar',
  formatDetection: {
    email: true, // Enabled for easy parent communication
    address: true, // Enabled for easy navigation to school
    telephone: true, // Enabled for quick parent contact
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
