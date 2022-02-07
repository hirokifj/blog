import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Footer } from './Footer'

export default {
  title: 'organisms/Footer',
  component: Footer,
} as Meta

type Template = Story

const Template: Template = (args) => <Footer {...args} />

export const Default: Template = Template.bind({})
