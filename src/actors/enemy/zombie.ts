import * as ex from "excalibur";
import { Resources } from "../../resources";
import { Bullet } from "../bullets/bullets";
export class Zombie extends ex.Actor {
  public IdleSheet = new ex.SpriteSheet(Resources.Zombie, 4, 1, 50, 50);
  public atackSheet = new ex.SpriteSheet(Resources.Zombie, 4, 2, 50, 50);
  hp = 1;
  constructor() {
    super();
    this.setWidth(50);
    this.setHeight(50);
    this.x = 100;
    this.y = 100;
    this.color = new ex.Color(255, 255, 255);
    this.collisionType = ex.CollisionType.Passive;
  }

  cria(game) {
    this.addDrawing("idle", this.IdleSheet.getAnimationForAll(game, 125));
    this.addDrawing("atack", this.atackSheet.getAnimationForAll(game, 125));
    this.onInitialize(game);
  }
  onInitialize(engine: ex.Engine) {
    this.on("precollision", this.onPreCollision);
  }
  onPreCollision(evt: ex.PreCollisionEvent) {
    if (evt.other instanceof Bullet) {
      this.hp -= 1;
    }
    if (this.hp <= 0) {
      this.kill();
    }
  }
}
