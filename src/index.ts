import * as ex from "excalibur";
import { LevelOne } from "./scenes/level-one/level-one";
import { Menu } from "./scenes/menu/menu";
import { Player } from "./actors/player/player";
import { Resources } from "./resources";
import { Zombie } from "./actors/enemy/zombie";

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
const levelOne = new LevelOne();
const menu = new Menu();
const player = new Player();
const zombie = new Zombie();
const playerIdleSheet = new ex.SpriteSheet(Resources.Player, 4, 1, 50, 50);
player.addDrawing("idle", playerIdleSheet.getAnimationForAll(game, 125));
menu.add(player);

game.add("menu", menu);
game.add("lv1", levelOne);

let loader = new ex.Loader();
for (let key in Resources) {
  loader.addResource(Resources[key]);
}

game.start(loader).then(() => {
  game.goToScene("lv1");
});
