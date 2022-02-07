export const markdownText =
  '## 見出し２ \n ### 見出し３ \n #### 見出し４ \n サンプルテキストサンプルテキストサンプルテキスト \n - リスト１ \n - リスト２ \n - リスト３'

export const post = {
  id: 'test',
  title: 'サンプル投稿',
  date: 20220101,
  updatedDate: 20220102,
  tags: ['サンプル'],
  makrdownContent: markdownText,
}

export const posts = [
  post,
  {
    id: 'test2',
    title: 'サンプル投稿2',
    date: 20211201,
    tags: ['サンプル2'],
    makrdownContent: markdownText,
  },
  {
    id: 'test3',
    title: 'サンプル投稿3',
    date: 20211101,
    tags: ['サンプル3'],
    makrdownContent: markdownText,
  },
]
