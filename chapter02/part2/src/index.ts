import './style/index.less';
// import Food from './modules/Food';
//
// // 测试
// const food = new Food();
// console.log(food.X, food.Y);
// food.change();
// console.log(food.X, food.Y)

import GameControl from './modules/GameControl';

const gameControl = new GameControl();
gameControl.init();

// setInterval(() => {
//   console.log('>>>', gameControl.direction)
// }, 2000)
