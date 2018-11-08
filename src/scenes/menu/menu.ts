import * as ex from "excalibur";
import { Zombie } from "../../actors/enemy/zombie";
import { PrimeiroMapa } from "../../map/map.logic";
import { Loader } from "excalibur";
import { Player } from "../../actors/player/player";
import { vector } from "excalibur/dist/Util/DrawUtil";
import { Pointer } from "excalibur/dist/Input";
export class Menu extends ex.Scene {
  public onInitialize(engine: ex.Engine) {}
  public onActivate() {}
  public onDeactivate() {}
}
const zombie = new Zombie();
var game = new ex.Engine({
  width: window.innerWidth,
  height: window.innerHeight
});
zombie.set_animations(game);
//game.isDebug = true;
var tm = new PrimeiroMapa();
tm.carregar();
game.add(tm);
game.currentScene.add(zombie);
zombie.x = game.halfDrawWidth;
zombie.y = game.halfDrawHeight;

const loader = new ex.Loader();
const passo = 10;

game.input.pointers.primary.on("move", (pointers: ex.Input.PointerEvent) => {
  let gamex = pointers.pos.x - zombie.pos.x;
  let gamey = pointers.pos.y - zombie.pos.y;
  zombie.rotation = Math.atan2(gamey, gamex);
});

game.input.keyboard.on("hold", (keyDown?: ex.Input.KeyEvent) => {
  if (keyDown.key === ex.Input.Keys.D) {
    game.currentScene.camera.x += passo;
    zombie.x += passo;
  }
  if (keyDown.key === ex.Input.Keys.A) {
    game.currentScene.camera.x -= passo;
    zombie.x -= passo;
  }
  if (keyDown.key === ex.Input.Keys.W) {
    game.currentScene.camera.y -= passo;
    zombie.y -= passo;
  }
  if (keyDown.key === ex.Input.Keys.S) {
    game.currentScene.camera.y += passo;
    zombie.y += passo;
  }
});

game.start(loader).then(() => {});
