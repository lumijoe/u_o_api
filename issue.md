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



