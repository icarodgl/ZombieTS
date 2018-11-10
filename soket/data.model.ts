import { Player } from "../src/actors/player/player";
import { Bullet } from "../src/actors/bullets/bullets";

export class LocalData {
  player: Player;
  Bullet: Bullet;
  players: Array<Player>;
  bullets: Array<Bullet>;
}
