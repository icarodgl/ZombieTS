import * as ex from 'excalibur';
export class LevelOne extends ex.Scene {
  public onInitialize(engine: ex.Engine) {}
  public onActivate() {}
  public onDeactivate() {}
}
var width = 600;
var height = 400;
var speed = 100;

var engine = new ex.Engine({ width: window.innerWidth,height: window.innerHeight, canvasElementId: 'game' });

engine.backgroundColor = ex.Color.Black;

var player = new ex.Actor(width / 2, height / 2, 30, 30, ex.Color.Red);
//player.currentDrawing.scale = new ex.Point(0.5, 0.5);
engine.currentScene.add(player);

engine.input.keyboard.on('down', (keyDown?: ex.Input.KeyEvent) => {
  if (keyDown.key === ex.Input.Keys.D) {
    engine.isDebug = !engine.isDebug;
  } else if (keyDown.key === ex.Input.Keys.Up) {
    player.vel.y = -speed;
  } else if (keyDown.key === ex.Input.Keys.Down) {
    player.vel.y = speed;
  } else if (keyDown.key === ex.Input.Keys.Left) {
    player.vel.x = -speed;
  } else if (keyDown.key === ex.Input.Keys.Right) {
    player.vel.x = speed;
  }
});

engine.input.keyboard.on('up', (keyUp?: ex.Input.KeyEvent) => {
  if (keyUp.key === ex.Input.Keys.Up) {
    player.vel.y = 0;
  } else if (keyUp.key === ex.Input.Keys.Down) {
    player.vel.y = 0;
  } else if (keyUp.key === ex.Input.Keys.Left) {
    player.vel.x = 0;
  } else if (keyUp.key === ex.Input.Keys.Right) {
    player.vel.x = 0;
  }
});

engine.start().then(() => {});