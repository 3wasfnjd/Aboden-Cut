import type { Metadata } from "next";
import { SITE_INFO, SITE_URL } from "@/site/brand";

export const baseMetaData: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: SITE_INFO.title,
	description: SITE_INFO.description,
	openGraph: {
		title: SITE_INFO.title,
		description: SITE_INFO.description,
		url: SITE_URL,
		siteName: SITE_INFO.title,
		locale: "ar_SA",
		type: "website",
		images: [{ url: SITE_INFO.openGraphImage, width: 1200, height: 630, alt: "عبودين كت" }],
	},
	twitter: {
		card: "summary_large_image",
		title: SITE_INFO.title,
		description: SITE_INFO.description,
		images: [SITE_INFO.twitterImage],
	},
	robots: { index: true, follow: true },
	icons: { icon: [{ url: "/favicon.ico" }], shortcut: ["/favicon.ico"] },
	appleWebApp: { capable: true, title: SITE_INFO.title },
	manifest: "/manifest.json",
	other: { "msapplication-config": "/browserconfig.xml" },
};
