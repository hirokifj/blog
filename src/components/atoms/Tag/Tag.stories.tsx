import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Tag, TagProps } from './Tag'

export default {
  title: 'atoms/Tag',
  component: Tag,
} as Meta<TagProps>

type Template = Story<TagProps>

const Template: Template = (args) => <Tag {...args} />

export const Default: Template = Template.bind({})
Default.args = {
  children: 'タグ',
}
