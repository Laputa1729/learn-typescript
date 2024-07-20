import {hi} from './m';

let a = 10;
console.log(hi)

function fn1() {
  alert(this);
}

function fn2(this: Window) {
  alert(this);
}
