// echoServer.js

// ネットライブラリの準備
const net = require('net')

const PORT = 3000

// createServerという関数：接続されたら実行する処理
// コールバック関数でsocket関数を実行

const server = net.createServer((socket) => {
    // 接続を表示
    console.log(`接続されました`)
    // データを受け取った時の処理
    socket.on('data', (data) => {
        // 受け取ったデータを表示
        console.log(`受け取ったデータ：${data}`)
        // 受け取ったデータの内容をそのまま送り返す
        socket.write(data)
    })
    // 接続されていた後に終了した時の処理(接続エラー時の接続試行終了では実行されない)
    socket.on('close', () => {
        console.log(`接続を終了しました`)
    })
})

// ポートを指定してサーバーを起動
server.listen(PORT, '127.0.0.1', () => {
    console.log(`server.jsのサーバー起動：${PORT}`)
})

// サーバーエラーの場合
server.on('error', (err) => {
    console.error(`server起動エラー`, err.message)
})