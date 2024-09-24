import readlineSync from "readline-sync";

export const chooseGame = () => {
   console.log("Выберите игру \n1 - НОК\n2 - Геометрическая прогрессия");
   const game_number = readlineSync.question("Введите номер: ");
   try {
      return Number(game_number);
   } catch (error) {
      return 1;
   }
};
