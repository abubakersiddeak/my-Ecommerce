import "./globals.css";
import { Oxygen } from "next/font/google";
export const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
export const metadata = {
  title: "WEAL BD | Trusted Online Shopping in Bangladesh",
  description:
    "Shop the latest sports at WEAL BD — your trusted online store in Bangladesh. Fast delivery, best prices, and top-notch customer service guaranteed.",
  icons: {
    icon: "/WEwork.svg",
    shortcut: "/WEwork.svg",
    apple: "/WEwork.svg",
  },
  keywords: [
    "WEAL BD",
    "Online shopping Bangladesh",
    "Ecommerce Bangladesh",
    "Buy Sports online",
    "Best online store BD",
    "Sports gadgets Bangladesh",
    "Trusted ecommerce platform",
  ],
  authors: [{ name: "WEAL BD Team", url: "https://wealbd.com" }],
  creator: "WEAL BD",
  publisher: "WEAL BD",
  openGraph: {
    title: "WEAL BD | Trusted Online Shopping in Bangladesh",
    description:
      "Explore the latest products at unbeatable prices. WEAL BD offers fast delivery, secure payments, and reliable customer support.",
    url: "https://wealbd.com",
    siteName: "WEAL BD",
    images: [
      {
        url: "/WEwork.svg",
        width: 1200,
        height: 630,
        alt: "WEAL BD Online Store",
      },
    ],
    locale: "en_BD",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oxygen.className}>{children}</body>
    </html>
  );
}
