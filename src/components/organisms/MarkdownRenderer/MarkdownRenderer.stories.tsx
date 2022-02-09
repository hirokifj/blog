import { Meta, Story } from '@storybook/react'
import { MarkdownRenderer, MarkdownRendererProps } from './MarkdownRenderer'

export default {
  title: 'organisms/MarkdownRenderer',
  component: MarkdownRenderer,
} as Meta<MarkdownRendererProps>

type Template = Story<MarkdownRendererProps>

const Template: Template = (args) => <MarkdownRenderer {...args} />

export const Default: Template = Template.bind({})
Default.args = {
  markdownText:
    '## 見出し２ \n ### 見出し３ \n #### 見出し４ \n サンプルテキストサンプルテキストサンプルテキスト \n - リスト１ \n - リスト２ \n - リスト３',
}
