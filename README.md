## 環境情報

- **言語** : `TypeScript`
- **UIライブラリ** : `React v18`
- **スタイリング** : `styled-components`
- **リンター** : `eslint`
- **フォーマッター** : `prettier`
- **UIカタログ** : `Storybook`

## コマンド一覧

| Command              | Action                                       |
| :------------------- | :------------------------------------------- |
| `npm install`        | 依存関係インストール                         |
| `npm run start`      | ローカル開発サーバー起動                     |
| `npm run build`      | ビルド                                       |
| `npm run lint`       | ESLint問題検出                               |
| `npm run lint:fix`   | ESLint問題検出＆自動修正                     |
| `npm run format`     | フォーマットチェック                         |
| `npm run format:fix` | フォーマッティング                           |
| `npm run fix`        | ESLint問題検出＆自動修正＆フォーマッティング |

## ディレクトリ構成

- `features`
  : ページ機能ごとに分割
- `components`
  : どの機能にも依存しない汎用的な共通コンポーネント
- `types`
  : 全機能から参照される可能性のある型定義
- `routes`
  : React Routerルーティング関連
- `theme`
  : プロジェクト全体で使用する固定値の管理、styled-componentsにおけるCSSヘルパー関数や固定値の管理
- `libs`
  : 外部ライブラリの設定
- `api`
  : APIリクエスト部品の管理
- `hooks`
  : 機能に依存しない共通Hook
- `images`
  : 静的画像ファイル置き場
- `styles`
  : グローバル・リセットスタイルなどの全体に適用されるスタイリング関連
- `utils`
  : ユーティリティ関数置き場

## VSCode追加推奨拡張機能

- `ESLint`
- `Prettier`
- `vscode-styled-components`
