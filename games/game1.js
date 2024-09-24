import Game from './Game.js';

class LCMGame extends Game {
  constructor() {
    super('НОК', 'Найдите наибольшее общее кратное среди трех чисел');
  }

  getLCM(a, b) {
    const gcd = (x, y) => (!y ? x : gcd(y, x % y));
    return (a * b) / gcd(a, b);
  }

  play() {
    this.greetUser();
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const num3 = Math.floor(Math.random() * 10) + 1;
    console.log(`Найдите наибольшее общее кратное среди ${num1}, ${num2} и ${num3}.`);
    const answer = this.askQuestion('Ваш ответ: ');
    const correctAnswer = this.getLCM(this.getLCM(num1, num2), num3);
    this.showResult(parseInt(answer, 10) === correctAnswer, correctAnswer);
  }
}

export default LCMGame;
