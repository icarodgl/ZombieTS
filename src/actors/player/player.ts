import * as ex from "excalibur";
import { Resources } from "../../resources";
export class Player extends ex.Actor {
  public IdleSheet = new ex.SpriteSheet(Resources.Player, 4, 1, 50, 50);

  constructor() {
    super();
    this.setWidth(50);
    this.setHeight(50);
    this.x = window.innerWidth * 0.5;
    this.y = window.innerHeight * 0.5;
    this.color = new ex.Color(255, 255, 255);
  }
  set_animations(game) {
    this.addDrawing("idle", this.IdleSheet.getAnimationForAll(game, 125));
  }
}
