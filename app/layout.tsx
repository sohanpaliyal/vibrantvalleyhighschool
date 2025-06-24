import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vibrant Valley High School - Excellence in Education",
  description:
    "Vibrant Valley High School is a premier CBSE institution committed to providing quality education and nurturing young minds for a bright future.",
  keywords:
    "CBSE school, education, high school, academics, extracurricular activities, student development",
  authors: [{ name: "Vibrant Valley High School" }],
  openGraph: {
    title: "Vibrant Valley High School - Excellence in Education",
    description:
      "Premier CBSE institution committed to providing quality education and nurturing young minds.",
    url: "http://vibrantvalleyhighschool.com",
    siteName: "Vibrant Valley High School",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibrant Valley High School - Excellence in Education",
    description:
      "Premier CBSE institution committed to providing quality education and nurturing young minds.",
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: `'Inter', sans-serif` }}>{children}</body>
    </html>
  );
}
