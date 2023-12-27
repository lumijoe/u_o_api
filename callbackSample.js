// callbackSample.js
// コールバックベースを作成し、関数で引数として使用する

// コールバックのベース
function calc(v1, v2, callback) {
    return callback(v1, v2)
};
    // コールバック(足し算)
    function add(v1, v2) {
        return v1 + v2
    };
    const addResult = calc(1, 2, add);
    console.log(addResult)
    // コールバック(掛け算)
    function multiply(v1, v2) {
        return v1 * v2
    };
    // コールバックを利用した関数の呼び出し
    const multiplyResult = calc(1, 2, multiply);
    console.log(multiplyResult);


//　コールバックのベース 
function celebration(name, date, callback) {
    return callback(name, date)
};
    // コールバック（メッセージ１）
    function birthdayDay(name, date) {
        return `${name}の誕生日は${date}です。`
    };
    // コールバック（メッセージ２）
    function birthdayMessage(name, date) {
        return`${name}！今日は${date}だね、お誕生日おめでとう！`
    };
    // コールバックを利用した関数の呼び出し
    const one = celebration("義盛", "0601", birthdayDay);
    const two = celebration("義盛", "0601", birthdayMessage);
    console.log(`${one}そして${two}素敵な1日を！`);



// 特定時間後の関数実行
function hello() {
    console.log("hello");
}
    // setTimeout関数（JSデフォルト：関数, ミリ秒（5秒なら5000））
    setTimeout(hello, 5000)