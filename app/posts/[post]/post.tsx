import Image from "next/image";

function PostBanner() {
  return (
    <div className="relative w-full h-100 not-md:h-70 object-contain">
      <Image src={"/Ad_Banner.png"} alt={""} fill className="pointer-events-none object-cover"/>
    </div>
  )
}

export default function PostContent() {
  return (
    <>
      <PostBanner />
      <div className="p-10 pt-3 md:text-xl [&_a]:scroll-mt-16">
              
      </div>
    </>
  )
}



