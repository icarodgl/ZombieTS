import * as ex from "excalibur";
import { LevelOne } from "./scenes/level-one/level-one";
import { Menu } from "./scenes/menu/menu";
import { Player } from "./actors/player/player";
import { Resources } from "./resources";
class Game extends ex.Engine {
  constructor() {
    super({
      width: window.innerWidth,
      height: window.innerHeight,
      displayMode: ex.DisplayMode.FullScreen
    });
  }

  public start(loader: ex.Loader) {
    return super.start(loader);
  }
}

const game = new Game();
const menu = new Menu();
const player = new Player();

player.criar(game);

game.add("menu", menu);
//game.add("lv1", levelOne);

let loader = new ex.Loader();
game.start(loader).then(() => {
  game.goToScene("menu");
});
