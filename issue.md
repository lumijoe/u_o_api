## セットアップ（Node.js, asdfバージョン管理ツール）

- js(文字列データ)を動かしているのは実行環境（ランタイム）Node.js

- Node.jsのインストール(asdf)
    nodebrew install-binary 16.16.0(v指定あり)
    nodebrew ls
    nodebrew use 16.16.0
    node -v

- asdfのインストール
    https://asdf-vm.com/guide/getting-started.html　
    brew install asdf
    権限プロックの場合はsudoコマンドで権限所有確認、書き込み権限を付与、その後再度インストール
    zshとhomebrewのコマンド：echo -e "\n. $(brew --prefix asdf)/libexec/asdf.sh" >> ${ZDOTDIR:-~}/.zshrc
    asdf version (-vでは表示されない、v指定なし)
    
- ターミナルの再起動で設定を反映

- asdfを使ってnode.jsをインストール
    brew install gpg gawkを実行
    ↓表示
    GNU "awk" has been installed as "gawk".
    If you need to use it as "awk", you can add a "gnubin" directory
    to your PATH from your ~/.bashrc and/or ~/.zshrc like:
    PATH="/usr/local/opt/gawk/libexec/gnubin:$PATH"

    出たけど次、asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git実行した
    asdf list all nodejs実行でpluginする16.16.0を確認しておく（表示されていればOK）
    cdでvi .tool-versionsを実行でファイルを作成、ターミナル起動で書き込めるようになる
        nodejs 16.16.0　と入力して保存（esc :wq enter）
    cat .tool-versionを実行でターミナルで編集した内容が確認できる
        nodejs 16.16.0 が表示される

    asdf installを実行すると、.tool-versionsで設定したversionがinstallされる
    node -v　でversioが16.16.0であればOK

## npmでWebサーバーのパッケージをインストール
- Node.js　npmパッケージマネージャーをpackage.jsonに設定を書いて使用する
- cdで ls -aで、現在のファイル全てを確認
- node -vでnodeのバージョンを再確認,16.16.0表示でOK
- npm initで、設定を聞かれるがenterで次へ
- ls でpackage.jsonの生成を確認

## package.jsonを確認
- デフォルト設定が表示される
- 使用したいパッケージをinstallする(npm install http-server)httpサーバーを使用
- node_modules, package-lock.jsonが生成された
- .gitignoreファイルを生成し、/node_modules/を記述(大量データでのgit pushエラーを避けるため)

## http-serverの立ち上げ
- package.jsonのあるルートディレクトリでnpx http-serverを実行
- available on と表示されているhttp://~をコピーしてアクセス(例：http://127.0.0.1:8080)（リクエスト）
- アクセスはリクエストとなり、レスポンスとしてファイルの内容が描画される
- 描画されたpackage.jsonをクリックすると、ファイルに書かれたコードが表示される（レスポンス）
- 確認できたらctrl + cで起動終了させる

##　HTMLファイルをブラウザで表示するために
- http-serverはpackage.jsonのあるディレクトリで実行される
- そのディレクトリで表示させたいhtmlファイルを作成する
- 例：hello.htmlを作成して、コードを書く
- npx http-serverを実行でhttp-serverを起動させる
- Available onのリンクに/hello.htmlを追加してアクセスすると描画される
- 例：hello.jsファイルを作成してアクセスはターミナルでnode hello.jsとすると中身が表示される

## JavaScriptの関数とコールバック
- 関数の定義３種類：functionSample.js
- コールバック：callbackSample.js
    




