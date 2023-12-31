// webServer.js

// ネットライブラリの準備
const net = require('net')
// ファイルを読み込むNode.jsのfsモジュール
const fs = require('fs')

// PORT番号3000を準備
const PORT = 3006;

    // createServerという関数：接続されたら実行する処理
    // コールバック関数でsocket関数を実行
    const server = net.createServer((socket) => {
        // 接続を表示
        console.log(`クライアントから接続されました`)
        // データを受け取ったら何をするかを設定する
        socket.on('data', (data) => {
            /* ↓echoServerの設定
             // 受け取ったデータを表示する
             console.log(`クライアントから受け取ったデータ：${data}`)
             // 受け取ったデータの内容をそのまま送り返す
             socket.write(data)
            */

            /* ↓webServerの設定*/
            const httpRequest = data.toString()
            // httpRequestの改行コードを配列にしてindex０番(1行目)を取り出してrequestLineとする
            const requestLine = httpRequest.split('\r\n')[0]
            console.log(requestLine)

            const path = requestLine.split(' ')[1]
            console.log(path)

            // pathが/index.htmlの絶対パスから./index.htmlとして相対パスにする
            const fileContent = fs.readFileSync(`.${path}`)
            // 改行エスケープの記述でエラー回避
            const httpResponse = `HTTP/1.1 200 OK\r\ncontent-length: ${fileContent.length}\r\n\r\n${fileContent}`;
            socket.write(httpResponse)
        })

        // 接続されていた後に終了した時の処理(接続エラー時の接続試行終了では実行されない)
        socket.on('close', () => {
            console.log(`クライアントとの接続を終了しました`)
        })
    })

// serverサーバー（PORT指定して起動）
// 第2引数にローカルを入れることで同じPCからのクライアントを限定してやり取りすることを設定している
server.listen(PORT, '127.0.0.1', () => {
    console.log(`server.jsのサーバーが起動しました: ${PORT}`)
})

// serverサーバー（エラーの場合）
server.on('error', (err) => {
    console.error(`server起動エラー`, err.message)
})