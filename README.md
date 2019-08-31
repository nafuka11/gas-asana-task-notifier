# gas-asana-task-notifier

![Slack投稿サンプル](https://user-images.githubusercontent.com/42476527/64058923-3ea1f580-cbed-11e9-8dd7-80387e2d9669.png)

Asanaの特定プロジェクトにある完了済みタスクを、Slackに投稿するGoogle App Scriptです。

完了タスクが多い場合、最新20件を取得します。

## Requirements
- Git
- Node.js
- Googleアカウント
- Asanaのアクセストークン
- SlackのIncoming Webhook URL

## Install
1. リポジトリをclone
   ```
   $ git clone https://github.com/nafuka11/gas-asana-task-notifier.git
   ```
   
2. cloneしたリポジトリのディレクトリに移動し、必要なパッケージをインストール
   ```
   $ npm install
   ```
   
3. Googleアカウントのログイン。アカウントを選択し、リクエストを許可する
   ```
   $ npm run login
   ```
   
4. https://script.google.com/home/usersettings にアクセスし、`Google Apps Script API`の設定をオンにする
   
5. Google App Scriptのプロジェクトを新規作成

   ```
   $ npm run create
   ```

6. ローカルのソースコードをプロジェクトにアップロード
   ```
   $ npm run push
   ```

7. プロジェクトをブラウザ上で開く

   ```
   $ npm run open
   ```

8. ファイル > プロジェクトのプロパティから、`スクリプトのプロパティ`を追加する

   |プロパティ|値|
   |--|--|
   |ASANA_ACCESS_TOKEN|Asanaのアクセストークン|
   |ASANA_PROJECT_ID|タスク取得対象のプロジェクトID（URLの数字）|
   |SLACK_URL|SlackのIncoming Webhook URL|

9. 編集 > 現在のプロジェクトのトリガー > トリガーを追加（画面右下）
   実行する関数は`main`としてください。

   ※トリガー追加時に「このアプリは確認されていません」画面が出ますが、詳細から安全ではないページに移動し、権限を付与してください。
