import { Player } from "../src/actors/player/player";
import { SocketService } from "./soket.service";
import { Bullet } from "../src/actors/bullets/bullets";
import { LocalData } from "./data.model";

export class ClientService {
  constructor(public soket: SocketService) {}

  public data: LocalData;
  async atualiza(data: LocalData) {
    return (this.data = await this.soket.event(data));
  }
}
