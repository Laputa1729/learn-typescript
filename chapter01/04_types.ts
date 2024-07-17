let a: object;
a = {};
a = function () {
};

// 属性名后面加 ?，表可选
let b: { name: string, age?: number, };
b = {name: '孙悟空'};

// 只限定某个属性的类型
// [propName: string]: any 表示任意个属性，任意种类型
let c: { name: string, [propName: string]: any };
c = {name: '孙悟空', age: 18, gender: '男'};

/*
* 设置函数结构的类型声明
* 语法：
* (形参:类型, 形参:类型, ...) => 返回值
* */
let d: (a: number, b: number) => number;
d = function (n1, n2, n3) {
  return n1 + n2;
}
