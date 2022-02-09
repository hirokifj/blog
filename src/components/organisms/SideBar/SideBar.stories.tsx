import { Meta, Story } from '@storybook/react'
import { SideBar } from './SideBar'

export default {
  title: 'organisms/SideBar',
  component: SideBar,
  decorators: [(story) => <div style={{ maxWidth: '290px' }}>{story()}</div>],
} as Meta

type Template = Story

const Template: Template = (args) => <SideBar {...args} />

export const Default: Template = Template.bind({})
