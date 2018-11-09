import * as ex from "excalibur";
import { PrimeiroMapa } from "../../map/map.logic";
import { Player } from "../../actors/player/player";
import { Resources } from "../../resources";
import { Zombie } from "../../actors/enemy/zombie";
import { randomInRange } from "excalibur/dist/Util";
import { Timer } from "excalibur";
import { TIMEOUT } from "dns";
export class Menu extends ex.Scene {
  public onInitialize(engine: ex.Engine) {}
  public onActivate() {}
  public onDeactivate() {}
}
const player = new Player();
const zombies = [];
var game = new ex.Engine({
  width: window.innerWidth,
  height: window.innerHeight
});
const loader = new ex.Loader();

//game.isDebug = true;
var tm = new PrimeiroMapa();
tm.carregar();
game.add(tm);

player.criar(game);

game.currentScene.add(player);

for (let key in Resources) {
  loader.addResource(Resources[key]);
}
game.start(loader).then(() => {
  while (zombies.length < 10) {
    let zombie = new Zombie();
    zombies.push(zombie);
    zombie.cria(game);
    zombie.x = randomInRange(1, 500);
    zombie.y = randomInRange(1, 500);
    game.currentScene.add(zombie);
  }
});
