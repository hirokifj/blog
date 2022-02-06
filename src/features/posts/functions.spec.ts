import { fetchSortedPosts, fetchPostIds, fetchPostById } from '@/features/posts'

describe('fetchPostIds function', () => {
  test('should return array of ids', () => {
    expect(fetchPostIds()).toEqual(['test', 'test2'])
  })
})

describe('fetchSortedPosts function', () => {
  test('should return posts sorted by date', () => {
    const posts = fetchSortedPosts().map((post) => ({
      ...post,
      makrdownContent: post.makrdownContent.trim(),
    }))

    expect(posts).toEqual([
      {
        id: 'test2',
        title: '投稿テスト2',
        date: 20220102,
        tags: ['タグ2'],
        makrdownContent: 'サンプルテキスト2',
      },
      {
        id: 'test',
        title: '投稿テスト1',
        date: 20220101,
        tags: ['タグ'],
        makrdownContent: 'サンプルテキスト',
      },
    ])
  })
})

describe('fetchPostById function', () => {
  test('should return post', () => {
    const post = fetchPostById('test')

    expect({
      ...post,
      makrdownContent: post.makrdownContent.trim(),
    }).toEqual({
      id: 'test',
      title: '投稿テスト1',
      date: 20220101,
      tags: ['タグ'],
      makrdownContent: 'サンプルテキスト',
    })
  })
})
