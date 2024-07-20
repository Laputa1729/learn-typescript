/**
 * 定义函数、类，如果类型不明确，就可以使用泛型
 *
 * 总而言之，泛型就是在类型不明确的时候，我们整一个变量来表示类型
 */

function fn<T>(a: T): T {
  return a;
}

// 这种情况会自动推断出泛型 T 为 number
let result = fn(10);

// 指定泛型
let result2 = fn<string>('hello');

// 泛型可指定多个
function fn2<T, K>(a: T, b: K): T {
  console.log(b);
  return a;
}

let result3 = fn2<number, string>(100, 'hello');

interface myInterface {
  length: number;
}

// 泛型 T 必须实现 myInterface 接口
function fn3<T extends myInterface>(a: T): number {
  return a.length;
}

let result4 = fn3('123');  // 传参字符串，至少保证了有 length 属性
let result5 = fn3({name: 'hello', length: 10});
// fn3(123);  // 传参数字，实现不了 myInterface 接口，所以报错

class MyClass<T> {
  name: T;

  constructor(name: T) {
    this.name = name;
  }
}

const myClass = new MyClass<string>('孙悟空');
