import React from 'react'
import { Meta, Story } from '@storybook/react'
import { post } from '@/tests/data/posts'
import { PostDetail, PostDetailProps } from './PostDetail'

export default {
  title: 'organisms/PostDetail',
  component: PostDetail,
  decorators: [(story) => <div style={{ maxWidth: '700px' }}>{story()}</div>],
} as Meta<PostDetailProps>

type Template = Story<PostDetailProps>

const Template: Template = (args) => <PostDetail {...args} />

const { updatedDate, ...other } = post

export const Default: Template = Template.bind({})
Default.args = {
  post: {
    ...other,
  },
}

export const UpdatedPost: Template = Template.bind({})
UpdatedPost.args = {
  post: {
    ...other,
    updatedDate,
  },
}
