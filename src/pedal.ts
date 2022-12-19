import { Connection, NetworkConnection, VoltageRatioInput } from "./phidget22";

export class Pedal {
  private VARIATION = 0.05;

  private sensor: VoltageRatioInput = new VoltageRatioInput();
  private webServer: NetworkConnection = new Connection(8989, "localhost");

  private totalVariation: number = 0;
  private lastReadLaps: number = 0;

  constructor() {
    this.handleConnection();
  }

  private handleConnection(): void {
    this.webServer
      .connect()
      .then(
        () =>
          (this.sensor.onVoltageRatioChange = () =>
            this.handleVoltageChange(this))
      )
      .then(() => this.sensor.open())
      .then(() => this.sensor.setVoltageRatioChangeTrigger(this.VARIATION))
      .catch((err) => {
        this.sensor.close();
        console.error(err);
      });
  }

  /** t is to replace this, otherwise this would reference VoltageRatioInput */
  private handleVoltageChange(t: Pedal): void {
    t.totalVariation += 1;
  }

  public get lapsSinceLastRead(): number {
    return Math.abs(this.lastReadLaps - this.laps);
  }

  public get laps(): number {
    this.lastReadLaps = this.totalVariation / 2;
    return this.lastReadLaps;
  }
}
