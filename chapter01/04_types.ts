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

/*
* 数组的类型声明
* 语法：
* 类型[]
* Array<类型>
* */
// string[] 表示字符串数组
let e: string[];
e = ['a', 'b', 'c'];

let f: number[];

let g: Array<number>;
g = [1, 2, 3];

/*
* 元组，就是固定长度的数组
* 语法：
* [类型, 类型, ...]
* */
let h: [string, number];
h = ['hello', 123];

/*
* enum 枚举类型
* */
let i: { name: string, gender: 0 | 1 };
i = {
  name: '孙悟空',
  gender: 1
};

enum Gender {
  Male = 0,
  Female = 1
}

let i1: { name: string, gender: Gender };
i1 = {
  name: '孙悟空',
  gender: Gender.Male
};
console.log('@@@', i1.gender === Gender.Male);

// & 表示必须同时满足两个类型要求
let j: { name: string } & { age: number };
j = {
  name: '孙悟空',
  age: 18
};

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
k = 1;
