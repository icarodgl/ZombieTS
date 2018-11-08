import * as ex from "excalibur";
import { Zombie } from "../../actors/enemy/zombie";
import { PrimeiroMapa } from "../../map/map.logic";
import { Loader } from "excalibur";
import { Player } from "../../actors/player/player";
import { vector } from "excalibur/dist/Util/DrawUtil";
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
zombie.anchor.setTo(0.5, 0.5);
const loader = new ex.Loader();

game.input.keyboard.on("press", (keyDown?: ex.Input.KeyEvent) => {
  if (keyDown.key === ex.Input.Keys.D) {
    game.currentScene.camera
      .move(
        new ex.Vector(
          game.currentScene.camera.x + 50,
          game.currentScene.camera.y
        ),
        500,
        ex.EasingFunctions.EaseInOutCubic
      )
      .then(() => {
        zombie.actions.moveBy(
          game.currentScene.camera.x,
          game.currentScene.camera.y,
          500
        );
      });
  }
  if (keyDown.key === ex.Input.Keys.A) {
    game.currentScene.camera
      .move(
        new ex.Vector(
          game.currentScene.camera.x - 50,
          game.currentScene.camera.y
        ),
        500,
        ex.EasingFunctions.EaseInOutCubic
      )
      .then(() => {
        zombie.actions.moveBy(
          game.currentScene.camera.x,
          game.currentScene.camera.y,
          500
        );
      });
  }
  if (keyDown.key === ex.Input.Keys.W) {
    game.currentScene.camera
      .move(
        new ex.Vector(
          game.currentScene.camera.x,
          game.currentScene.camera.y - 50
        ),
        500,
        ex.EasingFunctions.EaseInOutCubic
      )
      .then(() => {
        zombie.actions.moveBy(
          game.currentScene.camera.x,
          game.currentScene.camera.y,
          500
        );
      });
  }
  if (keyDown.key === ex.Input.Keys.S) {
    game.currentScene.camera
      .move(
        new ex.Vector(
          game.currentScene.camera.x,
          game.currentScene.camera.y + 50
        ),
        500,
        ex.EasingFunctions.EaseInOutCubic
      )
      .then(() => {
        zombie.actions.moveBy(
          game.currentScene.camera.x,
          game.currentScene.camera.y,
          500
        );
      });
  }
});

game.start(loader).then(() => {});
