import type { Metadata, Viewport } from "next";
import "./globals.css";
import "tailwindcss"
import Header from "./components/header";

export const metadata: Metadata = {
  title: "NeeuCraft",
  description: "Ванильный Minecraft сервер",
  metadataBase: new URL("https://www.neeucraft.ru/"),
  openGraph: {
    url: "https://www.neeucraft.ru/",
    images: '/NeeuCraftBB_Banner_Cropped.png',
    title: "NeeuCraft",
    description: "Ванильный Minecraft сервер",
    siteName: 'NeeuCraft',
    locale: 'ru_RU',
    type: 'website'
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`antialiased bg-neutral-900 text-[#ededed] p-0 m-0`}>
        <Header/>
        {children}
        <footer className="flex items-center justify-center p-3 text-neutral-500">© 2025 NeeuCraft </footer>
      </body>
    </html>
  );
}
