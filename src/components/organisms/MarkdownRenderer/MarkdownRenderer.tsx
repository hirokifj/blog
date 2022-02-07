import React from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'

export type MarkdownRendererProps = {
  markdownText: string
}

export const MarkdownRenderer: React.VFC<MarkdownRendererProps> = ({
  markdownText,
}) => {
  const content = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, {
      createElement: React.createElement,
    })
    .processSync(markdownText).result

  return <div>{content}</div>
}
