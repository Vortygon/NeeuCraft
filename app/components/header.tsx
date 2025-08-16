import Image from "next/image";

const buttons = [
  {name:'Test', link:''},
  {name:'Test', link:''},
]

const Icon = () => {
  return (
    <div className="w-fit">
      <Image src={"/NeeuCraftX32.png"} alt={""} fill className="object-contain w-fit"/>
    </div>
  )
}

export default function Header() {
  return(
    <div className="sticky flex h-16 backdrop-blur-2xl top-0 border-y-1 border-[#ffffff25] items-center z-10">

      {/* <Icon/> */}

      <div className="flex text-neutral-300 text-xl">
        {buttons.map((button,i) => 
          <a href={button.link} key={button.name+i}>{button.name}</a>
        )}
      </div>

    </div>
  )
}