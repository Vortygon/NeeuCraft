import { remark } from "remark"
import html from "remark-html" 

export default async function markdownToHtml(md: string) {
  const res = await remark().use(html).process(md)
  return res.toString()
}