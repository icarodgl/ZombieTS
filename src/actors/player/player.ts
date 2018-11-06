import * as ex from "excalibur";
export class Player extends ex.Actor {
  constructor() {
    super();
    this.setWidth(50);
    this.setHeight(50);
    this.x = window.innerWidth * 0.5;
    this.y = window.innerHeight * 0.5;
    this.color = new ex.Color(255, 255, 255);
  }
}
