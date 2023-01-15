# AngularUiParts

このプロジェクトは[Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.で作成しています。
任意のサイトやWebアプリケーションにて、WebComponentとして使用する事を目的としたUIパーツのコンポーネント集です。

### WebConponentの出力方法

コマンド `ng build` にてソースをビルドした後、`npm run output`でファイル名「custom-element.js」が生成されます。

### WebComponentのレンダリング方法
WebConponentを使用するアプリケーションにて「custom-element.js」を読み込み、
UIパーツを表示する箇所にカスタムHTMLタグ（main.tsにて宣言したタグ名）を記載してください。
