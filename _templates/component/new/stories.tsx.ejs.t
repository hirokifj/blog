---
to: "<%= withStoryBook ? `src/components/${category}/${path}/${name}/${name}.stories.tsx` : null %>"
---
import React from 'react'
import { Meta, Story } from '@storybook/react'
import { <%= name %>, <%= name %>Props } from './<%= name %>'

export default {
  title: '<%= category %>/<%= name %>',
  component: <%= name %>,
} as Meta<<%= name %>Props>

type Template = Story<<%= name %>Props>

const Template: Template = (args) => <<%= name %> {...args} />

export const Default: Template = Template.bind({})
