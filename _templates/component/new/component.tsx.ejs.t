---
to: src/components/<%= category %>/<%= path %>/<%= name %>/<%= name %>.tsx
---
import React from 'react'
<% if(withCSS){ -%>
import styles from './<%= name %>.module.scss'
<% } -%>

export type <%= name %>Props = {}

export const <%= name %>: React.VFC<<%= name %>Props> = ({ ...props }) => {
  return <div><%= name %></div>
}
