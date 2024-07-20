(function () {
  /**
   * 抽象类
   * 以 abstract 修饰的类，不能被实例化，【专门用来被继承】
   * 抽象类里面的抽象方法必须被子类实现
   */
  abstract class Animal {

    name: string;

    constructor(name: string) {
      this.name = name;
    }

    // 抽象方法没有方法体，只定义方法声明
    // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
    abstract sayHello(): void;

    sayHi() {
      console.log(`My name is ${this.name}`);
    }
  }

  class Dog extends Animal {

    sayHello() {
      // 调用父类的方法，super 就表示当前类的父类
      super.sayHi();
    }
  }

  const dog = new Dog('旺财');
  console.log(dog)
  dog.sayHello();

  class Cat extends Animal {
    // 在子类中实现父类的抽象方法
    sayHello() {
      console.log('喵喵喵');
    }
  }


})()
