(function () {

  class Person {
    /**
     * public 修饰的属性可在任意位置访问（修改）
     * private 修饰的属性只能在自身类内部进行访问（修改），子类也不行
     * protected 修饰的属性只能在当前类和当前类的子类中访问（修改）
     *
     * 可通过在类中添加方法，使得私有属性可以被外部访问
     */
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    // 向外部暴露私有属性 getter
    getName() {
      return this.name;
    }

    // setter
    setName(value: string) {
      this.name = value;
    }

    getAge() {
      return this.age;
    }

    setAge(value: number) {
      if (value >= 0) {
        this.age = value;
      }
    }
  }

  const p = new Person('孙悟空', 18);

  // 现在的属性是在对象中设置，属性可被任意修改
  // 弊端：属性被任意修改，导致对象中的数据变得不安全
  // p.name = '猪八戒';
  // p.age = -38;

  p.setName('猪八戒');
  p.setAge(-38);

  console.log('@1', p);
  console.log('@2', p.getName());

  // =============================================================================

  class Person1 {

    // 改名 _name 是为了防止 setter 重名，触发 setter 后导致死循环
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }

    // TS 中 getter/setter 简化
    get name() {
      return this._name;
    }

    set name(value: string) {
      this._name = value;
    }

    get age() {
      return this._age;
    }

    set age(value: number) {
      if (value >= 0) {
        this._age = value;
      }
    }

  }

  const p1 = new Person1('孙悟空', 18);

  p1.name = '猪八戒';
  p1.age = -38;

  console.log('@3', p1);

})()
