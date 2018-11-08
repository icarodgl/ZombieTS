import * as ex from "excalibur";
import { Resources } from "../../resources";
export class Zombie extends ex.Actor {
  public IdleSheet = new ex.SpriteSheet(Resources.Zombie, 4, 1, 50, 50);
  public atackSheet = new ex.SpriteSheet(Resources.Zombie, 4, 2, 50, 50);
  constructor() {
    super();
    this.setWidth(50);
    this.setHeight(50);
    this.x = 100;
    this.y = 100;
    this.color = new ex.Color(255, 255, 255);
  }

  set_animations(game) {
    this.addDrawing("idle", this.IdleSheet.getAnimationForAll(game, 125));
    this.addDrawing("atack", this.atackSheet.getAnimationForAll(game, 125));
  }
}
