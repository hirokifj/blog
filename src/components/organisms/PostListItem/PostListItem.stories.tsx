import { Meta, Story } from '@storybook/react'
import { post } from '@/tests/data/posts'
import { PostListItem, PostListItemProps } from './PostListItem'

export default {
  title: 'organisms/PostListItem',
  component: PostListItem,
} as Meta<PostListItemProps>

type Template = Story<PostListItemProps>

const Template: Template = (args) => <PostListItem {...args} />

export const Default: Template = Template.bind({})
Default.args = {
  post,
}
