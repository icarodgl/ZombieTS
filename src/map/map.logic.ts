import * as ex from "excalibur";
import { Resources } from "../resources";
export class PrimeiroMapa extends ex.TileMap {
  constructor() {
    super(0, 0, 50, 50, 40, 40);
  }
  ss = new ex.SpriteSheet({
    image: Resources.Areia,
    rows: 1,
    columns: 1,
    spWidth: 50,
    spHeight: 50
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
