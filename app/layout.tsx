import type { Metadata } from "next";
import "./globals.css";
import "tailwindcss"
import Header from "./components/header";

export const metadata: Metadata = {
  title: "NeeuCraft",
  description: "Ванильный Minecraft сервер",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-neutral-900 text-[#ededed]`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
