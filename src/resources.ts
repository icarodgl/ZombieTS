import * as ex from "excalibur";
const sword = require("./images/sword.png");
const player = require("./images/player.png");
const zombie = require("./images/zombie.png");
const areia = require("./images/areia.png");
let Resources = {
  Sword: new ex.Texture(sword),
  Player: new ex.Texture(player),
  Zombie: new ex.Texture(zombie),
  Areia: new ex.Texture(areia)
};
export { Resources };
