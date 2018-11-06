import * as ex from "excalibur";
const sword = require("./images/sword.png");
const player = require("./images/player.png");

let Resources = {
  Sword: new ex.Texture(sword),
  Player: new ex.Texture(player)
};

export { Resources };
