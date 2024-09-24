import readlineSync from "readline-sync";
import LCMGame from "../games/game1.js";
import ProgressionGame from "../games/game2.js";

const games = {
    lcm: new LCMGame(),
    progression: new ProgressionGame(),
};

export const chooseGame = () => {
    console.log("Выберите игру \n1 - НОК\n2 - Геометрическая прогрессия");
    const choice = readlineSync.question("Введите номер:");

    switch (choice) {
        case "1":
            games.lcm.play();
            break;
        case "2":
            games.progression.play();
            break;
        default:
            console.log("Ошибка");
            chooseGame();
    }
};
