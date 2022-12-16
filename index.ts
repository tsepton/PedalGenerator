import phidget22, { NetworkConnection } from "./phidget22";
import { VoltageRatioInput } from "./phidget22";

export class Bike {
  private pedal: Pedal = new Pedal();
  private battery: Battery = new Battery();
  private interval: number;

  constructor() {
    this.interval = window.setInterval(this.handleCycling, 100);
  }

  private handleCycling(): void {
    throw new Error("Not Implemented");
  }
}

class Pedal {
  private THRESHOLD = 2; // TODO

  private sensor: VoltageRatioInput = new phidget22.VoltageRatioInput();
  private webServer: NetworkConnection = new phidget22.Connection(
    8989,
    "localhost"
  );

  constructor() {
    const openChannel = () => {
      this.sensor
        .open()
        .catch((err) => console.warn("failed to open the channel:" + err));
    };
    this.webServer
      .connect()
      .then(() => openChannel())
      .then(() => this.sensor.setVoltageRatioChangeTrigger(this.THRESHOLD))
      .then(() =>
        this.sensor.setOnVoltageRatioChangeHandler(this.handleVoltageChange)
      )
      .catch((err) => console.error("failed to connect to server:" + err));
  }

  private handleVoltageChange(e): void {
    console.log(e);
  }
}

class Battery {
  private energy = 0;

  constructor() {}

  public feed(amount: number): void {
    this.energy += amount;
  }

  public consume(amount: number): void {
    this.energy -= amount;
  }

  public total(): number {
    return this.energy;
  }
}
