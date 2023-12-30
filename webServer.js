// webServer.js

// ネットライブラリの準備
const net = require('net')
// PORT番号3000を準備
const PORT = 3005;

// helloResponseを定義
const helloResponse = `HTTP/1.1 200 ok
content-length: 237

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello</title>
</head>
<body>
    <h1>hello</h1>
</body>
</html>
`


    // createServerという関数：接続されたら実行する処理
    // コールバック関数でsocket関数を実行
    const server = net.createServer((socket) => {
        // 接続を表示
        console.log(`クライアントから接続されました`)
        // データを受け取ったら何をするかを設定する
        socket.on('data', (data) => {
            /* ↓echoServerの設定になっているので、webServerの設定に書き換える
             // 受け取ったデータを表示する
             console.log(`クライアントから受け取ったデータ：${data}`)
             // 受け取ったデータの内容をそのまま送り返す
             socket.write(data)
            */

            socket.write(helloResponse)

            
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