// functionSample.js

// 関数の定義
function add1(v1, v2) {
    return v1 + v2
};

const result1 = add1(1, 2);
console.log(`resultは、${result1}です`);

// 関数を変数に代入
const add2 = function(v1, v2) {
    return v1 + v2
};

console.log(add2);
const result2 = add2(1, 2);
console.log(`result2は、${result2}です`);

// 関数を変数に代入（アロー関数）
const add3 = (v1, v2) => {
    return v1 + v2
};

const result3 = add3(1, 2);
console.log(`result3は、${result3}です`)

