// echoClient.js

// 通信ライブラリの読み込み
const net = require('net')

// 接続先を定義
const SERVER_IP = '127.0.0.1';
const SERVER_PORT = 3005;

// 通信の出入を準備
const socket = new net.Socket()

// IPアドレスとPORT番号を指定して、接続する
// ３つ目の引数()は、接続したら実行したいコールバックを記述
socket.connect(SERVER_PORT, SERVER_IP, () => {
    console.log(`サーバーへ接続しました ${SERVER_IP}:${SERVER_PORT}`)
})

// サーバーへの接続エラーが発生した場合のハンドリング
socket.on('error', (err) => {
    console.error('サーバーへの接続エラーです:', err.message);
});

// 標準入力(standardin)からデータを読み込んだら実行する処理を記述
process.stdin.on('data', (data) => {
    // データを読み込んだら通信出入口に書き込む処理
    // 接続先にメッセージを送る処理となる
    socket.write(data)
})

// 通信の出入口からデータを受け取ったら実行する処理を記述
socket.on('data', (data) => {
    // データを受け取ったらコンソール出力する
    console.log(`dataの受け取り:${data}`)
});
