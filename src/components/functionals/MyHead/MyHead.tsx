import React from 'react'
import Head from 'next/head'

export type MyHeadProps = {
  title: string
}

export const MyHead: React.VFC<MyHeadProps> = ({ title }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
    </Head>
  )
}
