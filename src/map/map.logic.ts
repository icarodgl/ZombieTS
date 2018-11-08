import * as ex from "excalibur";
import { Resources } from "../resources";
export class PrimeiroMapa extends ex.TileMap {
  constructor() {
    super(0, 0, 50, 50, 20, 20);
  }
  ss = new ex.SpriteSheet({
    image: Resources.Areia,
    rows: 1,
    columns: 1,
    spWidth: 100,
    spHeight: 100
  });
  tilesprite = new ex.TileSprite("root", 0);

  carregar() {
    this.registerSpriteSheet("root", this.ss);
    this.criaTerreno();
  }
  criaTerreno() {
    for (var i = 0; i < this.rows * this.cols; i++) {
      this.getCellByIndex(i).pushSprite(this.tilesprite);
    }
  }
}
