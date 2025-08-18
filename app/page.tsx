import Image from "next/image";
import 'tailwindcss'
import './nerd.css'
import Link from "next/link";
import copyText from "./components/copyText";
import ServerInfo from "./components/serverData";
import Divider from "./components/divider";

const modpacks = [
  {name:'ZIP', link:'https://www.dropbox.com/scl/fi/f793krkghi6oo8nanzjqe/NeeuCraft.zip?rlkey=6o0rdgf8z86wp6982fokhxk8p&e=1&st=0x01tsjp&dl=1'},
  {name:'RAR', link:'https://www.dropbox.com/scl/fi/q4epyb5svcbzibfimfov5/NeeuCraft.rar?rlkey=3uws1jm0xcp87cnaatcnpcqk8&st=fhdxabk4&dl=1'},
]

function IP(props: { className?: string; }) {
  return (
    <div className={"flex-1/5 "+props.className}>
      IP:
      <span className="bg-neutral-950 rounded-xl py-2 px-4 hover:bg-neutral-900 duration-150 active:bg-neutral-700" onClick={copyText}>neeucraft.ru</span>
    </div>
  )
}

function DownloadPack(props: { className?: string; }) {
  return (
    <div className={"md:flex-2 min-w-fit flex-wrap p-5 px-7 "+props.className}>
      <div className="relative aspect-square h-full not-md:w-full not-md:h-auto nearest bg-neutral-900 rounded-xl">
        <Image src={"/BooksPack.png"} alt={""} fill className="p-1 pointer-events-none"/>
      </div>
      <div className="flex *:flex-1 flex-3 justify-center">Скачать сборку</div>
        {modpacks.map((lnk, i) => 
          <a key={lnk.name} href={lnk.link} className="flex flex-1 w-1/3 bg-neutral-700 rounded-xl p-4 hover:-translate-y-0.75 duration-150 hover:bg-[#9d81ba9f] active:bg-[#ac91c9ee] gap-2 items-center font-bold justify-center hover:shadow-lg"><i className="nf nf-md-zip_box"/>{lnk.name}</a>
        )}
    </div>
  )
}

function InteractiveMap(props: { className?: string; }) {
  return (
    <iframe src="https://neeucraft.dynmap.xyz" className={"!p-0 w-full h-150"+props.className} />
  )
}

function News(props: { className?: string }) {
  return (
    <div className="flex-col">
      <p>Новости</p>
      <p>ad</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen p-0 m-0 text-xl">
      <Image src={"/NeeuCraftBB_Banner.png"} alt={""} height={629} width={3853} className="h-1/3 w-auto object-cover shadow-xl pointer-events-none" quality={100} />

      <Divider/>


      <div className="flex flex-wrap px-20 py-7 w-full h-fit gap-5 [&_.panel]:not-md:w-full [&_.panel]:min-h-30 not-md:px-5 not-md:py-5 [&_.panel]:not-md:p-2 [&_.panel]:not-md:min-h-20 [&_.panel]:text-center [&_.panel]:hover:-translate-y-1.5 *:duration-250
      [&_.panel]:flex [&_.panel]:rounded-2xl [&_.panel]:bg-neutral-800 [&_.panel]:p-5 [&_.panel]:px-7 [&_.panel]:gap-3 [&_.panel]:items-center [&_.panel]:justify-center [&_.panel]:shadow-xl [&_.panel]:w-full
      ">
        
        {/* <News /> */}

        <Link href={"/posts/faq"} className="panel w-full md:flex-2/4 relative h-60 overflow-hidden ">
          <Image src={"/Ad_Banner.png"} alt={""} fill className="pointer-events-none object-cover opacity-75"/>
          <p className="text-2xl font-black text-shadow-lg text-shadow-gray-950 bg-opacity-20 z-1">Добро пожаловать на первый сезон NeeuCraft</p>
        </Link>   

        <Link href={"https://discord.gg/meeubase"} className="panel relative md:flex-1/4 w-full h-60 overflow-hidden">
          <img src="https://cdn.discordapp.com/icons/1161185029154676736/f707ae98a5c47717560d9056d44df6c8.webp?size=1024" alt="" className="absolute object-cover h-full w-full pointer-events-none opacity-75"/>
          <p className="text-2xl font-black text-shadow-lg text-shadow-gray-800 z-1">Discord сервер Meeu Base</p>
        </Link>

        <IP className="panel" />
        <ServerInfo className="panel" />
        <DownloadPack className="panel" />
        {/* <InteractiveMap/> */}

      </div>
    </div>
  );
}
