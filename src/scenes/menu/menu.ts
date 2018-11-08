import * as ex from "excalibur";
import { PrimeiroMapa } from "../../map/map.logic";
import { Player } from "../../actors/player/player";
import { Resources } from "../../resources";
export class Menu extends ex.Scene {
  public onInitialize(engine: ex.Engine) {}
  public onActivate() {}
  public onDeactivate() {}
}
const player = new Player();
var game = new ex.Engine({
  width: window.innerWidth,
  height: window.innerHeight
});
const loader = new ex.Loader();

//game.isDebug = true;
var tm = new PrimeiroMapa();
tm.carregar();
game.add(tm);
game.currentScene.add(player);
player.criar(game);
for (let key in Resources) {
  loader.addResource(Resources[key]);
}
game.start(loader).then(() => {});
