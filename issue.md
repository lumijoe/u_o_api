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


## 通信（IPアドレス、ポート番号、メッセージ）
## IPアドレス（どのPCに繋ぎたいのか）
- IPアドレスとポート番号を指定して、メッセージを送る
- IPアドレス：通信先のPC（住所0~255）
- IPアドレス：自身のPClocalhost（住所127.0.0.1規定） 
## PORT番号（どのプログラムを使うのか）
- プログラムごとの接続番号（マンションの部屋番号）
- Echoサーバー(7777)
- SSHサーバー(22)
- Webサーバー(80)
- PORT番号を指定することによって、どのプログラムに接続するかを伝える
## メッセージ(通信方式ごとにメッセージの形式手段が決まっている)
- Echoサーバーの場合   
    - Echoクライアント（標準入力された内容をそのまま送信）
    - Echoサーバー（受け取ったメッセージをそのまま返す）
- Webサーバーの場合
    - HTTPリクエスト、レスポンス形式でやり取りして返す

## echoとwebの違い
- 
    ## echoサーバー、echoプログラムのテストの場合
    - echoClient.jsとechoServer.jsを記述
    - clientとサーバーの両方を起動させるために
    - ターミナルを左右に分割、server起動後、client起動
    - 右server用：node echoServer.jsの実行でconsole.log表示がなされていればOK
    - 左client用：node echoClient.jsの実行
    - 接続後に
        - １：クラアントターミナルで何か入力してenterすると
        - ２：サーバー側：それをデータとして受け取り
        - ３：クライアント側：それがデータとして表示される
        - どちらのターミナルにも入力が反映される
        (入力はサーバーに渡され、クライアントで描画される)

    ## webサーバー、webプログラムのテストの場合
    - server側ターミナル：npx http-serverでwebサーバーを起動（Available onを参考に次へ）
    **curlコマンド (自動リクエスト)**
    - client側ターミナル：curl http://127.0.0.1:8080/hello.html IPアドレス部分はlocalhostにしてもOK
        (curlコマンドがインストールされていなければbrew install curlなど必要)
    - 接続できればclient側ターミナルにファイルの中身が表示、server側ターミナルではGET /ファイル名が表示される
    - その他の情報も表示する時client側ターミナル：curl -v http://127.0.0.1:8080/hello.html
        - httpリクエスト(クライアント側：入力されたURLを元に文字列を作成しサーバーに送信)
            Trying...からAcceptまでの情報
        - httpレスポンス(サーバー側：送信された情報をクライアントに見やすい形で返してくれる)
            - **レスポンスヘッダー**：HTTP...OK(リクエスト成功)からKeep-Alive...まで
            - **レスポンスボディー**：ファイルの中身、Connection...intactまで
    **telnetコマンド （手作業リクエスト）**
    - client側ターミナル：telnet localhost 8080を実行（127.0.0.1の方法ではできない）
         (telnetコマンドがインストールされていなければbrew install telnetなど必要)
    - ターミナルに手作業で入力が必要
        - Trying...Escape...と表示されている後に入力していく
        **リクエストコマンドを入力する**
        - GET /hello.html HTTP/1.1
          Host: localhost
          User-Agent: curl/7.68.0
          Accept: */*
          (空行)
          でenter実行する
        - レスポンスヘッダーとレスポンスヘッダーが返される

- 情報のやり取りが確認でき、Echoはクライアントが送信したデータをそのまま返す、Webではコンテンツを返す。
- **Echo:反映やデバック確認の特性**か、**Web:コンテンツ提供の特性**かの違い。


## TCP/IPモデル
- 通信方式（ネットワークプロトコル）の4階層構造
 --    アプリケーション層（HTTP,SSH,FTP,SMTP）メッセージの形式、やり取り手順など
 ---   トランスポート層（TCP,UDP）接続の確立、パケットの分割、組み立てなど
 ----  インターネット層（IP,ICMP）IPアドレスで指定された先にパケットを配送
 ----- ネットワークインターフェース層（イーサネット有線LAN,IEEE８０２.11無線LAN）ハードウェアが通信を実現
- **通信層の上にWeb層がある**　通信の仕組みの上にWebがある


