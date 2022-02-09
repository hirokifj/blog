import { Meta, Story } from '@storybook/react'
import { posts } from '@/tests/data/posts'
import { PostList, PostListProps } from './PostList'

export default {
  title: 'organisms/PostList',
  component: PostList,
} as Meta<PostListProps>

type Template = Story<PostListProps>

const Template: Template = (args) => <PostList {...args} />

export const Default: Template = Template.bind({})
Default.args = {
  posts,
}
