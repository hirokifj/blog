import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ProfileBox } from './ProfileBox'

export default {
  title: 'organisms/ProfileBox',
  component: ProfileBox,
  decorators: [(story) => <div style={{ maxWidth: '290px' }}>{story()}</div>],
} as Meta

type Template = Story

const Template: Template = (args) => <ProfileBox {...args} />

export const Default: Template = Template.bind({})
