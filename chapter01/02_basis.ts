// 声明一个变量 a，并指定它的类型为 number
let a: number;
a = 10;
a = 33;
a = 'hello';

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
// let c: boolean = false;
let c = false;
c = true;

// 定义参数的类型和返回值的类型
function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(123, 456, undefined));
