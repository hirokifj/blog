---
title: "Next.js + TypeScript + Markdown でブログを作りました"
date: 20220210
tags: ["雑記"]
---
タイトルの通り Next.js でブログを作ったので記事にしてみたいと思います。

## 経緯とコンセプト
元々は Gatsby.js で作ったブログがあったのですが、以下の理由から更新が滞っていました。

- デザインに飽きた
- JS で実装しておりメンテのやる気が起きない
- Gatsby.js への関心が薄れた

上記の内容を払拭するめ、今回ブログを作り直すことにしました。Next.js を用いて開発することにしたのですが、前回の反省から、できるだけ新しいフレームワークなどに乗り換えることになっても、そのハードルが低くなるように心がけました。

## 技術スタックなど
今回は、主に以下の要素を用いて開発しました。

- Next.js
- TypeScript
- CSS Modules
- Storybook
- Jest
- ESLint, Stylelint, Prettier
- GitHub Actions(CI)
- Hygen
- unified 関連（マークダウンファイルを取り扱うため）

[GitHub](https://github.com/hirokifj/blog)

以下、開発時に考えたことをいくつか紹介します。

### マークダウンでの記事更新
CMS などは特に利用せず、シンプルにマークダウンファイルで更新する方式にしています。こちらもフレームワークと同じで、一つの CMS を採用してしまうと何かあった時に、ブログ更新のモチベーションが下がってしまう可能性があります。

違う CMS に記事を移行するのは骨が折れるかもしれませんが、ただのマークダウンファイルであれば心配も少なそうだと思いました。また、フレームワークの載せ替え時などにも柔軟に対応できそうなので、今回の方式を選びました。

### CSS Modules と Chakra UI
当初はとにかく早く作ってしまいたかったので、デザインを極力考えなくて済むように Chakra UI を採用しようと考えていました。しかしフレームワークの載せ替えが発生した時のことを考え、CSS Modules を採用することにしました。

何かしらのコンポーネントライブラリに依存するよりも、普通の CSS でスタイルを実装している方が柔軟に対応できそうです。

実際のところ、フレームワークの載せ替えが発生するような頃にはデザインも一新したくなっているだろうとは思います。しかし、更新のモチベーションを下げる要因はできるだけ取り除いておきたかったため、念には念を入れておくことにしました。

### Storybook
Storybook に関してはコンポーネントカタログの役割しか果たしていないため、現況は持て余している感があります。しかし、今後機能を増やしていった際に、テストなどで活用できれば良いなと考えたので初めから入れておくことにしました。

毎回 `XXX.stories.tsx` を用意するのは面倒なので、[Hygen](https://www.hygen.io/) で手軽に生成できるようにしています。

### テスト
テストに関しては、以下の部分について書いています。

- マークダウンファイルから投稿を取得してくる処理
- サイトマップの生成処理
- ユーティリティ関数

前者２点に関してはファイルの読み込みが発生するのですが、テスト時にはテスト用のマークダウンファイルを読み込むよう、環境変数で切り分けるようにしています。この辺りはモックで対応するのが一般的な方法だと思いますが、実際のファイルに対してテストする方が、分かりやすく簡単そうだったのでこのようにしています。

しかし実際のファイルを読み込む分、テスト実行時間もかかるので、もう少し良い方法を調べたいなと思っているところです。

## 今後やりたいこと
今回は必要最低限でリリースしましたが、以下の内容も実装していきたいと考えています。

- textlint を使っての記事チェック（CI）
- Twitter などへのシェア機能、 OGP の自動設定
- ページネーション
- タグ別記事一覧
- ダークモード対応

とは言え、記事がない状態で作り込んでも意味がないので、当分は記事を充実させる方に力を入れていくつもりです。
