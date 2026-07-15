import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saukhyad.vercel.app"),
  title: "Saukhyad Mohole — Software Developer & AI Engineer",
  description:
    "Portfolio of Saukhyad Mohole — B.Tech CSE student at VIT Vellore (CGPA 9.03), specializing in AI/ML, Cloud (AWS), and Full-Stack Development. NUS Best Capstone awardee, IEEE co-author, Oracle Cloud certified.",
  keywords: [
    "Saukhyad Mohole",
    "Software Developer",
    "AI Engineer",
    "Machine Learning",
    "AWS",
    "Full Stack Developer",
    "VIT Vellore",
    "Portfolio",
    "Computer Science",
    "Data Science",
  ],
  authors: [{ name: "Saukhyad Mohole" }],
  creator: "Saukhyad Mohole",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saukhyad.vercel.app",
    title: "Saukhyad Mohole — Software Developer & AI Engineer",
    description:
      "Portfolio of Saukhyad Mohole — AI/ML Engineer, Cloud Architect, Full-Stack Developer. B.Tech CSE at VIT Vellore.",
    siteName: "Saukhyad Mohole Portfolio",
    images: [
      {
        url: "https://saukhyad.vercel.app/profile.png",
        width: 400,
        height: 400,
        alt: "Saukhyad Mohole",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Saukhyad Mohole — Software Developer & AI Engineer",
    description:
      "AI/ML Engineer, Cloud Architect, Full-Stack Developer. B.Tech CSE at VIT Vellore. CGPA 9.03.",
    images: ["https://saukhyad.vercel.app/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="canonical" href="https://saukhyad.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Saukhyad Mohole",
              alternateName: "Mohole Saukhyad Bhupendra",
              url: "https://saukhyad.vercel.app",
              image: "https://saukhyad.vercel.app/profile.png",
              jobTitle: "Software Developer & AI Engineer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Vellore Institute of Technology",
              },
              sameAs: [
                "https://github.com/SaukhyadMohole",
                "https://linkedin.com/in/saukhyad-mohole",
              ],
              knowsAbout: [
                "Machine Learning",
                "Artificial Intelligence",
                "Cloud Computing",
                "AWS",
                "Python",
                "Java",
                "React",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#050507] text-slate-200 selection:bg-indigo-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
