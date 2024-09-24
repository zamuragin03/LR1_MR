import Game from './Game.js';

class ProgressionGame extends Game {
  constructor() {
    super('Геометрическая прогрессия', 'Найдите пропущенное звено прогрессии');
  }

  generateProgression(start, ratio, length) {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(start * (ratio ** i));
    }
    return progression;
  }

  play() {
    this.greetUser();
    const start = Math.floor(Math.random() * 10) + 1;
    const ratio = Math.floor(Math.random() * 5) + 2;
    const length = Math.floor(Math.random() * 6) + 5; // длина от 5 до 10
    const progression = this.generateProgression(start, ratio, length);
    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[hiddenIndex];
    progression[hiddenIndex] = '..';
    console.log(`Найдите пропущенное звено прогрессии: ${progression.join(', ')}`);
    const answer = this.askQuestion('Ваш ответ: ');
    this.showResult(parseInt(answer, 10) === correctAnswer, correctAnswer);
  }
}

export default ProgressionGame;
