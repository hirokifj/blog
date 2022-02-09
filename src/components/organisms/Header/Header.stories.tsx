import { Meta, Story } from '@storybook/react'
import { Header } from './Header'

export default {
  title: 'organisms/Header',
  component: Header,
} as Meta

type Template = Story

const Template: Template = (args) => <Header {...args} />

export const Default: Template = Template.bind({})
