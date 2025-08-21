import Image from "next/image";
import 'tailwindcss'
import './nerd.css'
import { ReactNode } from "react";
import Link from "next/link";
import Divider from "./components/divider";
import IPcopy from "./components/IPcopy";
import ServerInfo from "./components/serverStatus";
import DownloadPack from "./components/DownloadPack";
import News from "./components/News";
import InteractiveMap from "./components/InteractiveMap";


function Content({ children }:{ children:ReactNode }) {
  return (
    <div className={`flex flex-wrap px-20 py-7 w-full h-fit gap-5 [&_.panel]:not-md:w-full [&_.panel]:min-h-30 not-md:px-5 not-md:py-5 [&_.panel]:not-md:p-2 [&_.panel]:not-md:min-h-20 [&_.panel]:text-center [&_.panel]:hover:-translate-y-1.5 *:duration-250 [&_.panel]:flex [&_.panel]:rounded-2xl [&_.panel]:bg-neutral-800 [&_.panel]:p-5 [&_.panel]:px-7 [&_.panel]:gap-3 [&_.panel]:items-center [&_.panel]:justify-center [&_.panel]:shadow-xl [&_.panel]:w-full`}>
      {children}
    </div>
  )
}

function BannerButton ({ href, img, className, children, externalImg }:{ href:string, img?:string, className?:string, children?:ReactNode, externalImg?:string }) {
  return (
    <Link href={href} className={`w-full relative overflow-hidden bg-black ${className}`}>
      {img ? <Image src={img} alt={""} fill className="pointer-events-none opacity-75 object-cover"/> : <img src={externalImg} alt="" className="absolute h-full w-full pointer-events-none opacity-75 object-cover"/>}
      <p className="text-2xl font-black text-shadow-lg text-shadow-gray-950 bg-opacity-20 z-1">{children}</p>
    </Link>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen p-0 m-0 text-xl">
      <Image src={"/NeeuCraftBB_Banner.png"} alt={""} height={629} width={3853} className="h-1/3 w-auto object-cover shadow-xl pointer-events-none" quality={100} />

      <Divider />

      <Content>
        {/* <News /> */}

        <BannerButton href={"/posts/faq"} img={"/Ad_Banner.png"} className={"panel md:flex-2/4 h-60"}>Добро пожаловать на первый сезон NeeuCraft</BannerButton>

        <BannerButton href={"https://discord.gg/meeubase"} externalImg={"https://cdn.discordapp.com/icons/1161185029154676736/f707ae98a5c47717560d9056d44df6c8.webp?size=1024"} className="panel md:flex-1/4 h-60">Discord сервер Meeu Base</BannerButton>

        <IPcopy className="panel" />
        <ServerInfo className="panel" online status />
        <DownloadPack className="panel" />
        {/* <InteractiveMap className="panel hover:!translate-0"/> */}
      </Content>
    </div>
  );
}
