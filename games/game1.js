import readlineSync from 'readline-sync';

const getLCM = (a, b) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  return (a * b) / gcd(a, b);
};

export const playLCMGame = (name) => {
  console.log('Игра НОК');
  const num1 = Math.floor(Math.random() * 20) + 1;
  const num2 = Math.floor(Math.random() * 20) + 1;
  const num3 = Math.floor(Math.random() * 20) + 1;
  console.log(`Найди наименьее общее кратное среди трех чисел ${num1}, ${num2} и ${num3}.`);
  const answer = readlineSync.question('Введи ответ: ');
  const correctAnswer = getLCM(getLCM(num1, num2), num3);
  if (parseInt(answer, 10) === correctAnswer) {
    console.log(`Молодец ${name}!`);
  } else {
    console.log(`Неверно,${name}, правильный ответ ${correctAnswer}.`);
  }
};

