// 可以使用 | 来连接多个类型（联合类型）
let b: 'male' | 'female';

b = 'male';
b = 'female';
b = 123;

let c: boolean | string;

c = true;
c = 'hello';
c = 123;

// 变量指定为 any，相当于关闭了 TS 的类型检测
let d: any;
// let d;  // 隐式的 any

d = 10;
d = 'hello';
d = true;

// unknown 表示未知类型
let e: unknown;

e = 10;
e = 'hello';
e = true;

let s: string;

// d 的类型是 any，所以可以赋值给任意变量（连带着把 s 的类型检测也给破坏了）
s = d;

// unknown 实际上是一个类型安全的 any
// unknown 类型的变量不能直接赋值给其他变量
e = 'hello';
s = e;

// 加上类型判断来优化，可以去掉报红
if (typeof e === 'string') {
  s = e;
}

// 类型断言，也可以去掉报红
/*
* 语法：
* 变量 as 类型  <=> <类型>变量
* */
s = e as string;
s = <string>e;


function fn(): boolean {
  return true;
}

// 没有主动 return 返回值的函数，默认指定返回类型为 void
function fn2() {
}

// never 表示永远不会返回结果
function fn3(): never {
  throw new Error('报错了！');
}
