import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

// 游戏控制器，控制其他所有类
class GameControl {

  snake: Snake;  // 蛇
  food: Food;  // 食物
  scorePanel: ScorePanel;  // 记分牌

  direction: string = 'ArrowRight';  // 存储蛇的移动方向
  is_alive: boolean = true;  // 开关

  constructor() {
    this.snake = new Snake();
    this.food = new Food();
    this.scorePanel = new ScorePanel();
  }

  // 游戏的初始化方法，调用后游戏即开始
  init() {
    // 事件绑定的回调函数 this 指向的是 document，所以需要使用箭头函数，或者 bind(this)，确保 this 正确指向 GameControl
    // document.addEventListener('keydown', this.keydownHandle.bind(this));
    document.addEventListener('keydown', (event) => this.keydownHandle(event));
    /* 箭头函数的 this 指向创建时，离它最近的外层函数的 this，如果没有，一层一层往外找，直至指向 Window */

    this.run();
  }
  // 键盘按键按下的回调函数
  keydownHandle(event: KeyboardEvent) {
    // console.log('@@@', this)
    // 获取按键值
    this.direction = event.key;
  }

  run() {
    try {
      // 根据方向修改蛇的坐标
      switch (this.direction) {
        case 'ArrowUp':
          this.snake.Y -= 10;
          break;
        case 'ArrowDown':
          this.snake.Y += 10;
          break;
        case 'ArrowLeft':
          this.snake.X -= 10;
          break;
        case 'ArrowRight':
          this.snake.X += 10;
          break;
        default:
          this.is_alive = false;
          break;
      }
    } catch (error) {
      this.is_alive = false;
      alert('Game Over!');
    }

    this.checkEat();

    // 开启一个定时器，让蛇动起来
    this.is_alive && setTimeout(() => {
      console.log('走起~！')
      this.run();
    }, 200);
  }

  checkEat() {
    if (this.snake.X === this.food.X && this.snake.Y === this.food.Y) {
      console.log('吃到食物了！');
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addBody();
    }
  }
}

export default GameControl;
