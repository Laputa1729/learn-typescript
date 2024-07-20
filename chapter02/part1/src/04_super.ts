(function () {
  class Animal {

    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHi() {
      console.log(`My name is ${this.name}`);
    }
  }

  class Dog extends Animal {

    age: number;

    constructor(name: string, age: number) {
      // 如果在子类中写了构造函数，必须调用 super()，把父类的构造函数再跑一遍
      super(name);  // 这里就是在调用父类的构造函数
      this.age = age;
    }

    sayHello() {
      // 调用父类的方法，super 就表示当前类的父类
      super.sayHi();
    }
  }

  const dog = new Dog('旺财', 8);
  console.log(dog)
  dog.sayHello();

})()
