import Battery from "./battery";
import Pedal from "./pedal";

export default class Bike {
  private pedal: Pedal = new Pedal();
  private battery: Battery = new Battery();
  private interval: number;

  constructor() {
    this.interval = this.handleCycling();
  }

  private handleCycling(): number {
    return window.setInterval(() => {
      this.battery.feed(this.pedal.lapsSinceLastRead);
    }, 500);
  }
}
