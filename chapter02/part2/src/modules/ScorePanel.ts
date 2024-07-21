// 定义记分牌
class ScorePanel {

  score = 0;
  level = 1;
  scoreEl: HTMLElement;
  levelEl: HTMLElement;

  maxLevel: number;  // 等级上限
  upScore: number;  // 分数达到多少升一级

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEl = document.getElementById('score')!;
    this.levelEl = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  addScore() {
    this.score++;
    this.scoreEl.innerHTML = this.score + '';
    // 分数达到整 10 倍就升一级
    if (this.score % 10 === 0) {
      this.levelUp();
    }
  }

  levelUp() {
    if (this.level < 10) {
      this.level++;
      this.levelEl.innerHTML = this.level + '';
    }
  }
}


export default ScorePanel;
