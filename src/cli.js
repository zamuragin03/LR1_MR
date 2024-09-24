import readlineSync from 'readline-sync';

export const greetUser = () => {
  console.log('Добро пожаловать!');
  const name = readlineSync.question('Введите ваше имя: ');
  return name
};
