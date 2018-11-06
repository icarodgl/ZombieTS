import * as ex from "excalibur";
export class Zombie extends ex.Actor {
  constructor() {
    super();
    this.setWidth(50);
    this.setHeight(50);
    this.x = 0;
    this.y = 0;
    this.color = new ex.Color(255, 255, 255);
  }
}
