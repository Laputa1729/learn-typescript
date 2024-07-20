class Dog {
  name: string;
  age: number;

  // 构造函数会在对象创建时调用
  constructor(name: string, age: number) {
    // this 指向当前实例对象
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log('旺旺旺！');
    console.log('@', this);
  }
}

const dog = new Dog('小黑', 3);
const dog2 = new Dog('小黄', 2);

dog.bark();
dog2.bark();
