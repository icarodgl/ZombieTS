import { Player } from "../src/actors/player/player";
import { SocketService } from "./soket.service";

export class ClientService {
  constructor(public soket: SocketService) {}
  public players: Array<Player>;
  public bullets: Array<Object>;
  async senPlayer(player: Player) {
    this.players = await this.soket.event(player);
    this.players.map(element => {
      if (element.name == player.name) {
        return element;
      }
    });
  }
  async sendBullts(bullet) {}
}
