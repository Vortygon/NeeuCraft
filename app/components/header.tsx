'use client'
import Image from "next/image";
import Link from "next/link";

const buttons = [
  {name:'Главная', link:'/'},
  {name:'Рецепты', link:'/recipes'},
  {name:'FAQ', link:'/posts/faq'},
]

const Icon = () => {
  return (
    <Link href={"/"} className="relative w-fit aspect-square h-full">
        <Image src={"/NeeuCraftX32.png"} alt={""} fill className="object-contain w-fit p-1"/>
    </Link>
  )
}

export default function Header() {
  return(
    <div className="sticky flex h-16 not-md:h-12 backdrop-blur-2xl top-0 border-b-1 border-[#ffffff25] items-center z-10 gap-5 px-4 shadow-xl not-md:gap-2">

      <Icon/>

      <div className="flex text-neutral-400 text-xl not-md:text-lg h-full overflow-scroll">
        {buttons.map((button,i) => 
          <Link href={button.link} key={button.name+i} className="flex px-7 not-md:px-3 hover:text-neutral-300 hover:bg-[#ffffff15] duration-150 h-full items-center">
            {button.name}
          </Link>
        )}
      </div>

    </div>
  )
}