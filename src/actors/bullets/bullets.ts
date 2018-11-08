import * as ex from "excalibur";
import { Resources } from "../../resources";

export class Bullet extends ex.Actor {
  public owner: ex.Actor;
  constructor(x, y, dx, dy, owner?: ex.Actor) {
    super({
      x: x,
      y: y,
      vel: new ex.Vector(dx, dy),
      width: 10,
      height: 10,
      collisionType: ex.CollisionType.Passive
    });
    this.owner = owner;
  }

  onInitialize(engine: ex.Engine) {
    this.on("precollision", this.onPreCollision);
    // Clean up on exit viewport
    this.on("exitviewport", () => this.killAndRemoveFromBullets());

    let IdleSheet = new ex.SpriteSheet(Resources.bullet, 1, 1, 10, 10);
    this.addDrawing("default", IdleSheet.getAnimationForAll(engine, 125));
  }

  private onPreCollision(evt: ex.PreCollisionEvent) {
    if (!(evt.other instanceof Bullet) && evt.other !== this.owner) {
      this.killAndRemoveFromBullets();
    }
  }

  private killAndRemoveFromBullets() {
    this.kill();
    //ex.Util.removeItemFromArray(this, Baddie.Bullets);
  }
}
