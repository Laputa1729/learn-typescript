(function () {

  // 描述一个对象的类型
  type myType = {
    name: string,
    age?: number,
  };

  /**
   * 接口
   *   用来定义一个类的结构
   *   接口也可以当成类型声明去使用
   *   接口中所有的属性都不能有实际的值
   *   接口中所有的方法都是抽象方法
   */
  interface myInterface {
    name: string,
    age?: number,
  }

  // 接口可以重复定义，两者合并
  interface myInterface {
    gender: string,
  }

  const obj: myInterface = {
    name: '小明',
    gender: '男',
  };

  interface myInterface2 {
    name: string,

    sayHello(): void,
  }

  /**
   * 定义类时，可以使类去实现一个接口
   * 实现接口就是，使类满足接口的要求
   */
  class MyClass implements myInterface2 {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello() {
      console.log('hello~~~!');
    }
  }

  /* 接口就是规范 */

})()
