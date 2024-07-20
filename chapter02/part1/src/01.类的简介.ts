class Person {
  /*
  * 直接定义的属性是实例属性，经实例对象访问
  *   const p = new Person();
  *   p.name
  *
  * static 定义的属性是静态属性（类属性），只能通过类访问
  *   Person.age
  *
  * readonly 只读属性，不能被修改
  *
  * */

  name: string = '孙悟空';
  // static 关键字定义静态属性：（不需要 new Person() 创建对象就能直接访问的属性）
  static age: number = 18;
  readonly sex: string = '男';

  // 实例方法
  sayHello() {
    console.log('hello!');
  }

  // 静态方法
  static sayHello2() {
    console.log('hello2222!');
  }
}

const p = new Person();

console.log(p);
// console.log(Person.age);
p.sex = 'xxx';
console.log(p);


p.sayHello();
Person.sayHello2();
