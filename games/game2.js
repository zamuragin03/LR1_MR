import readlineSync from 'readline-sync';

const generateProgression = (start, ratio, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start * (ratio ** i));
  }
  return progression;
};

export const playProgressionGame = () => {
  console.log('Игра геометрическая прогрессия');
  const start = Math.floor(Math.random() * 10) + 1;
  const ratio = Math.floor(Math.random() * 5) + 2;
  const length = Math.floor(Math.random() * 6) + 5; // длина от 5 до 10
  const progression = generateProgression(start, ratio, length);
  const hiddenIndex = Math.floor(Math.random() * length);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '*';
  console.log(`Какое число пропущено? ${progression.join(' ')}`);
  const answer = readlineSync.question('Введите ответ: ');
  if (parseInt(answer, 10) === correctAnswer) {
    console.log('Все верно!');
  } else {
    console.log(`Неправильно. Верный ответ: ${correctAnswer}.`);
  }
};
