class Snake {

  container: HTMLElement;  // 蛇容器
  head: HTMLElement;  // 蛇头
  bodies: HTMLCollection;  // 蛇身

  constructor() {
    this.container = document.getElementById('snake')!;
    this.head = document.querySelector('#snake > div')!;
    this.bodies = this.container.getElementsByTagName('div');
  }

  get X() {
    return this.head.offsetLeft;
  }

  set X(value: number) {
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了！');
    }
    // 蛇头移动，蛇身跟着移动
    this.moveBody();
    this.head.style.left = value + 'px';
  }

  get Y() {
    return this.head.offsetTop;
  }

  set Y(value: number) {
    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了！');
    }
    // 蛇头移动，蛇身跟着移动
    this.moveBody();
    this.head.style.top = value + 'px';
  }

  // 给蛇增加身体
  addBody() {
    // 在蛇容器的末尾插入一个 div
    this.container.insertAdjacentHTML('beforeend', '<div></div>');
  }

  moveBody() {
    // 将所有蛇身体向右移动
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前边身体位置
      const X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      const Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
      // 将值设置到当前身体上
      (this.bodies[i] as HTMLElement).style.left = X + 'px';
      (this.bodies[i] as HTMLElement).style.top = Y + 'px';
    }
  }
}


export default Snake;
