import * as ex from "excalibur";
import { Resources } from "../../resources";
import { Bullet } from "../bullets/bullets";
export class Player extends ex.Actor {
  public IdleSheet = new ex.SpriteSheet(Resources.Player, 4, 4, 50, 50);
  public armaIdleSheet = new ex.SpriteSheet(Resources.Player, 4, 3, 50, 50);
  passo = 5;
  hp = 1;
  constructor() {
    super();
    this.setWidth(50);
    this.setHeight(50);
    this.x = window.innerWidth * 0.5;
    this.y = window.innerHeight * 0.5;
    this.color = new ex.Color(255, 255, 255);
  }
  onInitialize(engine: ex.Engine) {
    this.on("precollision", this.onPreCollision);
  }
  onPreCollision(evt: ex.PreCollisionEvent) {
    if (evt.other instanceof Bullet) {
    }

    this.hp -= 1;
    if (this.hp <= 0) {
      this.kill();
    }
  }

  criar(game) {
    this.addDrawing("idle", this.IdleSheet.getAnimationForAll(game, 125));
    this.addDrawing("armado", this.armaIdleSheet.getAnimationForAll(game, 125));
    this.setDrawing("idle");
    this.x = game.halfDrawWidth;
    this.y = game.halfDrawHeight;
    this.mirar(game);
    this.andar(game);
    this.atirar(game);
  }

  atirar(game) {
    game.input.pointers.primary.on(
      "down",
      (pointers: ex.Input.PointerEvent) => {
        let bullet = new Bullet(
          this.x + 10,
          this.y + 10,
          Math.cos(this.rotation) * 1000,
          Math.sin(this.rotation) * 1000,
          this
        );
        game.add(bullet);
      }
    );
  }
  mirar(game) {
    game.input.pointers.primary.on(
      "move",
      (pointers: ex.Input.PointerEvent) => {
        let gamex = pointers.pos.x - this.pos.x;
        let gamey = pointers.pos.y - this.pos.y;
        this.rotation = Math.atan2(gamey, gamex);
      }
    );
  }
  andar(game) {
    game.input.keyboard.on("hold", (keyDown?: ex.Input.KeyEvent) => {
      if (keyDown.key === ex.Input.Keys.D) {
        game.currentScene.camera.x += this.passo;
        this.x += this.passo;
      }
      if (keyDown.key === ex.Input.Keys.A) {
        game.currentScene.camera.x -= this.passo;
        this.x -= this.passo;
      }
      if (keyDown.key === ex.Input.Keys.W) {
        game.currentScene.camera.y -= this.passo;
        this.y -= this.passo;
      }
      if (keyDown.key === ex.Input.Keys.S) {
        game.currentScene.camera.y += this.passo;
        this.y += this.passo;
      }
      game.input.keyboard.on("down", (keyDownn?: ex.Input.KeyEvent) => {
        if (keyDownn.key === ex.Input.Keys.R) {
          this.setDrawing("armado");
        }
      });
    });
  }
}
