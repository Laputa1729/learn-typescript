(function () {

  class Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log('hellooooooooo');
    }
  }

  /*
  * 继承
  *   子类继承父类
  *   extends
  *   子类继承父类的属性和方法
  *   子类可以扩展父类的功能
  *   子类也可以重写父类的方法
  * */
  class Dog extends Animal {
    run() {
      console.log(`${this.name}在跑~~~`)
    }
  }

  const dog = new Dog('旺财', 5);
  console.log(dog)
  dog.sayHello();
  dog.run();

  class Cat extends Animal {
    sayHello() {
      console.log('喵喵喵！');
    }
  }

  const cat = new Cat('咪咪', 3);
  console.log(cat);
  cat.sayHello();

})()
