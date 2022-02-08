import React from 'react'
import { MultiColumns } from '@/components/templates/layouts/MultiColumns'
import { SideBar } from '@/components/organisms/SideBar'
import { PostDetail } from '@/components/organisms/PostDetail'
import { Post } from '@/features/posts'

export type PostTemplateProps = {
  post: Post
}

export const PostTemplate: React.VFC<PostTemplateProps> = ({ post }) => {
  const mainContent = <PostDetail post={post} />

  const sideContent = <SideBar />

  return <MultiColumns mainContent={mainContent} sideContent={sideContent} />
}
