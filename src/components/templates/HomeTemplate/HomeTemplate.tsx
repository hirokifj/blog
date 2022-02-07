import React from 'react'
import { MultiColumns } from '@/components/templates/layouts/MultiColumns'
import { SideBar } from '@/components/organisms/SideBar'
import { PostList } from '@/components/organisms/PostList'
import { Post } from '@/features/posts'

export type HomeTemplateProps = {
  posts: Post[]
}

export const HomeTemplate: React.VFC<HomeTemplateProps> = ({ posts }) => {
  const mainContent = <PostList posts={posts} />

  const sideContent = <SideBar />

  return <MultiColumns mainContent={mainContent} sideContent={sideContent} />
}
