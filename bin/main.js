import { greetUser } from "../src/cli.js";
import { playLCMGame } from "../games/game1.js";
import { chooseGame } from "../src/game_chooser.js";
import { playProgressionGame } from "../games/game2.js";
let name = greetUser();
let game_number = chooseGame()
switch (game_number) {
    case 1:
        playLCMGame(name);
        break;
    case 2:
        playProgressionGame(name)
        break
    default:
        console.log('Введен неверный номер игры');
        
}
