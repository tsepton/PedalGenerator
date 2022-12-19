export default class Battery {
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
