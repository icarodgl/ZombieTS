import * as ex from "excalibur";
const player = require("./images/player.png");
const zombie = require("./images/zombie.png");
const areia = require("./images/areia.png");
const bullet = require("./images/bullet.png");

let Resources = {
  bullet: new ex.Texture(bullet),
  Player: new ex.Texture(player),
  Zombie: new ex.Texture(zombie),
  Areia: new ex.Texture(areia)
};
export { Resources };
