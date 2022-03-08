---
title: "【キャッシュ対策】webpackでビルドしたJSファイルにハッシュ値を付与する"
date: 20220308
tags: ["webpack"]
---
タイトルの通りです。

わりと簡単にできるので特に困ることはないのですが、少し古い内容を紹介している記事も多かったので、今回記事にしておきたいと思います。

※以下は webpack5 の内容になります。

## ハッシュ値を付与する

こちらはめちゃくちゃ簡単で、以下のように `[contenthash]` をファイル名の任意の箇所に追加するだけです。

```js
// webpack.config.js

{
  // 中略
  output: {
    filename: 'bundle-[contenthash].js'
  }
  // 中略
}
```

webpack4 の時は `[hash]` と指定することもできたのですが、webpack5 では　`DeprecationWarning` が出るようになっています。

ちなみに [contenthash] はファイルの内容で決まるようなので、コードに変化がなければ同じ値になるようです。（動かして試してみただけなので、実際のところは確認できていません。）

## ビルド時に出力先ディレクトリの中身を削除する

しかしこのままだと、ビルドする度にハッシュ値の異なる JS ファイルが量産されていってしまいます。なのでビルド時に出力先ディレクトリの中身を削除するように設定します。

こちらもとても簡単で、以下のように `output.clean` を true に設定するだけです。

```js
// webpack.config.js

{
  // 中略
  output: {
    filename: 'bundle-[contenthash].js',
    clean: true
  }
  // 中略
}
```

これだけで出力先ディレクトリの中身を削除した上で、新しい成果物を出力してくれるようになります。このオプションは `5.20.0` 以降であれば使うことができるようです。

（参考）
[https://github.com/johnagan/clean-webpack-plugin/issues/194](https://github.com/johnagan/clean-webpack-plugin/issues/194)

従来は `clean-webpack-plugin` を利用していましたが、単純に削除するだけで良いならプラグインは不要になっています。

### clean-webpack-plugin を使う場合

何らかの理由で `clean-webpack-plugin` を使う場合は、 `output.path` で出力先のディレクトリを明示しましょう。

```js
// webpack.config.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

{
  // 中略
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[contenthash].js',
  },
  // 中略
  plugins: [
    new CleanWebpackPlugin()
  ]
}
```

`output.path` を明示しない場合、削除が行われませんでした。（`clean-webpack-plugin: 4.0.0`）

## html-webpack-plugin で JS ファイルを動的に埋め込む

上記までの設定で、成果物の JS ファイルの名前がビルドする度に変わるようになりました。なので webpack を使って、生成した JS ファイルを自動的に html に埋め込むようにしたいと思います。

そのために必要なのが `html-webpack-plugin` です。まずはインストールします。

```bash
npm i --save-dev html-webpack-plugin
```

インストールが終わったら、ベースとなる html ファイルを任意の場所に作成します。（既にある場合は、それをそのまま利用する形で大丈夫です）

```html
// src/index.html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

次に `webpack.config.js` に以下のように追記します。

```js
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')

{
  // 中略
  output: {
    filename: 'bundle-[contenthash].js',
    clean: true
  },
  // 中略
    plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}
```

オプションの `template` で、どの html をベースにするのか指定することができます。

あとはビルドをすると、出力先ディレクトリに以下のような index.html も吐き出されるようになります。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <script defer="defer" src="bundle-17c320868b8cd286f1d3.js"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

以上の手順で、ビルドしたJSファイルにハッシュ値を付与することができます。
