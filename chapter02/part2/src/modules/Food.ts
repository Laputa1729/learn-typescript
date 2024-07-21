class Food {

  element: HTMLElement;

  constructor() {
    this.element = document.getElementById('food')!;
  }

  get X() {
    return this.element.offsetLeft;
  }

  get Y() {
    return this.element.offsetTop;
  }

  // 食物变换位置区间 [0 ~ 290]
  change() {
    // 蛇移动一次一格大小为 10，所以食物的坐标必须是 10 的倍数
    let top = Math.round(Math.random() * 29) * 10;  // 0 ~ 290 的随机数
    let left = Math.round(Math.random() * 29) * 10;

    this.element.style.top = top + 'px';
    this.element.style.left = left + 'px';
  }
}


export default Food;
