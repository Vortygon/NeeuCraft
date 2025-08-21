import Image from "next/image";

export default function DownloadPack(props: { className?: string; }) {
  const modpacks = [
    { name: 'ZIP', link: 'https://www.dropbox.com/scl/fi/f793krkghi6oo8nanzjqe/NeeuCraft.zip?rlkey=6o0rdgf8z86wp6982fokhxk8p&e=1&st=0x01tsjp&dl=1' },
    { name: 'RAR', link: 'https://www.dropbox.com/scl/fi/q4epyb5svcbzibfimfov5/NeeuCraft.rar?rlkey=3uws1jm0xcp87cnaatcnpcqk8&st=fhdxabk4&dl=1' },
  ];

  return (
    <div className={"md:flex-2 min-w-fit flex-wrap p-5 px-7 " + props.className}>
      <div className="relative aspect-square h-full not-md:w-full not-md:h-auto nearest bg-neutral-900 rounded-xl">
        <Image src={"/BooksPack.png"} alt={""} fill className="p-1 pointer-events-none" />
      </div>
      <div className="flex *:flex-1 flex-3 justify-center">Скачать сборку</div>
      {modpacks.map((lnk, i) => <a key={lnk.name} href={lnk.link} className="flex flex-1 w-1/3 bg-neutral-700 rounded-xl p-4 hover:-translate-y-0.75 duration-150 hover:bg-[#9d81ba9f] active:bg-[#ac91c9ee] gap-2 items-center font-bold justify-center hover:shadow-lg"><i className="nf nf-md-zip_box" />{lnk.name}</a>
      )}
    </div>
  );
}
