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
    this.head.style.left = value + 'px';
  }

  get Y() {
    return this.head.offsetTop;
  }

  set Y(value: number) {
    this.head.style.top = value + 'px';
  }

  // 给蛇增加身体
  addBody() {
    // 在蛇容器的末尾插入一个 div
    this.container.insertAdjacentHTML('beforeend', '<div></div>');
  }
}
