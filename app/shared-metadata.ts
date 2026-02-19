import { Metadata } from "next";

export const siteConfig = {
    title: "Unmaad 2026",
    description: "Unmaad is the annual cultural festival of IIM Bangalore. Join us for the biggest B-School cultural fest in India! Experience music, dance, drama, and more from 27th Feb-1st Mar '26.",
    url: "https://www.unmaad.co.in",
    links: {
        instagram: "https://www.instagram.com/unmaad_iimb",
    },
    keywords: [
        "Unmaad",
        "Unmaad 2026",
        "IIM Bangalore",
        "Cultural Fest",
        "Indian Institute of Management Bangalore",
        "IIMB",
        "IIM College Fest",
        "Unmaad 26",
        "Cultural Fest 26",
        "IIMB Cultural Fest",
        "Raman Negi",
        "Seedhe Maut",
        "Bangalore Events",
    ],
};

export const sharedMetadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.title}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    robots: {
        index: true,
        follow: true,
    },
    metadataBase: new URL(siteConfig.url),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: siteConfig.title,
        images: [
            {
                url: "/unmaad-assets/unmaadv-logo.svg",
                width: 1200,
                height: 630,
                alt: "Unmaad 2026 - IIM Bangalore",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.title,
        description: siteConfig.description,
        images: ["/unmaad-assets/unmaadv-logo.svg"],
    },
    icons: {
        icon: "/favicon.ico",
    },
};
