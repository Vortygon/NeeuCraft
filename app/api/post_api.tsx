import { join } from "path";
import fs from "fs"
import matter from "gray-matter"

const postsDir = join(process.cwd(), "/posts")

export type Post = {
  slug: string
  title: string
  date: string
  cover: string
  author: {
    name: string
    avatar: string
  }
  ogImage: {
    url: string
  }
  content: string
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.(md|mdx)$/, "")
  const path = join(postsDir, realSlug + '.mdx')
  const fileContent = fs.readFileSync(path, 'utf8')
  const { data, content } = matter(fileContent)

  return { ...data, slug: realSlug, content } as Post
}