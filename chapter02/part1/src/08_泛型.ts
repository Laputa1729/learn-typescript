/**
 * 定义函数、类，如果类型不明确，就可以使用泛型
 */

function fn<T>(a: T): T {
  return a;
}

// 这种情况会自动推断出泛型 T 为 number
let result = fn(10);

// 指定泛型
let result2 = fn<string>('hello');

function fn2<T, K extends any>(a: T, b: K): T {
  console.log(b);
  return a;
}

let result3 = fn2<number, string>(100, 'hello');


interface myInterface {
  length: number;
}

function fn3<T extends myInterface>(a: T): number {
  return a.length;
}
