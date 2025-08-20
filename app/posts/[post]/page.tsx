// import "../../markdown.css"
import Image from "next/image";
import { ReactNode } from "react";
import { getPostBySlug } from "@/app/api/post_api";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import 'github-markdown-css'

function PostBanner() {
  return (
    <div className="relative w-full h-100 not-md:h-70 object-contain">
      <Image src={"/Ad_Banner.png"} alt={""} fill className="pointer-events-none object-cover"/>
    </div>
  )
}

function PostContent({ children }: { children:ReactNode }) {
  return (
    <div className="markdown-body prose prose-neutral prose-invert md:!text-xl prose-a:no-underline prose-a:text-blue-400 max-w-none !bg-transparent !text-white p-10 pt-3 [&_a]:scroll-mt-16 before:prose-p:content-none after:prose-p:content-none">
      {children}
    </div>
  )
}

type Params = {
  params: Promise<{post: string}>
}

// const getHeadings = (source) => {
//   const regex = /<h2>(.*?)<\/h2>/g

//   if (source.match(regex)) {
//     return source.match(regex).map((heading) => {
//       const headingText = heading.replace("<h2>", "").replace("</h2>", "")

//       const link = "#" + headingText.replace(/ /g, "_").toLowerCase()

//       return {
//         text: headingText,
//         link,
//       }
//     })
//   }

//   return []
// }

export default async function Post(props: Params) {
  const params = await props.params
  const post = getPostBySlug(params.post)

  try {
    // const { default: Post } = await import(`@/posts/${params.post}.mdx`)
    
    const mdxResult = await compileMDX({
      source: post.content,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          recmaPlugins: [remarkGfm],
        }
      }
    })
    
    return (
      
      <div className="p-10 not-md:p-0 !text-white">
        <div className="bg-neutral-800 md:rounded-2xl overflow-hidden shadow-2xl">
          <PostBanner />
          <PostContent>
            {/* <Post className="" /> */}
            {mdxResult.content}
          </PostContent>
        </div>
      </div>

    )
  }
  catch(error) {
    return (
      notFound()
    )
  }
}