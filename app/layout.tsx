import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { sharedMetadata, siteConfig } from "./shared-metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...sharedMetadata,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#3033C8] overflow-x-hidden`}
      >
        <ClientLayout>
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Event",
                name: siteConfig.title,
                description: siteConfig.description,
                url: siteConfig.url,
                startDate: "2026-02-27",
                endDate: "2026-03-01",
                eventStatus: "https://schema.org/EventScheduled",
                eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
                location: {
                  "@type": "Place",
                  name: "IIM Bangalore",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Bannerghatta Road",
                    addressLocality: "Bangalore",
                    postalCode: "560076",
                    addressCountry: "IN",
                  },
                },
                organizer: {
                  "@type": "Organization",
                  name: "Unmaad IIMB",
                  url: siteConfig.url,
                  sameAs: [siteConfig.links.instagram],
                },
              }),
            }}
          />
        </ClientLayout>
      </body>
    </html>
  );
}
