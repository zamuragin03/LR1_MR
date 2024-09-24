import readlineSync from 'readline-sync';

export default class Game {
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }

  greetUser() {
    console.log(`Играем в игру ${this.name}!`);
  }

  askQuestion(question) {
    return readlineSync.question(question);
  }

  showResult(isCorrect, correctAnswer) {
    if (isCorrect) {
      console.log('Верно!');
    } else {
      console.log(`Неверно, правильный ответ ${correctAnswer}.`);
    }
  }

  play() {
    throw new Error('implement error');
  }
}

