/// <reference types="node" />
/// <reference types="w3c-web-usb" />

/** @public */
export declare class Accelerometer extends AccelerometerBase {}

declare abstract class AccelerometerBase extends PhidgetChannel {
  /**
   * **AccelerationChange** event
   *  * `acceleration` - The acceleration values
   *  * `timestamp` - The timestamp value
   * ---
   * The most recent acceleration values the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `accelerationChangeTrigger` has been set to a non-zero value, the `AccelerationChange` event will not occur until the acceleration has changed by at least the `accelerationChangeTrigger` value.
   */
  onAccelerationChange:
    | ((
        acceleration: readonly [number, number, number],
        timestamp: number
      ) => void)
    | null;

  /**
   * The Accelerometer class is used to gather acceleration data from Phidget accelerometer boards. Phidget accelerometers usually have multiple sensors, each oriented in a different axis, so multiple dimensions of acceleration can be recorded.
   *
   * If the Phidget you're using also has a gyroscope and a magnetometer, you may want to use the Spatial class in order to get all of the data at the same time, in a single event.
   * @public
   */
  constructor();

  /**
   * The most recent acceleration value that the channel has reported.
   *
   * *   This value will always be between `minAcceleration` and `maxAcceleration`.
   * @throws {@link PhidgetError}
   */
  get acceleration(): readonly [number, number, number];
  /**
   * The minimum value the `AccelerationChange` event will report.
   * @throws {@link PhidgetError}
   */
  get minAcceleration(): readonly [number, number, number];
  /**
   * The maximum value the `AccelerationChange` event will report.
   * @throws {@link PhidgetError}
   */
  get maxAcceleration(): readonly [number, number, number];
  /**
   * The channel will not issue a `AccelerationChange` event until the acceleration value has changed by the amount specified by the `accelerationChangeTrigger`.
   *
   * *   Setting the `accelerationChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */
  get accelerationChangeTrigger(): number;
  /**
   * The minimum value that `accelerationChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get minAccelerationChangeTrigger(): number;
  /**
   * The maximum value that `accelerationChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxAccelerationChangeTrigger(): number;
  /**
   * The number of axes the channel can measure acceleration on.
   *
   * *   See your device's User Guide for more information about the number of axes and their orientation.
   * @throws {@link PhidgetError}
   */
  get axisCount(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `AccelerationChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `AccelerationChange` events can also be affected by the `accelerationChangeTrigger`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   */
  get heatingEnabled(): boolean;

  /**
   * The most recent timestamp value that the channel has reported. This is an extremely accurate time measurement streamed from the device.
   *
   * *   If your application requires a time measurement, you should use this value over a local software timestamp.
   * @throws {@link PhidgetError}
   */
  get timestamp(): number;
  /**
   * The most recent acceleration value that the channel has reported.
   *
   * *   This value will always be between `minAcceleration` and `maxAcceleration`.
   * @returns The acceleration values
   * @throws {@link PhidgetError}
   */
  getAcceleration(): readonly [number, number, number];
  /**
   * The minimum value the `AccelerationChange` event will report.
   * @returns The minimum acceleration value
   * @throws {@link PhidgetError}
   */
  getMinAcceleration(): readonly [number, number, number];
  /**
   * The maximum value the `AccelerationChange` event will report.
   * @returns The maximum acceleration values
   * @throws {@link PhidgetError}
   */
  getMaxAcceleration(): readonly [number, number, number];
  /**
   * The channel will not issue a `AccelerationChange` event until the acceleration value has changed by the amount specified by the `accelerationChangeTrigger`.
   *
   * *   Setting the `accelerationChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getAccelerationChangeTrigger(): number;
  /**
   * The channel will not issue a `AccelerationChange` event until the acceleration value has changed by the amount specified by the `accelerationChangeTrigger`.
   *
   * *   Setting the `accelerationChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param accelerationChangeTrigger - The change trigger value
   */
  setAccelerationChangeTrigger(
    accelerationChangeTrigger: number
  ): Promise<void>;
  /**
   * The minimum value that `accelerationChangeTrigger` can be set to.
   * @returns The minimum change trigger value
   * @throws {@link PhidgetError}
   */
  getMinAccelerationChangeTrigger(): number;
  /**
   * The maximum value that `accelerationChangeTrigger` can be set to.
   * @returns The maximum change trigger value
   * @throws {@link PhidgetError}
   */
  getMaxAccelerationChangeTrigger(): number;
  /**
   * The number of axes the channel can measure acceleration on.
   *
   * *   See your device's User Guide for more information about the number of axes and their orientation.
   * @returns The number of axes
   * @throws {@link PhidgetError}
   */
  getAxisCount(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `AccelerationChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `AccelerationChange` events can also be affected by the `accelerationChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `AccelerationChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `AccelerationChange` events can also be affected by the `accelerationChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The minimum data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @returns Whether self-heating temperature stabilization is enabled
   * @throws {@link PhidgetError}
   */
  getHeatingEnabled(): boolean;
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   * @param heatingEnabled - Whether self-heating temperature stabilization is enabled
   */
  setHeatingEnabled(heatingEnabled: boolean): Promise<void>;

  /**
   * The most recent timestamp value that the channel has reported. This is an extremely accurate time measurement streamed from the device.
   *
   * *   If your application requires a time measurement, you should use this value over a local software timestamp.
   * @returns The timestamp value
   * @throws {@link PhidgetError}
   */
  getTimestamp(): number;
}

/** @public */
export declare class BLDCMotor extends BLDCMotorBase {
  setRescaleFactor(rescaleFactor: number): void;
  getPosition(): number;
  getMinPosition(): number;
  getMaxPosition(): number;
  addPositionOffset(positionOffset: number): void;
  setStallVelocity(stallVelocity: number): Promise<void>;
  getStallVelocity(): number;
  getMinStallVelocity(): number;
  getMaxStallVelocity(): number;
}

declare abstract class BLDCMotorBase extends PhidgetChannel {
  /**
   * **BrakingStrengthChange** event
   *  * `brakingStrength` - The braking strength value
   * ---
   * The most recent braking strength value will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   Regardless of the `dataInterval`, this event will occur only when the braking strength value has changed from the previous value reported.
   * *   Braking mode is enabled by setting the `velocity` to `minVelocity`
   */
  onBrakingStrengthChange: ((brakingStrength: number) => void) | null;

  /**
   * **PositionChange** event
   *  * `position` - The position value
   * ---
   * The most recent position value will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   Regardless of the `dataInterval`, this event will occur only when the position value has changed from the previous value reported.
   * *   Position values are calculated using Hall Effect sensors mounted on the motor, therefore, the resolution of position depends on the motor you are using.
   * *   Units for `position` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees. For more information on how to apply the `rescaleFactor` to your application, see your controller's User Guide.
   */
  onPositionChange: ((position: number) => void) | null;

  /**
   * **VelocityUpdate** event
   *  * `velocity` - The velocity value
   * ---
   * The most recent velocity value will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   This event will **always** occur when the `dataInterval` elapses. You can depend on this event for constant timing when implementing control loops in code. This is the last event to fire, giving you up-to-date access to all properties.
   */
  onVelocityUpdate: ((velocity: number) => void) | null;

  /**
   * The BLDC Motor class controls the power applied to attached brushless DC motors to affect its speed and direction. It can also contain various other control and monitoring functions that aid in the control of brushless DC motors.
   * @public
   */
  constructor();

  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   The acceleration is bounded by `minAcceleration` and `maxAcceleration`
   * @throws {@link PhidgetError}
   */
  get acceleration(): number;
  /**
   * The minimum value that `acceleration` can be set to.
   * @throws {@link PhidgetError}
   */
  get minAcceleration(): number;
  /**
   * The maximum value that `acceleration` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxAcceleration(): number;
  /**
   * The most recent braking strength value that the controller has reported.
   * @throws {@link PhidgetError}
   */
  get brakingStrength(): number;
  /**
   * The minimum value that `targetBrakingStrength` can be set to.
   * @throws {@link PhidgetError}
   */
  get minBrakingStrength(): number;
  /**
   * The maximum value that `targetBrakingStrength` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxBrakingStrength(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `VelocityUpdate` / `PositionChange` / `BrakingStrengthChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get minFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get maxFailsafeTime(): number;
  /**
   * The most recent position value that the controller has reported.
   *
   * *   Position values are calculated using Hall Effect sensors mounted on the motor, therefore, the resolution of position depends on the motor you are using.
   * *   Units for `position` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees. For more information on how to apply the `rescaleFactor` to your application, see your controller's User Guide.
   * @throws {@link PhidgetError}
   */
  get position(): number;
  /**
   * The lower bound of `position`.
   * @throws {@link PhidgetError}
   */
  get minPosition(): number;
  /**
   * The upper bound of `position`.
   * @throws {@link PhidgetError}
   */
  get maxPosition(): number;
  /**
   * Change the units of your parameters so that your application is more intuitive.
   *
   * *   Units for `position` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees. For more information on how to apply the `rescaleFactor` to your application, see your controller's User Guide.
   * @throws {@link PhidgetError}
   */
  get rescaleFactor(): number;
  set rescaleFactor(rescaleFactor: number);
  /**
   * Before reading this description, it is important to note the difference between the units of `stallVelocity` and `velocity`.
   *
   * *   `velocity` is a number between -1 and 1 with units of 'duty cycle'. It simply represents the average voltage across the motor.
   * *   `stallVelocity` represents a real velocity (e.g. m/s, RPM, etc.) and the units are determined by the `rescaleFactor`. With a `rescaleFactor` of 1, the default units would be in commutations per second.
   *
   * If the load on your motor is large, your motor may begin rotating more slowly, or even fully stall. Depending on the voltage across your motor, this may result in a large amount of current through both the controller and the motor. In order to prevent damage in these situations, you can use the `stallVelocity` property.
   *
   * The `stallVelocity` should be set to the lowest velocity you would expect from your motor. The controller will then monitor the motor's velocity, as well as the `velocity`, and prevent a 'dangerous stall' from occuring. If the controller detects a dangerous stall, it will immediately reduce the `velocity` (i.e. average voltage) to 0 and an error will be reported to your program.
   *
   * *   A 'dangerous stall' will occur faster when the `velocity` is higher (i.e. when the average voltage across the motor is higher)
   * *   A 'dangerous stall' will occur faster as (`stallVelocity` - motor velocity) becomes larger .
   *
   * Setting `stallVelocity` to 0 will turn off stall protection functionality.
   * @throws {@link PhidgetError}
   */
  get stallVelocity(): number;
  /**
   * The lower bound of `stallVelocity`.
   * @throws {@link PhidgetError}
   */
  get minStallVelocity(): number;
  /**
   * The upper bound of `stallVelocity`.
   * @throws {@link PhidgetError}
   */
  get maxStallVelocity(): number;
  /**
   * When a motor is not being actively driven forward or reverse, you can choose if the motor will be allowed to freely turn, or will resist being turned.
   *
   * *   A low `targetBrakingStrength` value corresponds to free wheeling, this will have the following effects:
   *     *   The motor will continue to rotate after the controller is no longer driving the motor (i.e. `velocity` is 0), due to inertia.
   *     *   The motor shaft will provide little resistance to being turned when it is stopped.
   * *   A higher `targetBrakingStrength` value will resist being turned, this will have the following effects:
   *     *   The motor will more stop more quickly if it is in motion and braking has been requested. It will fight against the rotation of the shaft.
   * *   Braking mode is enabled by setting the `velocity` to `minVelocity`
   * @throws {@link PhidgetError}
   */
  get targetBrakingStrength(): number;
  /**
   * The average voltage across the motor is based on the `targetVelocity` value.
   *
   * *   At a constant load, increasing the target velocity will increase the speed of the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * *   Setting `targetVelocity` to `minVelocity` will stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   The units of `targetVelocity` and `acceleration` refer to 'duty cycle'. This is because the controller must rapidly switch the power on/off (i.e. change the duty cycle) in order to manipulate the voltage across the motor.
   * @throws {@link PhidgetError}
   */
  get targetVelocity(): number;
  /**
   * The most recent velocity value that the controller has reported.
   * @throws {@link PhidgetError}
   */
  get velocity(): number;
  /**
   * The minimum value that `targetVelocity` can be set to.
   *
   * *   Set the `targetVelocity` to `minVelocity` to stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @throws {@link PhidgetError}
   */
  get minVelocity(): number;
  /**
   * The maximum value that `targetVelocity` can be set to.
   *
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @throws {@link PhidgetError}
   */
  get maxVelocity(): number;
  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   The acceleration is bounded by `minAcceleration` and `maxAcceleration`
   * @returns The acceleration value
   * @throws {@link PhidgetError}
   */
  getAcceleration(): number;
  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   The acceleration is bounded by `minAcceleration` and `maxAcceleration`
   * @throws {@link PhidgetError}
   * @param acceleration - The acceleration value
   */
  setAcceleration(acceleration: number): Promise<void>;
  /**
   * The minimum value that `acceleration` can be set to.
   * @returns The acceleration value.
   * @throws {@link PhidgetError}
   */
  getMinAcceleration(): number;
  /**
   * The maximum value that `acceleration` can be set to.
   * @returns The acceleration value.
   * @throws {@link PhidgetError}
   */
  getMaxAcceleration(): number;
  /**
   * The most recent braking strength value that the controller has reported.
   * @returns The braking strength value
   * @throws {@link PhidgetError}
   */
  getBrakingStrength(): number;
  /**
   * The minimum value that `targetBrakingStrength` can be set to.
   * @returns The braking value
   * @throws {@link PhidgetError}
   */
  getMinBrakingStrength(): number;
  /**
   * The maximum value that `targetBrakingStrength` can be set to.
   * @returns The braking value
   * @throws {@link PhidgetError}
   */
  getMaxBrakingStrength(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `VelocityUpdate` / `PositionChange` / `BrakingStrengthChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `VelocityUpdate` / `PositionChange` / `BrakingStrengthChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For BLDC Motor channels, this will disengage the motor. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */
  enableFailsafe(failsafeTime: number): Promise<void>;
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMinFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMaxFailsafeTime(): number;
  /**
   * The most recent position value that the controller has reported.
   *
   * *   Position values are calculated using Hall Effect sensors mounted on the motor, therefore, the resolution of position depends on the motor you are using.
   * *   Units for `position` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees. For more information on how to apply the `rescaleFactor` to your application, see your controller's User Guide.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  abstract getPosition(): number;
  /**
   * The lower bound of `position`.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  abstract getMinPosition(): number;
  /**
   * The upper bound of `position`.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  abstract getMaxPosition(): number;
  /**
   * Adds an offset (positive or negative) to the current position.
   *
   * *   This can be especially useful for zeroing position.
   * @throws {@link PhidgetError}
   * @param positionOffset - Amount to offset the position by
   */
  abstract addPositionOffset(positionOffset: number): void;
  /**
   * Change the units of your parameters so that your application is more intuitive.
   *
   * *   Units for `position` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees. For more information on how to apply the `rescaleFactor` to your application, see your controller's User Guide.
   * @returns The rescale factor value
   * @throws {@link PhidgetError}
   */
  getRescaleFactor(): number;
  /**
   * Change the units of your parameters so that your application is more intuitive.
   *
   * *   Units for `position` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees. For more information on how to apply the `rescaleFactor` to your application, see your controller's User Guide.
   * @throws {@link PhidgetError}
   * @param rescaleFactor - The rescale factor value
   */
  abstract setRescaleFactor(rescaleFactor: number): void;
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */
  resetFailsafe(): Promise<void>;
  /**
   * Before reading this description, it is important to note the difference between the units of `stallVelocity` and `velocity`.
   *
   * *   `velocity` is a number between -1 and 1 with units of 'duty cycle'. It simply represents the average voltage across the motor.
   * *   `stallVelocity` represents a real velocity (e.g. m/s, RPM, etc.) and the units are determined by the `rescaleFactor`. With a `rescaleFactor` of 1, the default units would be in commutations per second.
   *
   * If the load on your motor is large, your motor may begin rotating more slowly, or even fully stall. Depending on the voltage across your motor, this may result in a large amount of current through both the controller and the motor. In order to prevent damage in these situations, you can use the `stallVelocity` property.
   *
   * The `stallVelocity` should be set to the lowest velocity you would expect from your motor. The controller will then monitor the motor's velocity, as well as the `velocity`, and prevent a 'dangerous stall' from occuring. If the controller detects a dangerous stall, it will immediately reduce the `velocity` (i.e. average voltage) to 0 and an error will be reported to your program.
   *
   * *   A 'dangerous stall' will occur faster when the `velocity` is higher (i.e. when the average voltage across the motor is higher)
   * *   A 'dangerous stall' will occur faster as (`stallVelocity` - motor velocity) becomes larger .
   *
   * Setting `stallVelocity` to 0 will turn off stall protection functionality.
   * @returns The stall velocity value.
   * @throws {@link PhidgetError}
   */
  abstract getStallVelocity(): number;
  /**
   * Before reading this description, it is important to note the difference between the units of `stallVelocity` and `velocity`.
   *
   * *   `velocity` is a number between -1 and 1 with units of 'duty cycle'. It simply represents the average voltage across the motor.
   * *   `stallVelocity` represents a real velocity (e.g. m/s, RPM, etc.) and the units are determined by the `rescaleFactor`. With a `rescaleFactor` of 1, the default units would be in commutations per second.
   *
   * If the load on your motor is large, your motor may begin rotating more slowly, or even fully stall. Depending on the voltage across your motor, this may result in a large amount of current through both the controller and the motor. In order to prevent damage in these situations, you can use the `stallVelocity` property.
   *
   * The `stallVelocity` should be set to the lowest velocity you would expect from your motor. The controller will then monitor the motor's velocity, as well as the `velocity`, and prevent a 'dangerous stall' from occuring. If the controller detects a dangerous stall, it will immediately reduce the `velocity` (i.e. average voltage) to 0 and an error will be reported to your program.
   *
   * *   A 'dangerous stall' will occur faster when the `velocity` is higher (i.e. when the average voltage across the motor is higher)
   * *   A 'dangerous stall' will occur faster as (`stallVelocity` - motor velocity) becomes larger .
   *
   * Setting `stallVelocity` to 0 will turn off stall protection functionality.
   * @throws {@link PhidgetError}
   * @param stallVelocity - The stall velocity value.
   */
  abstract setStallVelocity(stallVelocity: number): Promise<void>;
  /**
   * The lower bound of `stallVelocity`.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  abstract getMinStallVelocity(): number;
  /**
   * The upper bound of `stallVelocity`.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  abstract getMaxStallVelocity(): number;
  /**
   * When a motor is not being actively driven forward or reverse, you can choose if the motor will be allowed to freely turn, or will resist being turned.
   *
   * *   A low `targetBrakingStrength` value corresponds to free wheeling, this will have the following effects:
   *     *   The motor will continue to rotate after the controller is no longer driving the motor (i.e. `velocity` is 0), due to inertia.
   *     *   The motor shaft will provide little resistance to being turned when it is stopped.
   * *   A higher `targetBrakingStrength` value will resist being turned, this will have the following effects:
   *     *   The motor will more stop more quickly if it is in motion and braking has been requested. It will fight against the rotation of the shaft.
   * *   Braking mode is enabled by setting the `velocity` to `minVelocity`
   * @returns The braking value
   * @throws {@link PhidgetError}
   */
  getTargetBrakingStrength(): number;
  /**
   * When a motor is not being actively driven forward or reverse, you can choose if the motor will be allowed to freely turn, or will resist being turned.
   *
   * *   A low `targetBrakingStrength` value corresponds to free wheeling, this will have the following effects:
   *     *   The motor will continue to rotate after the controller is no longer driving the motor (i.e. `velocity` is 0), due to inertia.
   *     *   The motor shaft will provide little resistance to being turned when it is stopped.
   * *   A higher `targetBrakingStrength` value will resist being turned, this will have the following effects:
   *     *   The motor will more stop more quickly if it is in motion and braking has been requested. It will fight against the rotation of the shaft.
   * *   Braking mode is enabled by setting the `velocity` to `minVelocity`
   * @throws {@link PhidgetError}
   * @param targetBrakingStrength - The braking value
   */
  setTargetBrakingStrength(targetBrakingStrength: number): Promise<void>;
  /**
   * The average voltage across the motor is based on the `targetVelocity` value.
   *
   * *   At a constant load, increasing the target velocity will increase the speed of the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * *   Setting `targetVelocity` to `minVelocity` will stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   The units of `targetVelocity` and `acceleration` refer to 'duty cycle'. This is because the controller must rapidly switch the power on/off (i.e. change the duty cycle) in order to manipulate the voltage across the motor.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  getTargetVelocity(): number;
  /**
   * The average voltage across the motor is based on the `targetVelocity` value.
   *
   * *   At a constant load, increasing the target velocity will increase the speed of the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * *   Setting `targetVelocity` to `minVelocity` will stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   The units of `targetVelocity` and `acceleration` refer to 'duty cycle'. This is because the controller must rapidly switch the power on/off (i.e. change the duty cycle) in order to manipulate the voltage across the motor.
   * @throws {@link PhidgetError}
   * @param targetVelocity - The velocity value
   */
  setTargetVelocity(targetVelocity: number): Promise<void>;
  /**
   * The most recent velocity value that the controller has reported.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  getVelocity(): number;
  /**
   * The minimum value that `targetVelocity` can be set to.
   *
   * *   Set the `targetVelocity` to `minVelocity` to stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  getMinVelocity(): number;
  /**
   * The maximum value that `targetVelocity` can be set to.
   *
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  getMaxVelocity(): number;
}

/**
 * Bridge gain amplification setting. Higher gain results in better resolution, but narrower voltage range.
 * @public
 */
export declare enum BridgeGain {
  /**
   * 1x Amplificaion
   * @public
   */
  GAIN_1X = 1,
  /**
   * 2x Amplification
   * @public
   */
  GAIN_2X = 2,
  /**
   * 4x Amplification
   * @public
   */
  GAIN_4X = 3,
  /**
   * 8x Amplification
   * @public
   */
  GAIN_8X = 4,
  /**
   * 16x Amplification
   * @public
   */
  GAIN_16X = 5,
  /**
   * 32x Amplification
   * @public
   */
  GAIN_32X = 6,
  /**
   * 64x Amplification
   * @public
   */
  GAIN_64X = 7,
  /**
   * 128x Amplification
   * @public
   */
  GAIN_128X = 8,
}

/** @public */
export declare class CapacitiveTouch extends CapacitiveTouchBase {}

declare abstract class CapacitiveTouchBase extends PhidgetChannel {
  /**
   * **Touch** event
   *  * `touchValue` - Value of the touch input axis.
   * ---
   * The most recent touch value the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `touchValueChangeTrigger` has been set to a non-zero value, the `Touch` event will not occur until the touch value has changed by at least the `touchValueChangeTrigger` value.
   */
  onTouch: ((touchValue: number) => void) | null;

  /**
   * **TouchEnd** event
   * ---
   * The channel will report a `TouchEnd` event to signify that it is no longer detecting a touch.
   */
  onTouchEnd: (() => void) | null;

  /**
   * The Capacitive Touch class gathers input data from capacitive buttons and sliders on Phidget boards.
   * @public
   */
  constructor();

  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `Touch` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `Touch` events can also be affected by the `touchValueChangeTrigger`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * Determines the sensitivity of all capacitive regions on the device.
   *
   * *   Higher values result in greater touch sensitivity.
   * *   The sensitivity value is bounded by `minSensitivity` and `maxSensitivity`.
   * @throws {@link PhidgetError}
   */
  get sensitivity(): number;
  /**
   * The minimum value that `sensitivity` can be set to.
   * @throws {@link PhidgetError}
   */
  get minSensitivity(): number;
  /**
   * The maximum value that `sensitivity` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxSensitivity(): number;
  /**
   * The most recent touch state that the channel has reported.
   *
   * *   This will be 0 or 1
   *
   * *   0 is not touched
   * *   1 is touched
   * @throws {@link PhidgetError}
   */
  get isTouched(): boolean;
  /**
   * The most recent touch value that the channel has reported.
   *
   * *   This will be 0 or 1 for button-type inputs, or a ratio between 0-1 for axis-type inputs.
   * *   This value is bounded by `minTouchValue` and `maxTouchValue`
   * *   The value is not reset when the touch ends
   * @throws {@link PhidgetError}
   */
  get touchValue(): number;
  /**
   * The minimum value the `Touch` event will report.
   * @throws {@link PhidgetError}
   */
  get minTouchValue(): number;
  /**
   * The maximum value the `Touch` event will report.
   * @throws {@link PhidgetError}
   */
  get maxTouchValue(): number;
  /**
   * The channel will not issue a `Touch` event until the touch value has changed by the amount specified by the `touchValueChangeTrigger`.
   *
   * *   Setting the `touchValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */
  get touchValueChangeTrigger(): number;
  /**
   * The minimum value that `touchValueChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get minTouchValueChangeTrigger(): number;
  /**
   * The maximum value that `touchValueChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxTouchValueChangeTrigger(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `Touch` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `Touch` events can also be affected by the `touchValueChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `Touch` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `Touch` events can also be affected by the `touchValueChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The minimum data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The maximum data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * The most recent touch state that the channel has reported.
   *
   * *   This will be 0 or 1
   *
   * *   0 is not touched
   * *   1 is touched
   * @returns The touched state
   * @throws {@link PhidgetError}
   */
  getIsTouched(): boolean;
  /**
   * Determines the sensitivity of all capacitive regions on the device.
   *
   * *   Higher values result in greater touch sensitivity.
   * *   The sensitivity value is bounded by `minSensitivity` and `maxSensitivity`.
   * @returns The sensitivity value
   * @throws {@link PhidgetError}
   */
  getSensitivity(): number;
  /**
   * Determines the sensitivity of all capacitive regions on the device.
   *
   * *   Higher values result in greater touch sensitivity.
   * *   The sensitivity value is bounded by `minSensitivity` and `maxSensitivity`.
   * @throws {@link PhidgetError}
   * @param sensitivity - The sensitivity value
   */
  setSensitivity(sensitivity: number): Promise<void>;
  /**
   * The minimum value that `sensitivity` can be set to.
   * @returns The minimum sensitivity value
   * @throws {@link PhidgetError}
   */
  getMinSensitivity(): number;
  /**
   * The maximum value that `sensitivity` can be set to.
   * @returns The maximum sensitivity value
   * @throws {@link PhidgetError}
   */
  getMaxSensitivity(): number;
  /**
   * The most recent touch value that the channel has reported.
   *
   * *   This will be 0 or 1 for button-type inputs, or a ratio between 0-1 for axis-type inputs.
   * *   This value is bounded by `minTouchValue` and `maxTouchValue`
   * *   The value is not reset when the touch ends
   * @returns The touch input value
   * @throws {@link PhidgetError}
   */
  getTouchValue(): number;
  /**
   * The minimum value the `Touch` event will report.
   * @returns The minimum touch input value
   * @throws {@link PhidgetError}
   */
  getMinTouchValue(): number;
  /**
   * The maximum value the `Touch` event will report.
   * @returns The maximum touch input value
   * @throws {@link PhidgetError}
   */
  getMaxTouchValue(): number;
  /**
   * The channel will not issue a `Touch` event until the touch value has changed by the amount specified by the `touchValueChangeTrigger`.
   *
   * *   Setting the `touchValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getTouchValueChangeTrigger(): number;
  /**
   * The channel will not issue a `Touch` event until the touch value has changed by the amount specified by the `touchValueChangeTrigger`.
   *
   * *   Setting the `touchValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param touchValueChangeTrigger - The change trigger value
   */
  setTouchValueChangeTrigger(touchValueChangeTrigger: number): Promise<void>;
  /**
   * The minimum value that `touchValueChangeTrigger` can be set to.
   * @returns The minimum change trigger value
   * @throws {@link PhidgetError}
   */
  getMinTouchValueChangeTrigger(): number;
  /**
   * The maximum value that `touchValueChangeTrigger` can be set to.
   * @returns The maximum change trigger value
   * @throws {@link PhidgetError}
   */
  getMaxTouchValueChangeTrigger(): number;
}

/**
 * Phidget channel class
 * @public
 */
export declare enum ChannelClass {
  /**
   * Accelerometer channel
   * @public
   */
  ACCELEROMETER = 1,
  /**
   * BLDC motor channel
   * @public
   */
  BLDC_MOTOR = 35,
  /**
   * Capacitive Touch channel
   * @public
   */
  CAPACITIVE_TOUCH = 14,
  /**
   * Current input channel
   * @public
   */
  CURRENT_INPUT = 2,

  /**
   * DC motor channel
   * @public
   */
  DC_MOTOR = 4,
  /**
   * Dictionary
   * @public
   */
  DICTIONARY = 36,
  /**
   * Digital input channel
   * @public
   */
  DIGITAL_INPUT = 5,
  /**
   * Digital output channel
   * @public
   */
  DIGITAL_OUTPUT = 6,
  /**
   * Distance sensor channel
   * @public
   */
  DISTANCE_SENSOR = 7,
  /**
   * Encoder channel
   * @public
   */
  ENCODER = 8,

  /**
   * Frequency counter channel
   * @public
   */
  FREQUENCY_COUNTER = 9,

  /**
   * GPS channel
   * @public
   */
  GPS = 10,
  /**
   * Gyroscope channel
   * @public
   */
  GYROSCOPE = 12,
  /**
   * VINT Hub channel
   * @public
   */
  HUB = 13,
  /**
   * Humidity sensor channel
   * @public
   */
  HUMIDITY_SENSOR = 15,
  /**
   * IR channel
   * @public
   */
  IR = 16,
  /**
   * LCD channel
   * @public
   */
  LCD = 11,
  /**
   * Light sensor channel
   * @public
   */
  LIGHT_SENSOR = 17,
  /**
   * Magnetometer channel
   * @public
   */
  MAGNETOMETER = 18,

  /**
   * Motor position control channel.
   * @public
   */
  MOTOR_POSITION_CONTROLLER = 34,
  /**
   * pH sensor channel
   * @public
   */
  PH_SENSOR = 37,
  /**
   * Power guard channel
   * @public
   */
  POWER_GUARD = 20,
  /**
   * Pressure sensor channel
   * @public
   */
  PRESSURE_SENSOR = 21,
  /**
   * RC Servo channel
   * @public
   */
  RC_SERVO = 22,
  /**
   * Resistance input channel
   * @public
   */
  RESISTANCE_INPUT = 23,
  /**
   * RFID channel
   * @public
   */
  RFID = 24,
  /**
   * Sound sensor channel
   * @public
   */
  SOUND_SENSOR = 25,
  /**
   * Spatial channel
   * @public
   */
  SPATIAL = 26,
  /**
   * Stepper channel
   * @public
   */
  STEPPER = 27,
  /**
   * Temperature sensor channel
   * @public
   */
  TEMPERATURE_SENSOR = 28,
  /**
   * Voltage input channel
   * @public
   */
  VOLTAGE_INPUT = 29,
  /**
   * Voltage output channel
   * @public
   */
  VOLTAGE_OUTPUT = 30,
  /**
   * Voltage ratio input channel
   * @public
   */
  VOLTAGE_RATIO_INPUT = 31,
}

/**
 * Phidget channel sub class
 * @public
 */
export declare enum ChannelSubclass {
  /**
   * No subclass
   * @public
   */
  NONE = 1,
  /**
   * Digital output duty cycle
   * @public
   */
  DIGITAL_OUTPUT_DUTY_CYCLE = 16,
  /**
   * Digital output frequency
   * @public
   */
  DIGITAL_OUTPUT_FREQUENCY = 18,
  /**
   * Digital output LED driver
   * @public
   */
  DIGITAL_OUTPUT_LEDDRIVER = 17,
  /**
   * Encoder IO mode settable
   * @public
   */
  ENCODER_MODE_SETTABLE = 96,
  /**
   * Graphic LCD
   * @public
   */
  LCD_GRAPHIC = 80,
  /**
   * Text LCD
   * @public
   */
  LCD_TEXT = 81,
  /**
   * Spatial AHRS/IMU
   * @public
   */
  SPATIAL_AHRS = 112,
  /**
   * Temperature sensor RTD
   * @public
   */
  TEMPERATURE_SENSOR_RTD = 32,
  /**
   * Temperature sensor thermocouple
   * @public
   */
  TEMPERATURE_SENSOR_THERMOCOUPLE = 33,
  /**
   * Voltage sensor port
   * @public
   */
  VOLTAGE_INPUT_SENSOR_PORT = 48,
  /**
   * Voltage ratio bridge input
   * @public
   */
  VOLTAGE_RATIO_INPUT_BRIDGE = 65,
  /**
   * Voltage ratio sensor port
   * @public
   */
  VOLTAGE_RATIO_INPUT_SENSOR_PORT = 64,
}

declare type ConnectionErrorHandler = (
  this: PhidgetConnection,
  code: ErrorCode,
  msg: string
) => void;

declare type ConnectionHandler = (conn: PhidgetConnection) => void;

declare interface ConnectionOptions {
  name?: string;
  onError?: ConnectionErrorHandler;
}

/** @public */
export declare class CurrentInput extends CurrentInputBase {}

declare abstract class CurrentInputBase extends PhidgetChannel {
  /**
   * **CurrentChange** event
   *  * `current` - The current value
   * ---
   * The most recent current value the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `currentChangeTrigger` has been set to a non-zero value, the `CurrentChange` event will not occur until the current value has changed by at least the `currentChangeTrigger` value.
   */
  onCurrentChange: ((current: number) => void) | null;

  /**
   * The Current Input class is used to measure current flowing through the Phidget from outside sources.
   *
   * This class may be used on a simple current sensor, or sometimes on a more complex Phidget that measures the amount of current flowing through an attached device, such as a motor controller, for diagnostic or control purposes.
   * @public
   */
  constructor();

  /**
   * The most recent current value that the channel has reported.
   *
   * *   This value will always be between `minCurrent` and `maxCurrent`.
   * @throws {@link PhidgetError}
   */
  get current(): number;
  /**
   * The minimum value the `CurrentChange` event will report.
   * @throws {@link PhidgetError}
   */
  get minCurrent(): number;
  /**
   * The maximum value the `CurrentChange` event will report.
   * @throws {@link PhidgetError}
   */
  get maxCurrent(): number;
  /**
   * The channel will not issue a `CurrentChange` event until the current value has changed by the amount specified by the `currentChangeTrigger`.
   *
   * *   Setting the `currentChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */
  get currentChangeTrigger(): number;
  /**
   * The minimum value that `currentChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get minCurrentChangeTrigger(): number;
  /**
   * The maximum value that `currentChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxCurrentChangeTrigger(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `CurrentChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `CurrentChange` events can also be affected by the `currentChangeTrigger`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   */
  get powerSupply(): Enum.PowerSupply;
  /**
   * The most recent current value that the channel has reported.
   *
   * *   This value will always be between `minCurrent` and `maxCurrent`.
   * @returns The current value
   * @throws {@link PhidgetError}
   */
  getCurrent(): number;
  /**
   * The minimum value the `CurrentChange` event will report.
   * @returns The current value
   * @throws {@link PhidgetError}
   */
  getMinCurrent(): number;
  /**
   * The maximum value the `CurrentChange` event will report.
   * @returns The current value
   * @throws {@link PhidgetError}
   */
  getMaxCurrent(): number;
  /**
   * The channel will not issue a `CurrentChange` event until the current value has changed by the amount specified by the `currentChangeTrigger`.
   *
   * *   Setting the `currentChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getCurrentChangeTrigger(): number;
  /**
   * The channel will not issue a `CurrentChange` event until the current value has changed by the amount specified by the `currentChangeTrigger`.
   *
   * *   Setting the `currentChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param currentChangeTrigger - The change trigger value
   */
  setCurrentChangeTrigger(currentChangeTrigger: number): Promise<void>;
  /**
   * The minimum value that `currentChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMinCurrentChangeTrigger(): number;
  /**
   * The maximum value that `currentChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMaxCurrentChangeTrigger(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `CurrentChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `CurrentChange` events can also be affected by the `currentChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `CurrentChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `CurrentChange` events can also be affected by the `currentChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @returns The power supply value
   * @throws {@link PhidgetError}
   */
  getPowerSupply(): Enum.PowerSupply;
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   * @param powerSupply - The power supply value
   */
  setPowerSupply(powerSupply: Enum.PowerSupply): Promise<void>;
}

/**
 * The SPI Mode
 * @public
 */
export declare enum DataAdapterEndianness {
  /**
   * MSB First
   * @public
   */
  MSB_FIRST = 1,
  /**
   * LSB First
   * @public
   */
  LSB_FIRST = 2,
}

/**
 * The mothod of handshaking used for communication
 * @public
 */
export declare enum DataAdapterHandshakeMode {
  /**
   * RTS is never set, and CTS is ignored.
   * @public
   */
  NONE = 1,
  /**
   * RTS Pin requests to transmit data. CTS input confirms we can send data.
   * @public
   */
  REQUEST_TO_SEND = 2,
  /**
   * RTS signals this device can receive data. CTS confirms we can send data.
   * @public
   */
  READY_TO_RECEIVE = 3,
}

/**
 * The IO Voltage
 * @public
 */
export declare enum DataAdapterIOVoltage {
  /**
   * Voltage supplied by external device
   * @public
   */
  EXTERNAL = 1,
  /**
   * 1.8V
   * @public
   */
  VOLTS_1_8 = 2,
  /**
   * 2.5V
   * @public
   */
  VOLTS_2_5 = 3,
  /**
   * 3.3V
   * @public
   */
  VOLTS_3_3 = 4,
  /**
   * 5.0V
   * @public
   */
  VOLTS_5 = 5,
}

/**
 * The parity setting of the data adapter
 * @public
 */
export declare enum DataAdapterParity {
  /**
   * No Parity Bit
   * @public
   */
  NONE = 1,
  /**
   * Even Parity
   * @public
   */
  EVEN = 2,
  /**
   * Odd Parity
   * @public
   */
  ODD = 3,
}

/**
 * The communication protocol
 * @public
 */
export declare enum DataAdapterProtocol {
  /**
   * Basic half-duplex RS485. Always receiving until you send data.
   * @public
   */
  RS485 = 1,
  /**
   * Uses full-duplex RS422 communication.
   * @public
   */
  RS422 = 2,
  /**
   * Allows communication with DMX512-compatible devices, such as stage lighting
   * @public
   */
  DMX512 = 3,
  /**
   * Allows communication with MODBUS RTU compatible devices
   * @public
   */
  MODBUS_RTU = 4,
  /**
   * Allows communication with SPI compatible devices
   * @public
   */
  SPI = 5,
  /**
   * Allows communication with I2C compatible devices
   * @public
   */
  I2C = 6,
  /**
   * Allows communication with UART compatible devices
   * @public
   */
  UART = 7,
  /**
   * Allows communication with RS232 compatible devices
   * @public
   */
  RS232 = 8,
}

/**
 * The SPI Mode
 * @public
 */
export declare enum DataAdapterSPIMode {
  /**
   * CPOL = 0 CPHA = 0
   * @public
   */
  MODE_0 = 1,
  /**
   * CPOL = 0 CPHA = 1
   * @public
   */
  MODE_1 = 2,
  /**
   * CPOL = 1 CPHA = 0
   * @public
   */
  MODE_2 = 3,
  /**
   * CPOL = 1 CPHA = 1
   * @public
   */
  MODE_3 = 4,
}

/**
 * The number of stop bits used for communication
 * @public
 */
export declare enum DataAdapterStopBits {
  /**
   * One Stop Bit
   * @public
   */
  ONE = 1,
  /**
   * Two Stop Bits
   * @public
   */
  TWO = 2,
}

/** @public */
export declare class DCMotor extends DCMotorBase {}

declare abstract class DCMotorBase extends PhidgetChannel {
  /**
     * **BrakingStrengthChange** event
     *  * `brakingStrength` - The most recent braking strength value will be reported in this event.

     *   This event will occur only when the value of braking strength has changed
     *   See `targetBrakingStrength` for details about what this number represents.
     * ---
     * Occurs when the motor braking strength changes.
     */
  onBrakingStrengthChange: ((brakingStrength: number) => void) | null;

  /**
   * **VelocityUpdate** event
   *  * `velocity` - The most recent velocity value will be reported in this event.
   * ---
   * Occurs at a rate defined by the `dataInterval`.
   */
  onVelocityUpdate: ((velocity: number) => void) | null;

  /**
   * **BackEMFChange** event
   *  * `backEMF` - The back EMF voltage from the motor
   * ---
   * The most recent back emf value will be reported in this event.
   */
  onBackEMFChange: ((backEMF: number) => void) | null;

  /**
   * The DC Motor class controls the power applied to attached DC motors to affect its speed and direction. It can also contain various other control and monitoring functions that aid in the control of DC motors.
   * @public
   */
  constructor();

  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   The acceleration is bounded by `minAcceleration` and `maxAcceleration`
   * @throws {@link PhidgetError}
   */
  get acceleration(): number;
  /**
   * The minimum value that `acceleration` can be set to.
   * @throws {@link PhidgetError}
   */
  get minAcceleration(): number;
  /**
   * The maximum value that `acceleration` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxAcceleration(): number;
  /**
   * The most recent `backEMF` value that the controller has reported.
   * @throws {@link PhidgetError}
   */
  get backEMF(): number;
  /**
   * When `backEMFSensingState` is enabled, the controller will measure and report the `backEMF`.
   *
   * *   The motor will coast (freewheel) 5% of the time while the back EMF is being measured (800μs every 16ms). Therefore, at a `velocity` of 100%, the motor will only be driven for 95% of the time.
   * @throws {@link PhidgetError}
   */
  get backEMFSensingState(): boolean;
  /**
   * The most recent braking strength value that the controller has reported. See `targetBrakingStrength` for details.
   * @throws {@link PhidgetError}
   */
  get brakingStrength(): number;
  /**
   * The minimum value that `targetBrakingStrength` can be set to. See `targetBrakingStrength` for details.
   * @throws {@link PhidgetError}
   */
  get minBrakingStrength(): number;
  /**
   * The maximum value that `targetBrakingStrength` can be set to. See `targetBrakingStrength` for details.
   * @throws {@link PhidgetError}
   */
  get maxBrakingStrength(): number;
  /**
   * The controller will limit the current through the motor to the `currentLimit` value.
   * @throws {@link PhidgetError}
   */
  get currentLimit(): number;
  /**
   * The minimum value that `currentLimit` can be set to.
   * @throws {@link PhidgetError}
   */
  get minCurrentLimit(): number;
  /**
   * The maximum value that `currentLimit` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxCurrentLimit(): number;
  /**
   * Depending on power supply voltage and motor coil inductance, current through the motor can change relatively slowly or extremely rapidly. A physically larger DC Motor will typically have a lower inductance, requiring a higher current regulator gain. A higher power supply voltage will result in motor current changing more rapidly, requiring a higher current regulator gain. If the current regulator gain is too small, spikes in current will occur, causing large variations in torque, and possibly damaging the motor controller. If the current regulator gain is too high, the current will jitter, causing the motor to sound 'rough', especially when changing directions.
   *
   * As a rule of thumb, we recommend setting this value as follows:
   *
   * CurrentRegulatorGain = CurrentLimit \* (Voltage / 12)
   * @throws {@link PhidgetError}
   */
  get currentRegulatorGain(): number;
  /**
   * The minimum value that `currentRegulatorGain` can be set to.
   * @throws {@link PhidgetError}
   */
  get minCurrentRegulatorGain(): number;
  /**
   * The maximum value that `currentRegulatorGain` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxCurrentRegulatorGain(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `VelocityUpdate` / `BrakingStrengthChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   *
   * *   Note: `BrakingStrengthChange` events will only fire if a change in braking has occurred.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get minFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get maxFailsafeTime(): number;
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the controller will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @throws {@link PhidgetError}
   */
  get fanMode(): Enum.FanMode;
  /**
   * This setting allows you to choose how hard the motor will resist being turned when it is not being driven forward or reverse (`velocity` = 0). The `targetBrakingStrength` sets the relative amount of electrical braking to be applied to the DC motor, with `minBrakingStrength` corresponding to no braking (free-wheeling), and `maxBrakingStrength` indicating full braking.
   *
   * *   A low `targetBrakingStrength` value corresponds to free-wheeling. This means:
   *     *   The motor will continue to rotate after the controller is no longer driving the motor (`velocity` = 0), due to its momentum.
   *     *   The motor shaft will provide little resistance to being turned when it is stopped.
   * *   As `targetBrakingStrength` increases, this will engage electrical braking of the DC motor. This means:
   *     *   The motor will stop more quickly if it is in motion when braking is requested.
   *     *   The motor shaft will resist rotation by oustide forces.
   * *   Braking will be added gradually, according to the `acceleration` setting, once the motor controller's `velocity` reaches 0.0
   * *   Braking will be immediately stopped when a new (non-zero) `targetVelocity` is set, and the motor will accelerate to the requested velocity.
   * *   Braking mode is enabled by setting the `velocity` to 0.0
   * @throws {@link PhidgetError}
   */
  get targetBrakingStrength(): number;
  /**
   * The average voltage across the motor is based on the `targetVelocity` value.
   *
   * *   At a constant load, increasing the target velocity will increase the speed of the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * *   Setting `targetVelocity` to `minVelocity` will stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   The units of `targetVelocity` and `acceleration` refer to 'duty cycle'. This is because the controller controls velocity by rapidly switching the power on/off (i.e. changing the duty cycle) in order to manipulate the voltage across the motor.
   * @throws {@link PhidgetError}
   */
  get targetVelocity(): number;
  /**
   * The most recent velocity value that the controller has reported.
   * @throws {@link PhidgetError}
   */
  get velocity(): number;
  /**
   * The minimum value that `targetVelocity` can be set to.
   *
   * *   Set the `targetVelocity` to `minVelocity` to stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @throws {@link PhidgetError}
   */
  get minVelocity(): number;
  /**
   * The maximum value that `targetVelocity` can be set to.
   *
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @throws {@link PhidgetError}
   */
  get maxVelocity(): number;
  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   The acceleration is bounded by `minAcceleration` and `maxAcceleration`
   * @returns The acceleration value
   * @throws {@link PhidgetError}
   */
  getAcceleration(): number;
  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   The acceleration is bounded by `minAcceleration` and `maxAcceleration`
   * @throws {@link PhidgetError}
   * @param acceleration - The acceleration value
   */
  setAcceleration(acceleration: number): Promise<void>;
  /**
   * The minimum value that `acceleration` can be set to.
   * @returns The acceleration value.
   * @throws {@link PhidgetError}
   */
  getMinAcceleration(): number;
  /**
   * The maximum value that `acceleration` can be set to.
   * @returns The acceleration value.
   * @throws {@link PhidgetError}
   */
  getMaxAcceleration(): number;
  /**
   * The most recent `backEMF` value that the controller has reported.
   * @returns The back EMF value
   * @throws {@link PhidgetError}
   */
  getBackEMF(): number;
  /**
   * When `backEMFSensingState` is enabled, the controller will measure and report the `backEMF`.
   *
   * *   The motor will coast (freewheel) 5% of the time while the back EMF is being measured (800μs every 16ms). Therefore, at a `velocity` of 100%, the motor will only be driven for 95% of the time.
   * @returns The back EMF state
   * @throws {@link PhidgetError}
   */
  getBackEMFSensingState(): boolean;
  /**
   * When `backEMFSensingState` is enabled, the controller will measure and report the `backEMF`.
   *
   * *   The motor will coast (freewheel) 5% of the time while the back EMF is being measured (800μs every 16ms). Therefore, at a `velocity` of 100%, the motor will only be driven for 95% of the time.
   * @throws {@link PhidgetError}
   * @param backEMFSensingState - The back EMF state
   */
  setBackEMFSensingState(backEMFSensingState: boolean): Promise<void>;
  /**
   * The most recent braking strength value that the controller has reported. See `targetBrakingStrength` for details.
   * @returns The braking strength value
   * @throws {@link PhidgetError}
   */
  getBrakingStrength(): number;
  /**
   * The minimum value that `targetBrakingStrength` can be set to. See `targetBrakingStrength` for details.
   * @returns The braking strength value
   * @throws {@link PhidgetError}
   */
  getMinBrakingStrength(): number;
  /**
   * The maximum value that `targetBrakingStrength` can be set to. See `targetBrakingStrength` for details.
   * @returns The braking strength value
   * @throws {@link PhidgetError}
   */
  getMaxBrakingStrength(): number;
  /**
   * The controller will limit the current through the motor to the `currentLimit` value.
   * @returns The current value
   * @throws {@link PhidgetError}
   */
  getCurrentLimit(): number;
  /**
   * The controller will limit the current through the motor to the `currentLimit` value.
   * @throws {@link PhidgetError}
   * @param currentLimit - The current value
   */
  setCurrentLimit(currentLimit: number): Promise<void>;
  /**
   * The minimum value that `currentLimit` can be set to.
   * @returns The current value
   * @throws {@link PhidgetError}
   */
  getMinCurrentLimit(): number;
  /**
   * The maximum value that `currentLimit` can be set to.
   * @returns The current value
   * @throws {@link PhidgetError}
   */
  getMaxCurrentLimit(): number;
  /**
   * Depending on power supply voltage and motor coil inductance, current through the motor can change relatively slowly or extremely rapidly. A physically larger DC Motor will typically have a lower inductance, requiring a higher current regulator gain. A higher power supply voltage will result in motor current changing more rapidly, requiring a higher current regulator gain. If the current regulator gain is too small, spikes in current will occur, causing large variations in torque, and possibly damaging the motor controller. If the current regulator gain is too high, the current will jitter, causing the motor to sound 'rough', especially when changing directions.
   *
   * As a rule of thumb, we recommend setting this value as follows:
   *
   * CurrentRegulatorGain = CurrentLimit \* (Voltage / 12)
   * @returns The current regulator gain value
   * @throws {@link PhidgetError}
   */
  getCurrentRegulatorGain(): number;
  /**
   * Depending on power supply voltage and motor coil inductance, current through the motor can change relatively slowly or extremely rapidly. A physically larger DC Motor will typically have a lower inductance, requiring a higher current regulator gain. A higher power supply voltage will result in motor current changing more rapidly, requiring a higher current regulator gain. If the current regulator gain is too small, spikes in current will occur, causing large variations in torque, and possibly damaging the motor controller. If the current regulator gain is too high, the current will jitter, causing the motor to sound 'rough', especially when changing directions.
   *
   * As a rule of thumb, we recommend setting this value as follows:
   *
   * CurrentRegulatorGain = CurrentLimit \* (Voltage / 12)
   * @throws {@link PhidgetError}
   * @param currentRegulatorGain - The current regulator gain value
   */
  setCurrentRegulatorGain(currentRegulatorGain: number): Promise<void>;
  /**
   * The minimum value that `currentRegulatorGain` can be set to.
   * @returns The current regulator gain value
   * @throws {@link PhidgetError}
   */
  getMinCurrentRegulatorGain(): number;
  /**
   * The maximum value that `currentRegulatorGain` can be set to.
   * @returns The current regulator gain value
   * @throws {@link PhidgetError}
   */
  getMaxCurrentRegulatorGain(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `VelocityUpdate` / `BrakingStrengthChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   *
   * *   Note: `BrakingStrengthChange` events will only fire if a change in braking has occurred.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `VelocityUpdate` / `BrakingStrengthChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   *
   * *   Note: `BrakingStrengthChange` events will only fire if a change in braking has occurred.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For DC Motor channels, this will disengage the motor. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */
  enableFailsafe(failsafeTime: number): Promise<void>;
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMinFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMaxFailsafeTime(): number;
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the controller will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @returns The fan mode
   * @throws {@link PhidgetError}
   */
  getFanMode(): Enum.FanMode;
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the controller will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @throws {@link PhidgetError}
   * @param fanMode - The fan mode
   */
  setFanMode(fanMode: Enum.FanMode): Promise<void>;
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */
  resetFailsafe(): Promise<void>;
  /**
   * This setting allows you to choose how hard the motor will resist being turned when it is not being driven forward or reverse (`velocity` = 0). The `targetBrakingStrength` sets the relative amount of electrical braking to be applied to the DC motor, with `minBrakingStrength` corresponding to no braking (free-wheeling), and `maxBrakingStrength` indicating full braking.
   *
   * *   A low `targetBrakingStrength` value corresponds to free-wheeling. This means:
   *     *   The motor will continue to rotate after the controller is no longer driving the motor (`velocity` = 0), due to its momentum.
   *     *   The motor shaft will provide little resistance to being turned when it is stopped.
   * *   As `targetBrakingStrength` increases, this will engage electrical braking of the DC motor. This means:
   *     *   The motor will stop more quickly if it is in motion when braking is requested.
   *     *   The motor shaft will resist rotation by oustide forces.
   * *   Braking will be added gradually, according to the `acceleration` setting, once the motor controller's `velocity` reaches 0.0
   * *   Braking will be immediately stopped when a new (non-zero) `targetVelocity` is set, and the motor will accelerate to the requested velocity.
   * *   Braking mode is enabled by setting the `velocity` to 0.0
   * @returns The braking strength value
   * @throws {@link PhidgetError}
   */
  getTargetBrakingStrength(): number;
  /**
   * This setting allows you to choose how hard the motor will resist being turned when it is not being driven forward or reverse (`velocity` = 0). The `targetBrakingStrength` sets the relative amount of electrical braking to be applied to the DC motor, with `minBrakingStrength` corresponding to no braking (free-wheeling), and `maxBrakingStrength` indicating full braking.
   *
   * *   A low `targetBrakingStrength` value corresponds to free-wheeling. This means:
   *     *   The motor will continue to rotate after the controller is no longer driving the motor (`velocity` = 0), due to its momentum.
   *     *   The motor shaft will provide little resistance to being turned when it is stopped.
   * *   As `targetBrakingStrength` increases, this will engage electrical braking of the DC motor. This means:
   *     *   The motor will stop more quickly if it is in motion when braking is requested.
   *     *   The motor shaft will resist rotation by oustide forces.
   * *   Braking will be added gradually, according to the `acceleration` setting, once the motor controller's `velocity` reaches 0.0
   * *   Braking will be immediately stopped when a new (non-zero) `targetVelocity` is set, and the motor will accelerate to the requested velocity.
   * *   Braking mode is enabled by setting the `velocity` to 0.0
   * @throws {@link PhidgetError}
   * @param targetBrakingStrength - The braking strength value
   */
  setTargetBrakingStrength(targetBrakingStrength: number): Promise<void>;
  /**
   * The average voltage across the motor is based on the `targetVelocity` value.
   *
   * *   At a constant load, increasing the target velocity will increase the speed of the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * *   Setting `targetVelocity` to `minVelocity` will stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   The units of `targetVelocity` and `acceleration` refer to 'duty cycle'. This is because the controller controls velocity by rapidly switching the power on/off (i.e. changing the duty cycle) in order to manipulate the voltage across the motor.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  getTargetVelocity(): number;
  /**
   * The average voltage across the motor is based on the `targetVelocity` value.
   *
   * *   At a constant load, increasing the target velocity will increase the speed of the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * *   Setting `targetVelocity` to `minVelocity` will stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   The units of `targetVelocity` and `acceleration` refer to 'duty cycle'. This is because the controller controls velocity by rapidly switching the power on/off (i.e. changing the duty cycle) in order to manipulate the voltage across the motor.
   * @throws {@link PhidgetError}
   * @param targetVelocity - The velocity value
   */
  setTargetVelocity(targetVelocity: number): Promise<void>;
  /**
   * The most recent velocity value that the controller has reported.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  getVelocity(): number;
  /**
   * The minimum value that `targetVelocity` can be set to.
   *
   * *   Set the `targetVelocity` to `minVelocity` to stop the motor. See `targetBrakingStrength` for more information on stopping the motor.
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  getMinVelocity(): number;
  /**
   * The maximum value that `targetVelocity` can be set to.
   *
   * *   `targetVelocity` is bounded by -`maxVelocity` and +`maxVelocity`, where a sign change (±) is indicitave of a direction change.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  getMaxVelocity(): number;
}

/**
 * Phidget device class
 * @public
 */
export declare enum DeviceClass {
  /**
   * PhidgetAccelerometer device
   * @public
   */
  ACCELEROMETER = 1,
  /**
   * PhidgetAdvancedServo device
   * @public
   */
  ADVANCED_SERVO = 2,
  /**
   * PhidgetAnalog device
   * @public
   */
  ANALOG = 3,
  /**
   * PhidgetBridge device
   * @public
   */
  BRIDGE = 4,

  /**
   * Dictionary device
   * @public
   */
  DICTIONARY = 24,
  /**
   * PhidgetEncoder device
   * @public
   */
  ENCODER = 5,

  /**
   * PhidgetFrequencyCounter device
   * @public
   */
  FREQUENCY_COUNTER = 6,

  /**
   * PhidgetGPS device
   * @public
   */
  GPS = 7,
  /**
   * Phidget VINT Hub device
   * @public
   */
  HUB = 8,
  /**
   * PhidgetInterfaceKit device
   * @public
   */
  INTERFACE_KIT = 9,
  /**
   * PhidgetIR device
   * @public
   */
  IR = 10,
  /**
   * PhidgetLED device
   * @public
   */
  LED = 11,

  /**
   * PhidgetMotorControl device
   * @public
   */
  MOTOR_CONTROL = 13,
  /**
   * PhidgetPHSensor device
   * @public
   */
  PH_SENSOR = 14,
  /**
   * PhidgetRFID device
   * @public
   */
  RFID = 15,
  /**
   * PhidgetServo device
   * @public
   */
  SERVO = 16,
  /**
   * PhidgetSpatial device
   * @public
   */
  SPATIAL = 17,
  /**
   * PhidgetStepper device
   * @public
   */
  STEPPER = 18,
  /**
   * PhidgetTemperatureSensor device
   * @public
   */
  TEMPERATURE_SENSOR = 19,
  /**
   * PhidgetTextLCD device
   * @public
   */
  TEXT_LCD = 20,
  /**
   * Phidget VINT device
   * @public
   */
  VINT = 21,
}

/**
 * Phidget device ID
 * @public
 */
export declare enum DeviceID {
  /**
   * Unknown device
   * @public
   */
  UNKNOWN = 125,
  /**
   * Hub Port in Digital Input mode
   * @public
   */
  DIGITAL_INPUT_PORT = 95,
  /**
   * Hub Port in Digital Output mode
   * @public
   */
  DIGITAL_OUTPUT_PORT = 96,
  /**
   * Hub Port in Voltage Input mode
   * @public
   */
  VOLTAGE_INPUT_PORT = 97,
  /**
   * Hub Port in Voltage Ratio Input mode
   * @public
   */
  VOLTAGE_RATIO_INPUT_PORT = 98,
  /**
   * Dictionary
   * @public
   */
  PN_DICTIONARY = 111,
  /**
   * PhidgetServo 1-Motor (1000)
   * @public
   */
  PN_1000 = 2,
  /**
   * PhidgetServo 4-Motor (1001)
   * @public
   */
  PN_1001 = 3,
  /**
   * PhidgetAnalog 4-Output (1002)
   * @public
   */
  PN_1002 = 4,
  /**
   * PhidgetAccelerometer 2-Axis (1008)
   * @public
   */
  PN_1008 = 5,
  /**
   * PhidgetInterfaceKit 8/8/8 (1010, 1013, 1018, 1019)
   * @public
   */
  PN_1010_1013_1018_1019 = 6,
  /**
   * PhidgetInterfaceKit 2/2/2 (1011)
   * @public
   */
  PN_1011 = 7,
  /**
   * PhidgetInterfaceKit 0/16/16 (1012)
   * @public
   */
  PN_1012 = 8,
  /**
   * PhidgetInterfaceKit 0/0/4 (1014)
   * @public
   */
  PN_1014 = 9,
  /**
   * PhidgetLinearTouch (1015)
   * @public
   */
  PN_1015 = 10,
  /**
   * PhidgetCircularTouch (1016)
   * @public
   */
  PN_1016 = 11,
  /**
   * PhidgetInterfaceKit 0/0/8 (1017)
   * @public
   */
  PN_1017 = 12,
  /**
   * PhidgetRFID (1023)
   * @public
   */
  PN_1023 = 13,
  /**
   * PhidgetRFID Read-Write (1024)
   * @public
   */
  PN_1024 = 14,
  /**
   * PhidgetLED-64 (1030)
   * @public
   */
  PN_1030 = 15,
  /**
   * PhidgetLED-64 Advanced (1031)
   * @public
   */
  PN_1031 = 16,
  /**
   * PhidgetLED-64 Advanced (1032)
   * @public
   */
  PN_1032 = 17,
  /**
   * PhidgetGPS (1040)
   * @public
   */
  PN_1040 = 18,
  /**
   * PhidgetSpatial 0/0/3 Basic (1041)
   * @public
   */
  PN_1041 = 19,
  /**
   * PhidgetSpatial 3/3/3 Basic (1042)
   * @public
   */
  PN_1042 = 20,
  /**
   * PhidgetSpatial Precision 0/0/3 High Resolution (1043)
   * @public
   */
  PN_1043 = 21,
  /**
   * PhidgetSpatial Precision 3/3/3 High Resolution (1044)
   * @public
   */
  PN_1044 = 22,
  /**
   * PhidgetTemperatureSensor IR (1045)
   * @public
   */
  PN_1045 = 23,
  /**
   * PhidgetBridge 4-Input (1046)
   * @public
   */
  PN_1046 = 24,
  /**
   * PhidgetEncoder HighSpeed 4-Input (1047)
   * @public
   */
  PN_1047 = 25,
  /**
   * PhidgetTemperatureSensor 4-input (1048)
   * @public
   */
  PN_1048 = 26,
  /**
   * PhidgetSpatial 0/0/3 (1049)
   * @public
   */
  PN_1049 = 27,
  /**
   * PhidgetTemperatureSensor 1-Input (1051)
   * @public
   */
  PN_1051 = 28,
  /**
   * PhidgetEncoder Mechanical (1052)
   * @public
   */
  PN_1052 = 29,
  /**
   * PhidgetAccelerometer 2-Axis (1053)
   * @public
   */
  PN_1053 = 30,
  /**
   * PhidgetFrequencyCounter (1054)
   * @public
   */
  PN_1054 = 31,
  /**
   * PhidgetIR (1055)
   * @public
   */
  PN_1055 = 32,
  /**
   * PhidgetSpatial 3/3/3 (1056)
   * @public
   */
  PN_1056 = 33,
  /**
   * PhidgetEncoder HighSpeed (1057)
   * @public
   */
  PN_1057 = 34,
  /**
   * PhidgetPHSensor (1058)
   * @public
   */
  PN_1058 = 35,
  /**
   * PhidgetAccelerometer 3-Axis (1059)
   * @public
   */
  PN_1059 = 36,
  /**
   * PhidgetMotorControl LV (1060)
   * @public
   */
  PN_1060 = 37,
  /**
   * PhidgetAdvancedServo 8-Motor (1061)
   * @public
   */
  PN_1061 = 38,
  /**
   * PhidgetStepper Unipolar 4-Motor (1062)
   * @public
   */
  PN_1062 = 39,
  /**
   * PhidgetStepper Bipolar 1-Motor (1063)
   * @public
   */
  PN_1063 = 40,
  /**
   * PhidgetMotorControl HC (1064)
   * @public
   */
  PN_1064 = 41,
  /**
   * PhidgetMotorControl 1-Motor (1065)
   * @public
   */
  PN_1065 = 42,
  /**
   * PhidgetAdvancedServo 1-Motor (1066)
   * @public
   */
  PN_1066 = 43,
  /**
   * PhidgetStepper Bipolar HC (1067)
   * @public
   */
  PN_1067 = 44,
  /**
   * PhidgetTextLCD 20x2 with PhidgetInterfaceKit 8/8/8 (1202, 1203)
   * @public
   */
  PN_1202_1203 = 45,
  /**
   * PhidgetTextLCD Adapter (1204)
   * @public
   */
  PN_1204 = 46,
  /**
   * PhidgetTextLCD 20x2 (1215, 1216, 1217, 1218)
   * @public
   */
  PN_1215__1218 = 47,
  /**
   * PhidgetTextLCD 20x2 with PhidgetInterfaceKit 0/8/8 (1219, 1220, 1221, 1222)
   * @public
   */
  PN_1219__1222 = 48,
  /**
   * pH Adapter
   * @public
   */
  PN_ADP1000 = 49,
  /**
   * Analog Input Module x8
   * @public
   */
  PN_DAQ1000 = 51,
  /**
   * Digital Input 4
   * @public
   */
  PN_DAQ1200 = 52,
  /**
   * Digital Input 4 Isolated
   * @public
   */
  PN_DAQ1300 = 53,
  /**
   * Digital Input 16
   * @public
   */
  PN_DAQ1301 = 54,
  /**
   * Versatile Input
   * @public
   */
  PN_DAQ1400 = 55,
  /**
   * Bridge
   * @public
   */
  PN_DAQ1500 = 56,
  /**
   * DC Motor Controller with PID
   * @public
   */
  PN_DCC1000 = 57,
  /**
   * Small DC Motor Controller
   * @public
   */
  PN_DCC1001 = 110,
  /**
   * 4A Small DC Motor Controller
   * @public
   */
  PN_DCC1002 = 117,
  /**
   * 2 Channel DC Motor Controller
   * @public
   */
  PN_DCC1003 = 120,
  /**
   * BLDC Motor Controller
   * @public
   */
  PN_DCC1100 = 108,
  /**
   * 200mm Distance Sensor
   * @public
   */
  PN_DST1000 = 58,
  /**
   * 650mm distance sensor
   * @public
   */
  PN_DST1001 = 121,
  /**
   * 1200mm distance sensor
   * @public
   */
  PN_DST1002 = 126,
  /**
   * Sonar Distance Sensor
   * @public
   */
  PN_DST1200 = 59,
  /**
   * Encoder
   * @public
   */
  PN_ENC1000 = 60,

  /**
   * Capacitive Touch Sensor
   * @public
   */
  PN_HIN1000 = 61,
  /**
   * Capacitive Scroll
   * @public
   */
  PN_HIN1001 = 62,
  /**
   * Joystick
   * @public
   */
  PN_HIN1100 = 63,
  /**
   * Dial Encoder
   * @public
   */
  PN_HIN1101 = 109,
  /**
   * Phidget USB VINT Hub with 6 ports
   * @public
   */
  PN_HUB0000 = 64,
  /**
   * Phidget USB VINT Hub with 6 ports
   * @public
   */
  PN_HUB0001 = 142,
  /**
   * Phidget SPI VINT Hub with 6 ports
   * @public
   */
  PN_HUB0004 = 67,
  /**
   * Phidget Network Hub with 6 ports
   * @public
   */
  PN_HUB5000 = 123,
  /**
   * Humidity Sensor
   * @public
   */
  PN_HUM1000 = 69,
  /**
   * Humidity Sensor
   * @public
   */
  PN_HUM1001 = 127,
  /**
   * VINT Moisture Sensor
   * @public
   */
  PN_HUM1100 = 136,

  /**
   * LCD
   * @public
   */
  PN_LCD1100 = 70,
  /**
   * LED Driver 32
   * @public
   */
  PN_LED1000 = 71,
  /**
   * Light Sensor
   * @public
   */
  PN_LUX1000 = 72,
  /**
   * Phidget Accelerometer
   * @public
   */
  PN_MOT0100 = 146,
  /**
   * PhidgetSpatial Precision 3/3/3
   * @public
   */
  PN_MOT0109 = 140,
  /**
   * PhidgetSpatial Precision 3/3/3
   * @public
   */
  PN_MOT0110 = 141,
  /**
   * Accelerometer 0/0/3
   * @public
   */
  PN_MOT1100 = 73,
  /**
   * Spatial 3/3/3
   * @public
   */
  PN_MOT1101 = 74,
  /**
   * VINT Spatial Phidget AHRS
   * @public
   */
  PN_MOT1102 = 137,
  /**
   * Analog Output 0-5V
   * @public
   */
  PN_OUT1000 = 75,
  /**
   * Analog Output (+/-)10V
   * @public
   */
  PN_OUT1001 = 76,
  /**
   * Analog Output (+/-)10V - 16 bit
   * @public
   */
  PN_OUT1002 = 77,
  /**
   * Digital Output 4
   * @public
   */
  PN_OUT1100 = 78,
  /**
   * Barometer
   * @public
   */
  PN_PRE1000 = 79,
  /**
   * PhidgetAdvancedServo 8-Motor
   * @public
   */
  PN_RCC0004 = 124,
  /**
   * 8-Servo Controller
   * @public
   */
  PN_RCC1000 = 80,
  /**
   * Power Relay 4
   * @public
   */
  PN_REL1000 = 81,
  /**
   * Digital Output 4 Isolated
   * @public
   */
  PN_REL1100 = 82,
  /**
   * Digital Output 16 Isolated
   * @public
   */
  PN_REL1101 = 83,
  /**
   * Power Supply Protector
   * @public
   */
  PN_SAF1000 = 84,
  /**
   * Sound Pressure Level Sensor
   * @public
   */
  PN_SND1000 = 85,
  /**
   * Bipolar Stepper Motor Controller
   * @public
   */
  PN_STC1000 = 86,
  /**
   * Bipolar Stepper Motor SmallController
   * @public
   */
  PN_STC1001 = 115,
  /**
   * 8A Bipolar Stepper Motor Controller
   * @public
   */
  PN_STC1002 = 118,
  /**
   * 4A Bipolar Stepper Motor SmallController
   * @public
   */
  PN_STC1003 = 119,
  /**
   * 4A Bipolar Stepper Motor SmallController
   * @public
   */
  PN_STC1005 = 149,
  /**
   * Integrated Temperature Sensor
   * @public
   */
  PN_TMP1000 = 87,
  /**
   * Thermocouple 1
   * @public
   */
  PN_TMP1100 = 88,
  /**
   * Thermocouple 4
   * @public
   */
  PN_TMP1101 = 89,
  /**
   * RTD
   * @public
   */
  PN_TMP1200 = 90,
  /**
   * Voltage Sensor High Precision
   * @public
   */
  PN_VCP1000 = 92,
  /**
   * Voltage Sensor Large
   * @public
   */
  PN_VCP1001 = 93,
  /**
   * Voltage Sensor Small
   * @public
   */
  PN_VCP1002 = 94,
  /**
   * 30A Current Sensor
   * @public
   */
  PN_VCP1100 = 105,
}

/** @public */
export declare class Dictionary extends DictionaryBase {
  get(key: string, def?: string): Promise<string | null>;
  scan(key?: string): Promise<string[]>;
}

declare abstract class DictionaryBase extends PhidgetChannel {
  /**
   * **Add** event
   *  * `key` - The key that was added
   *  * `value` - The value of the new key
   * ---
   * Occurs when a new key value pair is added to the dictionary.
   */
  onAdd: ((key: string, value: string) => void) | null;

  /**
   * **Update** event
   *  * `key` - The key whose value was updated
   *  * `value` - The new value
   * ---
   * Occurs when a change is made to a key value pair in the dictionary.
   */
  onUpdate: ((key: string, value: string) => void) | null;

  /**
   * **Remove** event
   *  * `key` - The key that was removed
   * ---
   * Occurs when a key is removed from the dictionary.
   */
  onRemove: ((key: string) => void) | null;

  /**
   * Dictionaries are useful for passing information between multiple programs using Phidgets. A common example would be to have one program controlling your application that receives commands sent via a Phidget dictionary from a web interface, as outlined in many of our [articles](/?view=articles).
   *
   * Keys can be thought of as being similar to variable names, with their values as their associated value. Phidget dictionaries contain groups of related key-value pairs, and are stored on a central [Phigdet Network Server](/docs/Phidget_Network_Server). Dictionaries, and the key-value pairs within may be accessed from programs that have access to the [Phigdet Network Server](/docs/Phidget_Network_Server).
   *
   * The Dictionary API supports connecting to a dictionary on the server, managing key-value pairs, and monitoring changes made to the dictionary.
   *
   * More information on Phidget Dictionaries can be found on the [Phidget Dictionary](/docs/Phidget_Dictionary) support page.
   * @public
   */
  constructor();

  /**
   * Adds a new key value pair to the dictionary. It is an error if the key already exits.
   * @throws {@link PhidgetError}
   * @param key - The key to add
   * @param value - The value to add
   */
  add(key: string, value: string): Promise<void>;
  /**
   * Removes every key from the dictionary
   * @throws {@link PhidgetError}
   */
  removeAll(): Promise<void>;
  /**
   * Gets the value associated with the given key from the dictionary
   * @returns The value
   * @throws {@link PhidgetError}
   * @param key - The key whose value is desired
   */
  abstract get(key: string): Promise<string | null>;
  /**
   * Gets the value associated with the given key from the dictionary
   * @returns The value
   * @throws {@link PhidgetError}
   * @param key - The key whose value is desired
   * @param def - default value if the key isn't found
   */
  abstract get(key: string, def: string): Promise<string | null>;
  /**
   * Removes the key from the dictionary
   * @throws {@link PhidgetError}
   * @param key - The key to remove
   */
  remove(key: string): Promise<void>;
  /**
   * Scans the keys in the dictionary, indexed by `start` or the first key in the dictionary if start is `NULL` or an empty String.
   *
   * *   The result is formated as a newline seperated list of keys
   * *   The list begins at the key following the start key
   * *   The list might not contain all of the keys in the dictionary
   * *   To continue scanning, call the method again with the last entry from the previous result
   * *   When all of the keys have been scanned, a zero length string is returned
   * *   Keys added during the scan may be missed, and keys deleted during the scan may be included
   * @returns The list of keys
   * @throws {@link PhidgetError}
   * @param start - The key to start the scan from
   */
  abstract scan(start?: string): Promise<readonly string[]>;
  /**
   * Sets the value of a key, or creates the key value pair if the key does not already exist.
   * @throws {@link PhidgetError}
   * @param key - The key to set
   * @param value - The value to set
   */
  set(key: string, value: string): Promise<void>;
  /**
   * Updates a key value pair in the dictionary. It is an error if the key does not exist.
   * @throws {@link PhidgetError}
   * @param key - The key to update
   * @param value - The value to set
   */
  update(key: string, value: string): Promise<void>;
}

/** @public */
export declare class DigitalInput extends DigitalInputBase {}

declare abstract class DigitalInputBase extends PhidgetChannel {
  /**
   * **StateChange** event
   *  * `state` - The state value
   * ---
   * This event will occur when the state of the digital input has changed.
   *
   * *   The value will either be 0 or 1 (true or false).
   */
  onStateChange: ((state: boolean) => void) | null;

  /**
   * The Digital Input class is used to monitor the state of Phidget digital inputs. Use digital inputs to monitor the state of buttons, switches, or switch-to-ground sensors.
   * @public
   */
  constructor();

  /**
   * The input polarity mode for your channel.
   *
   * *   See your device's User Guide for more information about what value to chooose for the `InputMode`
   * @throws {@link PhidgetError}
   */
  get inputMode(): Enum.InputMode;
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   */
  get powerSupply(): Enum.PowerSupply;
  /**
   * The most recent state value that the channel has reported.
   * @throws {@link PhidgetError}
   */
  get state(): boolean;
  /**
   * The input polarity mode for your channel.
   *
   * *   See your device's User Guide for more information about what value to chooose for the `InputMode`
   * @returns The input mode value
   * @throws {@link PhidgetError}
   */
  getInputMode(): Enum.InputMode;
  /**
   * The input polarity mode for your channel.
   *
   * *   See your device's User Guide for more information about what value to chooose for the `InputMode`
   * @throws {@link PhidgetError}
   * @param inputMode - The input mode value
   */
  setInputMode(inputMode: Enum.InputMode): Promise<void>;
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @returns The power supply value
   * @throws {@link PhidgetError}
   */
  getPowerSupply(): Enum.PowerSupply;
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   * @param powerSupply - The power supply value
   */
  setPowerSupply(powerSupply: Enum.PowerSupply): Promise<void>;
  /**
   * The most recent state value that the channel has reported.
   * @returns The state value
   * @throws {@link PhidgetError}
   */
  getState(): boolean;
}

/** @public */
export declare class DigitalOutput extends DigitalOutputBase {}

declare abstract class DigitalOutputBase extends PhidgetChannel {
  /**
   * The Digital Output class is used to control digital logic outputs and LED outputs on Phidgets boards.
   * @public
   */
  constructor();

  /**
   * The `dutyCycle` represents the fraction of time the output is on (high).
   *
   * *   A `dutyCycle` of 1.0 translates to a high output, a `dutyCycle` of 0 translates to a low output.
   * *   A `dutyCycle` of 0.5 translates to an output that is high half the time, which results in an average output voltage of (output voltage x 0.5)
   * *   You can use the `dutyCycle` to create a dimming effect on LEDs.
   * @throws {@link PhidgetError}
   */
  get dutyCycle(): number;
  /**
   * The minimum value that `dutyCycle` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDutyCycle(): number;
  /**
   * The maximum value that `dutyCycle` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDutyCycle(): number;
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get minFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get maxFailsafeTime(): number;
  /**
   * The `frequency` parameter sets the PWM frequency for all frequency-settable PWM outputs on the board.
   * @throws {@link PhidgetError}
   */
  get frequency(): number;
  /**
   * The minimum value that `frequency` can be set to.
   * @throws {@link PhidgetError}
   */
  get minFrequency(): number;
  /**
   * The maximum value that `frequency` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxFrequency(): number;
  /**
   * The `LEDCurrentLimit` is the maximum amount of current that the controller will provide to the output.
   *
   * *   Reference the data sheet of the LED you are using before setting this value.
   * @throws {@link PhidgetError}
   */
  get LEDCurrentLimit(): number;
  /**
   * The minimum value that `LEDCurrentLimit` can be set to.
   * @throws {@link PhidgetError}
   */
  get minLEDCurrentLimit(): number;
  /**
   * The maximum value that `LEDCurrentLimit` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxLEDCurrentLimit(): number;
  /**
   * The `LEDForwardVoltage` is the voltage that will be available to your LED.
   *
   * *   Reference the data sheet of the LED you are using before setting this value. Choose the `LEDForwardVoltage` that is closest to the forward voltage specified in the data sheet.
   * *   This forward voltage is shared for all channels on this device. Setting the LEDForwardVoltage on any channel will set the LEDForwardVoltage for all channels on the device.
   * @throws {@link PhidgetError}
   */
  get LEDForwardVoltage(): Enum.LEDForwardVoltage;
  /**
   * The `state` will indicate whether the output is high (TRUE) or low (FALSE).
   *
   * *   If a `dutyCycle` has been set, the state will return as TRUE if the DutyCycle is above 0.5, or FALSE otherwise.
   * @throws {@link PhidgetError}
   */
  get state(): boolean;
  /**
   * The `dutyCycle` represents the fraction of time the output is on (high).
   *
   * *   A `dutyCycle` of 1.0 translates to a high output, a `dutyCycle` of 0 translates to a low output.
   * *   A `dutyCycle` of 0.5 translates to an output that is high half the time, which results in an average output voltage of (output voltage x 0.5)
   * *   You can use the `dutyCycle` to create a dimming effect on LEDs.
   * @returns The duty cycle value
   * @throws {@link PhidgetError}
   */
  getDutyCycle(): number;
  /**
   * The `dutyCycle` represents the fraction of time the output is on (high).
   *
   * *   A `dutyCycle` of 1.0 translates to a high output, a `dutyCycle` of 0 translates to a low output.
   * *   A `dutyCycle` of 0.5 translates to an output that is high half the time, which results in an average output voltage of (output voltage x 0.5)
   * *   You can use the `dutyCycle` to create a dimming effect on LEDs.
   * @throws {@link PhidgetError}
   * @param dutyCycle - The duty cycle value
   */
  setDutyCycle(dutyCycle: number): Promise<void>;
  /**
   * The minimum value that `dutyCycle` can be set to.
   * @returns The duty cycle value
   * @throws {@link PhidgetError}
   */
  getMinDutyCycle(): number;
  /**
   * The maximum value that `dutyCycle` can be set to.
   * @returns The duty cycle value
   * @throws {@link PhidgetError}
   */
  getMaxDutyCycle(): number;
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For Digital Output channels, this will set the output State to FALSE. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */
  enableFailsafe(failsafeTime: number): Promise<void>;
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMinFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMaxFailsafeTime(): number;
  /**
   * The `frequency` parameter sets the PWM frequency for all frequency-settable PWM outputs on the board.
   * @returns The PWM frequency
   * @throws {@link PhidgetError}
   */
  getFrequency(): number;
  /**
   * The `frequency` parameter sets the PWM frequency for all frequency-settable PWM outputs on the board.
   * @throws {@link PhidgetError}
   * @param frequency - The PWM frequency
   */
  setFrequency(frequency: number): Promise<void>;
  /**
   * The minimum value that `frequency` can be set to.
   * @returns The frequency
   * @throws {@link PhidgetError}
   */
  getMinFrequency(): number;
  /**
   * The maximum value that `frequency` can be set to.
   * @returns The frequency
   * @throws {@link PhidgetError}
   */
  getMaxFrequency(): number;
  /**
   * The `LEDCurrentLimit` is the maximum amount of current that the controller will provide to the output.
   *
   * *   Reference the data sheet of the LED you are using before setting this value.
   * @returns The current limit value
   * @throws {@link PhidgetError}
   */
  getLEDCurrentLimit(): number;
  /**
   * The `LEDCurrentLimit` is the maximum amount of current that the controller will provide to the output.
   *
   * *   Reference the data sheet of the LED you are using before setting this value.
   * @throws {@link PhidgetError}
   * @param LEDCurrentLimit - The current limit value
   */
  setLEDCurrentLimit(LEDCurrentLimit: number): Promise<void>;
  /**
   * The minimum value that `LEDCurrentLimit` can be set to.
   * @returns The current limit value
   * @throws {@link PhidgetError}
   */
  getMinLEDCurrentLimit(): number;
  /**
   * The maximum value that `LEDCurrentLimit` can be set to.
   * @returns The current limit value
   * @throws {@link PhidgetError}
   */
  getMaxLEDCurrentLimit(): number;
  /**
   * The `LEDForwardVoltage` is the voltage that will be available to your LED.
   *
   * *   Reference the data sheet of the LED you are using before setting this value. Choose the `LEDForwardVoltage` that is closest to the forward voltage specified in the data sheet.
   * *   This forward voltage is shared for all channels on this device. Setting the LEDForwardVoltage on any channel will set the LEDForwardVoltage for all channels on the device.
   * @returns The forward voltage value
   * @throws {@link PhidgetError}
   */
  getLEDForwardVoltage(): Enum.LEDForwardVoltage;
  /**
   * The `LEDForwardVoltage` is the voltage that will be available to your LED.
   *
   * *   Reference the data sheet of the LED you are using before setting this value. Choose the `LEDForwardVoltage` that is closest to the forward voltage specified in the data sheet.
   * *   This forward voltage is shared for all channels on this device. Setting the LEDForwardVoltage on any channel will set the LEDForwardVoltage for all channels on the device.
   * @throws {@link PhidgetError}
   * @param LEDForwardVoltage - The forward voltage value
   */
  setLEDForwardVoltage(
    LEDForwardVoltage: Enum.LEDForwardVoltage
  ): Promise<void>;
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */
  resetFailsafe(): Promise<void>;
  /**
   * The `state` will indicate whether the output is high (TRUE) or low (FALSE).
   *
   * *   If a `dutyCycle` has been set, the state will return as TRUE if the DutyCycle is above 0.5, or FALSE otherwise.
   * @returns The state value
   * @throws {@link PhidgetError}
   */
  getState(): boolean;
  /**
   * The `state` will dictate whether the output is constantly high (TRUE) or low (FALSE).
   *
   * *   This will override any `dutyCycle` that may have been set on the channel.
   * *   Setting the `state` to TRUE is the same as setting `dutyCycle` to 1.0, and setting the `state` to FALSE is the same as setting a `dutyCycle` of 0.0.
   * @throws {@link PhidgetError}
   * @param state - The state value
   */
  setState(state: boolean): Promise<void>;
}

/** @public */
export declare class DistanceSensor extends DistanceSensorBase {
  getSonarReflections(): {
    distances: [number, number, number, number, number, number, number, number];
    amplitudes: [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ];
    count: number;
  };
}

declare abstract class DistanceSensorBase extends PhidgetChannel {
  /**
   * **DistanceChange** event
   *  * `distance` - The current distance
   * ---
   * The most recent distance value the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `distanceChangeTrigger` has been set to a non-zero value, the `DistanceChange` event will not occur until the distance has changed by at least the `distanceChangeTrigger` value.
   */
  onDistanceChange: ((distance: number) => void) | null;

  /**
   * **SonarReflectionsUpdate** event
   *  * `distances` - The reflection values
   *  * `amplitudes` - The amplitude values
   *  * `count` - The number of reflections detected
   * ---
   * The most recent reflections the channel has detected will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `distanceChangeTrigger` has been set to a non-zero value, the `SonarReflectionsUpdate` event will not occur until the distance has changed by at least the `distanceChangeTrigger` value.
   * *   The closest reflection will be placed at index 0 of the _distances_ array, and the furthest reflection at index 7.
   * *   If you are only interested in the closest reflection, you can simply use the `DistanceChange` event.
   * *   The values reported as amplitudes are relative amplitudes of the reflections that are normalized to an arbitrary scale.
   */
  onSonarReflectionsUpdate:
    | ((
        distances: readonly [
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number
        ],
        amplitudes: readonly [
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number
        ],
        count: number
      ) => void)
    | null;

  /**
   * The Distance Sensor class gathers data from the distance sensor on a Phidget board.
   *
   * If you're using a simple 0-5V sensor that does not have its own firmware, use the VoltageInput or VoltageRatioInput class instead, as specified for your device.
   * @public
   */
  constructor();

  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the `distanceChangeTrigger`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * The most recent distance value that the channel has reported.
   *
   * *   This value will always be between `minDistance` and `maxDistance`.
   * @throws {@link PhidgetError}
   */
  get distance(): number;
  /**
   * The minimum distance that a event will report.
   * @throws {@link PhidgetError}
   */
  get minDistance(): number;
  /**
   * The maximum distance that a event will report.
   * @throws {@link PhidgetError}
   */
  get maxDistance(): number;
  /**
   * The channel will not issue an event until the distance value has changed by the amount specified by the `distanceChangeTrigger`.
   *
   * *   Setting the `distanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering,
   * @throws {@link PhidgetError}
   */
  get distanceChangeTrigger(): number;
  /**
   * The minimum value that `distanceChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDistanceChangeTrigger(): number;
  /**
   * The maximum value that `distanceChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDistanceChangeTrigger(): number;
  /**
   * When set to true, the device will operate more quietly.
   *
   * *   The measurable range is reduced when operating in quiet mode.
   * @throws {@link PhidgetError}
   */
  get sonarQuietMode(): boolean;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the `distanceChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the `distanceChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * The most recent distance value that the channel has reported.
   *
   * *   This value will always be between `minDistance` and `maxDistance`.
   * @returns The distance value
   * @throws {@link PhidgetError}
   */
  getDistance(): number;
  /**
   * The minimum distance that a event will report.
   * @returns The distance value
   * @throws {@link PhidgetError}
   */
  getMinDistance(): number;
  /**
   * The maximum distance that a event will report.
   * @returns The distance value
   * @throws {@link PhidgetError}
   */
  getMaxDistance(): number;
  /**
   * The channel will not issue an event until the distance value has changed by the amount specified by the `distanceChangeTrigger`.
   *
   * *   Setting the `distanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering,
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getDistanceChangeTrigger(): number;
  /**
   * The channel will not issue an event until the distance value has changed by the amount specified by the `distanceChangeTrigger`.
   *
   * *   Setting the `distanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering,
   * @throws {@link PhidgetError}
   * @param distanceChangeTrigger - The change trigger value
   */
  setDistanceChangeTrigger(distanceChangeTrigger: number): Promise<void>;
  /**
   * The minimum value that `distanceChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMinDistanceChangeTrigger(): number;
  /**
   * The maximum value that `distanceChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMaxDistanceChangeTrigger(): number;
  /**
   * When set to true, the device will operate more quietly.
   *
   * *   The measurable range is reduced when operating in quiet mode.
   * @returns The quiet mode value
   * @throws {@link PhidgetError}
   */
  getSonarQuietMode(): boolean;
  /**
   * When set to true, the device will operate more quietly.
   *
   * *   The measurable range is reduced when operating in quiet mode.
   * @throws {@link PhidgetError}
   * @param sonarQuietMode - The quiet mode value
   */
  setSonarQuietMode(sonarQuietMode: boolean): Promise<void>;
  /**
   * The most recent reflection values that the channel has reported.
   *
   * *   The distance values will always be between `minDistance` and `maxDistance`.
   * *   The closest reflection will be placed at index 0 of the distances array, and the furthest reflection at index 7
   * *   The amplitude values are relative amplitudes of the reflections that are normalized to an arbitrary scale.
   * @returns
   * 	- distances: The reflection values
   * 	- amplitudes: The amplitude values
   * 	- count: The number of reflections
   * @throws {@link PhidgetError}
   */
  abstract getSonarReflections(): {
    distances: readonly [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ];
    amplitudes: readonly [
      number,
      number,
      number,
      number,
      number,
      number,
      number,
      number
    ];
    count: number;
  };
}

/** @public */
export declare class Encoder extends EncoderBase {
  setPosition(position: number): void;
}

declare abstract class EncoderBase extends PhidgetChannel {
  /**
   * **PositionChange** event
   *  * `positionChange` - The amount the position changed since the last change event
   *  * `timeChange` - The time elapsed since the last change event in milliseconds
   *  * `indexTriggered` - True if the index was passed since the last change event
   * ---
   * The most recent values the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `positionChangeTrigger` has been set to a non-zero value, the `PositionChange` event will not occur until the position has changed by at least the `positionChangeTrigger` value.
   */
  onPositionChange:
    | ((
        positionChange: number,
        timeChange: number,
        indexTriggered: boolean
      ) => void)
    | null;

  /**
   * The Encoder class is used to read position data from quadrature encoders in order to track linear or rotary movement. If the device supports an index pin as a reference point, you can also access it through this class.
   * @public
   */
  constructor();

  /**
   * The enabled state of the encoder.
   * @throws {@link PhidgetError}
   */
  get enabled(): boolean;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PositionChange` events can also be affected by the `positionChangeTrigger`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * The most recent position of the index channel calculated by the Phidgets library.
   *
   * *   The index channel will usually pulse once per rotation.
   * *   Setting the encoder position will move the index position the same amount so their relative position stays the same.
   * *   Index position is tracked locally as the last position at which the index was triggered. Setting position will only affect the local copy of the index position value. This means that index positions seen by multiple network applications may not agree.
   * @throws {@link PhidgetError}
   */
  get indexPosition(): number;
  /**
   * The encoder interface mode. Match the mode to the type of encoder you have attached.
   *
   * *   It is recommended to only change this when the encoder disabled in order to avoid unexpected results.
   * @throws {@link PhidgetError}
   */
  get IOMode(): Enum.EncoderIOMode;
  /**
   * The most recent position value calculated by the Phidgets library.
   *
   * *   Position counts quadrature edges within a quadrature cycle. This means there are four counts per full quadrature cycle.
   * *   Position is tracked locally as the total position change from the time the channel is opened. Setting position will only affect the local copy of the position value. This means that positions seen by multiple network applications may not agree.
   * @throws {@link PhidgetError}
   */
  get position(): number;
  set position(position: number);
  /**
   * The channel will not issue a `PositionChange` event until the position value has changed by the amount specified by the `positionChangeTrigger`.
   *
   * *   Setting the `positionChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */
  get positionChangeTrigger(): number;
  /**
   * The minimum value that `positionChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get minPositionChangeTrigger(): number;
  /**
   * The maximum value that `positionChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxPositionChangeTrigger(): number;
  /**
   * The enabled state of the encoder.
   * @throws {@link PhidgetError}
   * @param enabled - The enabled value
   */
  setEnabled(enabled: boolean): Promise<void>;
  /**
   * The enabled state of the encoder.
   * @returns The enabled value
   * @throws {@link PhidgetError}
   */
  getEnabled(): boolean;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PositionChange` events can also be affected by the `positionChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PositionChange` events can also be affected by the `positionChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * The most recent position of the index channel calculated by the Phidgets library.
   *
   * *   The index channel will usually pulse once per rotation.
   * *   Setting the encoder position will move the index position the same amount so their relative position stays the same.
   * *   Index position is tracked locally as the last position at which the index was triggered. Setting position will only affect the local copy of the index position value. This means that index positions seen by multiple network applications may not agree.
   * @returns The index position value
   * @throws {@link PhidgetError}
   */
  getIndexPosition(): number;
  /**
   * The encoder interface mode. Match the mode to the type of encoder you have attached.
   *
   * *   It is recommended to only change this when the encoder disabled in order to avoid unexpected results.
   * @returns The IO mode value.
   * @throws {@link PhidgetError}
   */
  getIOMode(): Enum.EncoderIOMode;
  /**
   * The encoder interface mode. Match the mode to the type of encoder you have attached.
   *
   * *   It is recommended to only change this when the encoder disabled in order to avoid unexpected results.
   * @throws {@link PhidgetError}
   * @param IOMode - The IO mode value.
   */
  setIOMode(IOMode: Enum.EncoderIOMode): Promise<void>;
  /**
   * The most recent position value calculated by the Phidgets library.
   *
   * *   Position counts quadrature edges within a quadrature cycle. This means there are four counts per full quadrature cycle.
   * *   Position is tracked locally as the total position change from the time the channel is opened. Setting position will only affect the local copy of the position value. This means that positions seen by multiple network applications may not agree.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  getPosition(): number;
  /**
   * The most recent position value calculated by the Phidgets library.
   *
   * *   Position counts quadrature edges within a quadrature cycle. This means there are four counts per full quadrature cycle.
   * *   Position is tracked locally as the total position change from the time the channel is opened. Setting position will only affect the local copy of the position value. This means that positions seen by multiple network applications may not agree.
   * @throws {@link PhidgetError}
   * @param position - The position value
   */
  abstract setPosition(position: number): void;
  /**
   * The channel will not issue a `PositionChange` event until the position value has changed by the amount specified by the `positionChangeTrigger`.
   *
   * *   Setting the `positionChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getPositionChangeTrigger(): number;
  /**
   * The channel will not issue a `PositionChange` event until the position value has changed by the amount specified by the `positionChangeTrigger`.
   *
   * *   Setting the `positionChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param positionChangeTrigger - The change trigger value
   */
  setPositionChangeTrigger(positionChangeTrigger: number): Promise<void>;
  /**
   * The minimum value that `positionChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMinPositionChangeTrigger(): number;
  /**
   * The maximum value that `positionChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMaxPositionChangeTrigger(): number;
}

/**
 * Encoder interface mode
 * @public
 */
export declare enum EncoderIOMode {
  /**
   * No additional pull-up or pull-down resistors will be applied to the input lines.
   * @public
   */
  PUSH_PULL = 1,
  /**
   * 2.2kΩ pull-down resistors will be applied to the input lines.
   * @public
   */
  LINE_DRIVER_2K2 = 2,
  /**
   * 10kΩ pull-down resistors will be applied to the input lines.
   * @public
   */
  LINE_DRIVER_10K = 3,
  /**
   * 2.2kΩ pull-up resistors will be applied to the input lines.
   * @public
   */
  OPEN_COLLECTOR_2K2 = 4,
  /**
   * 10kΩ pull-up resistors will be applied to the input lines.
   * @public
   */
  OPEN_COLLECTOR_10K = 5,
}

declare namespace Enum {
  export {
    EncoderIOMode,
    ErrorCode,
    ErrorEventCode,
    DeviceID,
    LogLevel,
    DeviceClass,
    ChannelClass,
    ChannelSubclass,
    MeshMode,
    PowerSupply,
    RTDWireSetup,
    InputMode,
    FanMode,
    SpatialPrecision,
    Unit,
    BridgeGain,
    VoltageRatioSensorType,
    LEDForwardVoltage,
    RCServoVoltage,
    VoltageOutputRange,
    VoltageRange,
    VoltageSensorType,
    RFIDProtocol,
    SpatialAlgorithm,
    RTDType,
    ThermocoupleType,
    FrequencyFilterType,
    IRCodeEncoding,
    IRCodeLength,
    StepperControlMode,
    LCDFont,
    LCDScreenSize,
    LCDPixelState,
    DataAdapterParity,
    DataAdapterStopBits,
    DataAdapterHandshakeMode,
    DataAdapterProtocol,
    DataAdapterSPIMode,
    DataAdapterEndianness,
    DataAdapterIOVoltage,
    PacketErrorCode,
    SPLRange,
    HubPortMode,
  };
}

/**
 * Error codes returned from all API calls via Exceptions.
 * @public
 */
export declare enum ErrorCode {
  /**
   * Call succeeded.
   * @public
   */
  SUCCESS = 0,
  /**
   * Not Permitted
   * @public
   */
  NOT_PERMITTED = 1,
  /**
   * The specified entity does not exist. This is usually a result of Net or Log API calls.
   * @public
   */
  NO_SUCH_ENTITY = 2,
  /**
   * Call has timed out. This can happen for a number of common reasons: Check that the Phidget you are trying to open is plugged in, and that the addressing parameters have been specified correctly. Check that the Phidget is not already open in another program, such as the Phidget Control Panel, or another program you are developing. If your Phidget has a plug or terminal block for external power, ensure it is plugged in and powered. If you are using remote Phidgets, ensure that your computer can access the remote Phidgets using the Phidget Control Panel. If you are using remote Phidgets, ensure you have enabled Server Discovery or added the server corresponding to the Phidget you are trying to open. If you are using Network Server Discovery, try extending the timeout to allow more time for the server to be discovered.
   * @public
   */
  TIMEOUT = 3,
  /**
   * Keep Alive Failure
   * @public
   */
  KEEP_ALIVE = 58,
  /**
   * The operation was interrupted; either from an error, or because the device was closed.
   * @public
   */
  INTERRUPTED = 4,
  /**
   * IO Issue
   * @public
   */
  IO = 5,
  /**
   * Memory Issue
   * @public
   */
  NO_MEMORY = 6,
  /**
   * Access to the resource (file) is denied. This can happen when enabling logging.
   * @public
   */
  ACCESS = 7,
  /**
   * Address Issue
   * @public
   */
  FAULT = 8,
  /**
   * Specified resource is in use. This error code is not normally used.
   * @public
   */
  BUSY = 9,
  /**
   * Object Exists
   * @public
   */
  EXISTS = 10,
  /**
   * Object is not a directory
   * @public
   */
  IS_NOT_DIRECTORY = 11,
  /**
   * Object is a directory
   * @public
   */
  IS_DIRECTORY = 12,
  /**
   * Invalid or malformed command. This can be caused by sending a command to a device which is not supported in it's current configuration.
   * @public
   */
  INVALID = 13,
  /**
   * Too many open files in system
   * @public
   */
  TOO_MANY_FILES_SYSTEM = 14,
  /**
   * Too many open files
   * @public
   */
  TOO_MANY_FILES = 15,
  /**
   * The provided buffer argument size is too small.
   * @public
   */
  NO_SPACE = 16,
  /**
   * File too Big
   * @public
   */
  FILE_TOO_BIG = 17,
  /**
   * Read Only Filesystem
   * @public
   */
  READ_ONLY_FILESYSTEM = 18,
  /**
   * Read Only Object
   * @public
   */
  READ_ONLY = 19,
  /**
   * This API call is not supported. For Class APIs this means that this API is not supported by this device. This can also mean the API is not supported on this OS, or OS configuration.
   * @public
   */
  UNSUPPORTED = 20,
  /**
   * One or more of the parameters passed to the function is not accepted by the channel in its current configuration.
   * @public
   */
  INVALID_ARGUMENT = 21,
  /**
   * Try again
   * @public
   */
  TRY_AGAIN = 22,
  /**
   * Not Empty
   * @public
   */
  NOT_EMPTY = 26,
  /**
   * Something unexpected has occured. Enable library logging and have a look at the log, or contact Phidgets support.
   * @public
   */
  UNEXPECTED = 28,
  /**
   * Duplicated request. Can happen with some Net API calls, such as trying to add the same server twice.
   * @public
   */
  DUPLICATE = 27,
  /**
   * Bad Credential
   * @public
   */
  BAD_PASSWORD = 37,
  /**
   * Network Unavailable
   * @public
   */
  NETWORK_UNAVAILABLE = 45,
  /**
   * Connection Refused
   * @public
   */
  CONNECTION_REFUSED = 35,
  /**
   * Connection Reset
   * @public
   */
  CONNECTION_RESET = 46,
  /**
   * No route to host
   * @public
   */
  HOST_UNREACHABLE = 48,
  /**
   * No Such Device
   * @public
   */
  NO_SUCH_DEVICE = 40,
  /**
   * A Phidget channel object of the wrong channel class was passed into this API call.
   * @public
   */
  WRONG_DEVICE = 50,
  /**
   * Broken Pipe
   * @public
   */
  BROKEN_PIPE = 41,
  /**
   * Name Resolution Failure
   * @public
   */
  NAME_RESOLUTION_FAILURE = 44,
  /**
   * The value is unknown. This can happen right after attach, when the value has not yet been recieved from the Phidget. This can also happen if a device has not yet been configured / enabled. Some properties can only be read back after being set.
   * @public
   */
  UNKNOWN_VALUE = 51,
  /**
   * This can happen for a number of common reasons. Be sure you are opening the channel before trying to use it. If you are opening the channel, the program may not be waiting for the channel to be attached. If possible use openWaitForAttachment. Otherwise, be sure to check the Attached property of the channel before trying to use it.
   * @public
   */
  NOT_ATTACHED = 52,
  /**
   * Invalid or Unexpected Packet
   * @public
   */
  INVALID_PACKET = 53,
  /**
   * Argument List Too Long
   * @public
   */
  TOO_BIG = 54,
  /**
   * Bad Version
   * @public
   */
  BAD_VERSION = 55,
  /**
   * Channel was closed. This can happen if a channel is closed while openWaitForAttachment is waiting.
   * @public
   */
  CLOSED = 56,
  /**
   * Device is not configured enough for this API call. Have a look at the must-set properties for this device and make sure to configure them first.
   * @public
   */
  NOT_CONFIGURED = 57,
  /**
   * End of File
   * @public
   */
  END_OF_FILE = 31,
  /**
   * Failsafe Triggered on this channel. Close and Re-open the channel to resume operation.
   * @public
   */
  FAILSAFE = 59,
  /**
   * The value has been measured to be higher than the valid range of the sensor.
   * @public
   */
  UNKNOWN_VALUE_HIGH = 60,
  /**
   * The value has been measured to be lower than the valid range of the sensor.
   * @public
   */
  UNKNOWN_VALUE_LOW = 61,
}

/**
 * The error code from an Error event
 * @public
 */
export declare enum ErrorEventCode {
  /**
   * Client and Server protocol versions don't match. Ensure that both sides are using the same release of phidget22.
   * @public
   */
  BAD_VERSION = 1,
  /**
   * Check that the Phidget is not already open in another program, such as the Phidget Control Panel, or another program you are developing.
   * @public
   */
  BUSY = 2,
  /**
   * This could be a network communication issue, an authentication issue (if server password is enabled), or a Device access / hardware issue.
   * @public
   */
  NETWORK = 3,
  /**
   * An error occured dispatching a command or event.
   * @public
   */
  DISPATCH = 4,
  /**
   * A general failure occured - see description for details.
   * @public
   */
  FAILURE = 5,
  /**
   * An error state has cleared.
   * @public
   */
  SUCCESS = 4096,
  /**
   * A sampling overrun happened in firmware.
   * @public
   */
  OVERRUN = 4098,
  /**
   * One or more packets were lost.
   * @public
   */
  PACKET_LOST = 4099,
  /**
   * Variable has wrapped around.
   * @public
   */
  WRAP_AROUND = 4100,
  /**
   * Over-temperature condition detected.
   * @public
   */
  OVER_TEMPERATURE = 4101,
  /**
   * Over-current condition detected.
   * @public
   */
  OVER_CURRENT = 4102,
  /**
   * Out of range condition detected.
   * @public
   */
  OUT_OF_RANGE = 4103,
  /**
   * Power supply problem detected.
   * @public
   */
  BAD_POWER = 4104,
  /**
   * Saturation condition detected.
   * @public
   */
  SATURATION = 4105,
  /**
   * Over-voltage condition detected.
   * @public
   */
  OVER_VOLTAGE = 4107,
  /**
   * Failsafe condition detected.
   * @public
   */
  FAILSAFE_CONDITION = 4108,
  /**
   * Voltage error detected.
   * @public
   */
  VOLTAGE_ERROR = 4109,
  /**
   * Energy dump condition detected.
   * @public
   */
  ENERGY_DUMP_CONDITION = 4110,
  /**
   * Motor stall detected.
   * @public
   */
  MOTOR_STALL_CONDITION = 4111,
  /**
   * Invalid state detected.
   * @public
   */
  INVALID_STATE_CONDITION = 4112,
  /**
   * Bad connection detected.
   * @public
   */
  BAD_CONNECTION_CONDITION = 4113,
  /**
   * Measurement is above the valid range.
   * @public
   */
  OUT_OF_RANGE_HIGH_CONDITION = 4114,
  /**
   * Measurement is below the valid range.
   * @public
   */
  OUT_OF_RANGE_LOW_CONDITION = 4115,
  /**
   * Fault condition detected.
   * @public
   */
  FAULT = 4116,
}

/**
 * The operating condition of the fan. Choose between on, off, or automatic (based on temperature).
 * @public
 */
export declare enum FanMode {
  /**
   * Turns the fan off.
   * @public
   */
  OFF = 1,
  /**
   * Turns the fan on.
   * @public
   */
  ON = 2,
  /**
   * The fan will be automatically controlled based on temperature.
   * @public
   */
  AUTO = 3,
}

declare abstract class FirmwareUpgradeBase extends PhidgetChannel {}

/** @public */
export declare class FrequencyCounter extends FrequencyCounterBase {
  setFrequencyCutoff(frequencyCutoff: number): void;
  reset(): void;
}

declare abstract class FrequencyCounterBase extends PhidgetChannel {
  /**
   * **FrequencyChange** event
   *  * `frequency` - The calculated frequency of the signal
   * ---
   * The most recent frequency value the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   */
  onFrequencyChange: ((frequency: number) => void) | null;

  /**
   * **CountChange** event
   *  * `counts` - The pulse count of the signal
   *  * `timeChange` - The change in elapsed time since the last change
   * ---
   * The most recent values the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   */
  onCountChange: ((counts: number, timeChange: number) => void) | null;

  /**
   * The Frequency Counter class is used to measure the frequency of pulses in an electronic signal, or to count the pulses in the signal. Such signals can come from other electronics, or certain sensors that have a pulse output.
   * @public
   */
  constructor();

  /**
   * The most recent count value the channel has reported.
   *
   * *   The count represents the total number of pulses since the the channel was opened, or last reset.
   * @throws {@link PhidgetError}
   */
  get count(): number;
  /**
   * Enables or disables the channel.
   *
   * *   When a channel is disabled, it will not longer register counts, therefore the `timeElapsed` and `count` will not be updated until the channel is re-enabled.
   * @throws {@link PhidgetError}
   */
  get enabled(): boolean;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `CountChange` / `FrequencyChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * Determines the signal type that the channel responds to.
   *
   * *   The filter type is chosen based on the type of input signal. See the `phidget22.FrequencyFilterType` entry under Enumerations for more information.
   * @throws {@link PhidgetError}
   */
  get filterType(): Enum.FrequencyFilterType;
  /**
   * The most recent frequency value that the channel has reported.
   *
   * *   This value will always be between 0 Hz and `maxFrequency`.
   * @throws {@link PhidgetError}
   */
  get frequency(): number;
  /**
   * The maximum value the `FrequencyChange` event will report.
   * @throws {@link PhidgetError}
   */
  get maxFrequency(): number;
  /**
   * The frequency at which zero hertz is assumed.
   *
   * *   This means any frequency at or below the `frequencyCutoff` value will be reported as 0 Hz.
   *
   * *   This property is stored locally, so other users who have this Phidget open over a network connection won't see the effects of your selected cutoff.
   * @throws {@link PhidgetError}
   */
  get frequencyCutoff(): number;
  set frequencyCutoff(frequencyCutoff: number);
  /**
   * The minimum value that `frequencyCutoff` can be set to.
   * @throws {@link PhidgetError}
   */
  get minFrequencyCutoff(): number;
  /**
   * The maximum value that `frequencyCutoff` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxFrequencyCutoff(): number;
  /**
   * The input polarity mode for your channel.
   *
   * *   See your device's User Guide for more information about what value to chooose for the `inputMode`
   * @throws {@link PhidgetError}
   */
  get inputMode(): Enum.InputMode;
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   */
  get powerSupply(): Enum.PowerSupply;
  /**
   * The amount of time the frequency counter has been enabled for.
   *
   * *   This property complements `count`, the total number of pulses detected since the channel was opened, or last reset.
   * @throws {@link PhidgetError}
   */
  get timeElapsed(): number;
  /**
   * The most recent count value the channel has reported.
   *
   * *   The count represents the total number of pulses since the the channel was opened, or last reset.
   * @returns The count value
   * @throws {@link PhidgetError}
   */
  getCount(): number;
  /**
   * Enables or disables the channel.
   *
   * *   When a channel is disabled, it will not longer register counts, therefore the `timeElapsed` and `count` will not be updated until the channel is re-enabled.
   * @throws {@link PhidgetError}
   * @param enabled - The enabled value
   */
  setEnabled(enabled: boolean): Promise<void>;
  /**
   * Enables or disables the channel.
   *
   * *   When a channel is disabled, it will not longer register counts, therefore the `timeElapsed` and `count` will not be updated until the channel is re-enabled.
   * @returns The enabled value
   * @throws {@link PhidgetError}
   */
  getEnabled(): boolean;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `CountChange` / `FrequencyChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `CountChange` / `FrequencyChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * Determines the signal type that the channel responds to.
   *
   * *   The filter type is chosen based on the type of input signal. See the `phidget22.FrequencyFilterType` entry under Enumerations for more information.
   * @returns The filter value
   * @throws {@link PhidgetError}
   */
  getFilterType(): Enum.FrequencyFilterType;
  /**
   * Determines the signal type that the channel responds to.
   *
   * *   The filter type is chosen based on the type of input signal. See the `phidget22.FrequencyFilterType` entry under Enumerations for more information.
   * @throws {@link PhidgetError}
   * @param filterType - The filter value
   */
  setFilterType(filterType: Enum.FrequencyFilterType): Promise<void>;
  /**
   * The most recent frequency value that the channel has reported.
   *
   * *   This value will always be between 0 Hz and `maxFrequency`.
   * @returns The frequency value
   * @throws {@link PhidgetError}
   */
  getFrequency(): number;
  /**
   * The maximum value the `FrequencyChange` event will report.
   * @returns The frequency value
   * @throws {@link PhidgetError}
   */
  getMaxFrequency(): number;
  /**
   * The frequency at which zero hertz is assumed.
   *
   * *   This means any frequency at or below the `frequencyCutoff` value will be reported as 0 Hz.
   *
   * *   This property is stored locally, so other users who have this Phidget open over a network connection won't see the effects of your selected cutoff.
   * @returns The frequency cutoff value
   * @throws {@link PhidgetError}
   */
  getFrequencyCutoff(): number;
  /**
   * The frequency at which zero hertz is assumed.
   *
   * *   This means any frequency at or below the `frequencyCutoff` value will be reported as 0 Hz.
   *
   * *   This property is stored locally, so other users who have this Phidget open over a network connection won't see the effects of your selected cutoff.
   * @throws {@link PhidgetError}
   * @param frequencyCutoff - The frequency cutoff value
   */
  abstract setFrequencyCutoff(frequencyCutoff: number): void;
  /**
   * The minimum value that `frequencyCutoff` can be set to.
   * @returns The frequency value
   * @throws {@link PhidgetError}
   */
  getMinFrequencyCutoff(): number;
  /**
   * The maximum value that `frequencyCutoff` can be set to.
   * @returns The frequency value
   * @throws {@link PhidgetError}
   */
  getMaxFrequencyCutoff(): number;
  /**
   * The input polarity mode for your channel.
   *
   * *   See your device's User Guide for more information about what value to chooose for the `inputMode`
   * @returns The input mode value
   * @throws {@link PhidgetError}
   */
  getInputMode(): Enum.InputMode;
  /**
   * The input polarity mode for your channel.
   *
   * *   See your device's User Guide for more information about what value to chooose for the `inputMode`
   * @throws {@link PhidgetError}
   * @param inputMode - The input mode value
   */
  setInputMode(inputMode: Enum.InputMode): Promise<void>;
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @returns The power supply value
   * @throws {@link PhidgetError}
   */
  getPowerSupply(): Enum.PowerSupply;
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   * @param powerSupply - The power supply value
   */
  setPowerSupply(powerSupply: Enum.PowerSupply): Promise<void>;
  /**
   * Resets the `count` and `timeElapsed`.
   *
   * *   For best results, reset should be called when the channel is disabled.
   * @throws {@link PhidgetError}
   */
  abstract reset(): void;
  /**
   * The amount of time the frequency counter has been enabled for.
   *
   * *   This property complements `count`, the total number of pulses detected since the channel was opened, or last reset.
   * @returns The time value
   * @throws {@link PhidgetError}
   */
  getTimeElapsed(): number;
}

/**
 * Type of filter used on the frequency input
 * @public
 */
export declare enum FrequencyFilterType {
  /**
   * Frequency is calculated from the number of times the signal transitions from a negative voltage to a positive voltage and back again.
   * @public
   */
  ZERO_CROSSING = 1,
  /**
   * Frequency is calculated from the number of times the signal transitions from a logic false to a logic true and back again.
   * @public
   */
  LOGIC_LEVEL = 2,
}

declare abstract class GenericBase extends PhidgetChannel {}

/**
 * NMEA GGA Sentence
 * @public
 */
declare interface GPGGA {
  /**
   * Latitude
   */
  latitude: number;
  /**
   * Longitude
   */
  longitude: number;
  /**
   * GPS quality indicator
   */
  fixQuality: number;
  /**
   * Number of satellites in use
   */
  numSatellites: number;
  /**
   * Horizontal dilution of precision
   */
  horizontalDilution: number;
  /**
   * Mean sea level altitude
   */
  altitude: number;
  /**
   * Geoidal separation
   */
  heightOfGeoid: number;
}

/**
 * NMEA GSA sentence
 * @public
 */
declare interface GPGSA {
  /**
   * Manual/Automatic mode (A = auto, M = manual)
   */
  mode: string;
  /**
   * Fix type (1 = no fix, 2 = 2D, 3 = 3D)
   */
  fixType: number;
  /**
   * Satellite IDs
   */
  satUsed: [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
  /**
   * Position dilution of precision
   */
  posnDilution: number;
  /**
   * Horizontal dilution of precision
   */
  horizDilution: number;
  /**
   * Vertical dilution of precision
   */
  vertDilution: number;
}

/**
 * NMEA RMC sentence
 * @public
 */
declare interface GPRMC {
  /**
   * Status of the data
   */
  status: string;
  /**
   * Latitude
   */
  latitude: number;
  /**
   * Longitude
   */
  longitude: number;
  /**
   * Speed over ground in knots
   */
  speedKnots: number;
  /**
   * Heading over ground in degrees
   */
  heading: number;
  /**
   * Magnetic variation
   */
  magneticVariation: number;
  /**
   * Mode indicator
   */
  mode: string;
}

/** @public */
export declare class GPS extends GPSBase {
  getDateAndTime(): Date;
}

declare abstract class GPSBase extends PhidgetChannel {
  /**
   * **PositionChange** event
   *  * `latitude` - The current latitude
   *  * `longitude` - The current longitude
   *  * `altitude` - The current altitude
   * ---
   * The most recent values the channel has measured will be reported in this event, which occurs when the GPS position changes.
   */
  onPositionChange:
    | ((latitude: number, longitude: number, altitude: number) => void)
    | null;

  /**
   * **HeadingChange** event
   *  * `heading` - The current heading
   *  * `velocity` - The current velocity
   * ---
   * The most recent heading and velocity values will be reported in this event, which occurs when the GPS heading changes.
   */
  onHeadingChange: ((heading: number, velocity: number) => void) | null;

  /**
   * **PositionFixStateChange** event
   *  * `positionFixState` - The state of the position fix. True indicates a fix is obtained. False indicates no fix found.
   * ---
   * Occurs when a position fix is obtained or lost.
   */
  onPositionFixStateChange: ((positionFixState: boolean) => void) | null;

  /**
   * The GPS class is used to configure and gather data from Phidgets GPS sensors, and gives you access to variables from GPS data packets.
   * @public
   */
  constructor();

  /**
   * The altitude above mean sea level in meters.
   * @throws {@link PhidgetError}
   */
  get altitude(): number;
  /**
   * The UTC date of the last received position.
   * @throws {@link PhidgetError}
   */
  get date(): Struct.GPSDate;
  /**
   * The current date and time in UTC
   * @throws {@link PhidgetError}
   */
  get dateAndTime(): Date;
  /**
   * The current true course over ground of the GPS
   * @throws {@link PhidgetError}
   */
  get heading(): number;
  /**
   * The latitude of the GPS in degrees
   * @throws {@link PhidgetError}
   */
  get latitude(): number;
  /**
   * The longitude of the GPS.
   * @throws {@link PhidgetError}
   */
  get longitude(): number;
  /**
   * The NMEA data structure.
   * @throws {@link PhidgetError}
   */
  get NMEAData(): Struct.NMEAData;
  /**
   * The status of the position fix
   *
   * *   True if a fix is available and latitude, longitude, and altitude can be read. False if the fix is not available.
   * @throws {@link PhidgetError}
   */
  get positionFixState(): boolean;
  /**
   * The current UTC time of the GPS
   * @throws {@link PhidgetError}
   */
  get time(): Struct.GPSTime;
  /**
   * The current speed over ground of the GPS.
   * @throws {@link PhidgetError}
   */
  get velocity(): number;
  /**
   * The altitude above mean sea level in meters.
   * @returns Altitude of the GPS
   * @throws {@link PhidgetError}
   */
  getAltitude(): number;
  /**
   * The UTC date of the last received position.
   * @returns Date of last position
   * @throws {@link PhidgetError}
   */
  getDate(): Struct.GPSDate;
  /**
   * The current date and time in UTC
   * @returns Current date and time
   * @throws {@link PhidgetError}
   */
  abstract getDateAndTime(): Date;
  /**
   * The current true course over ground of the GPS
   * @returns Heading of the GPS
   * @throws {@link PhidgetError}
   */
  getHeading(): number;
  /**
   * The latitude of the GPS in degrees
   * @returns Latitude of the GPS
   * @throws {@link PhidgetError}
   */
  getLatitude(): number;
  /**
   * The longitude of the GPS.
   * @returns Longtidue of the GPS
   * @throws {@link PhidgetError}
   */
  getLongitude(): number;
  /**
   * The NMEA data structure.
   * @returns NMEA Data structure
   * @throws {@link PhidgetError}
   */
  getNMEAData(): Struct.NMEAData;
  /**
   * The status of the position fix
   *
   * *   True if a fix is available and latitude, longitude, and altitude can be read. False if the fix is not available.
   * @returns Status of the position fix
   * @throws {@link PhidgetError}
   */
  getPositionFixState(): boolean;
  /**
   * The current UTC time of the GPS
   * @returns Current time
   * @throws {@link PhidgetError}
   */
  getTime(): Struct.GPSTime;
  /**
   * The current speed over ground of the GPS.
   * @returns Velocity of the GPS
   * @throws {@link PhidgetError}
   */
  getVelocity(): number;
}

/**
 * GPS Date in UTC
 * @public
 */
declare interface GPSDate {
  /**
   * Day (1-31)
   */
  tm_mday: number;
  /**
   * Month (1-12)
   */
  tm_mon: number;
  /**
   * Year
   */
  tm_year: number;
}

/**
 * The GPS time in UTC
 * @public
 */
declare interface GPSTime {
  /**
   * Milliseconds
   */
  tm_ms: number;
  /**
   * Seconds
   */
  tm_sec: number;
  /**
   * Minutes
   */
  tm_min: number;
  /**
   * Hours
   */
  tm_hour: number;
}

/**
 * NMEA VTG sentence
 * @public
 */
declare interface GPVTG {
  /**
   * True heading over ground
   */
  trueHeading: number;
  /**
   * Magnetic heading
   */
  magneticHeading: number;
  /**
   * Speed over ground in knots
   */
  speedKnots: number;
  /**
   * Speed over ground in km/h
   */
  speed: number;
  /**
   * Mode indicator
   */
  mode: string;
}

/** @public */
export declare class Gyroscope extends GyroscopeBase {}

declare abstract class GyroscopeBase extends PhidgetChannel {
  /**
   * **AngularRateUpdate** event
   *  * `angularRate` - The angular rate values
   *  * `timestamp` - The timestamp value
   * ---
   * The most recent angular rate and timestamp values the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   */
  onAngularRateUpdate:
    | ((
        angularRate: readonly [number, number, number],
        timestamp: number
      ) => void)
    | null;

  /**
   * The Gyroscope class reports rotational data from the Phidget containing a gyroscope chip for use in your code. Phidget gyroscopes usually have multiple sensors, each oriented in a different axis, so multiple dimensions of heading can be recorded.
   *
   * If the Phidget you're using also has an accelerometer and a magnetometer, you may want to use the Spatial classin order to get all of the data at the same time, in a single event.
   * @public
   */
  constructor();

  /**
   * The most recent angular rate value that the channel has reported.
   *
   * *   This value will always be between `minAngularRate` and `maxAngularRate`.
   * @throws {@link PhidgetError}
   */
  get angularRate(): readonly [number, number, number];
  /**
   * The minimum value the `AngularRateUpdate` event will report.
   * @throws {@link PhidgetError}
   */
  get minAngularRate(): readonly [number, number, number];
  /**
   * The maximum value the `AngularRateUpdate` event will report.
   * @throws {@link PhidgetError}
   */
  get maxAngularRate(): readonly [number, number, number];
  /**
   * The number of axes the channel can measure angular rate on.
   *
   * *   See your device's User Guide for more information about the number of axes and their orientation.
   * @throws {@link PhidgetError}
   */
  get axisCount(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `AngularRateUpdate` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   */
  get heatingEnabled(): boolean;

  /**
   * The most recent timestamp value that the channel has reported. This is an extremely accurate time measurement streamed from the device.
   *
   * *   If your application requires a time measurement, you should use this value over a local software timestamp.
   * @throws {@link PhidgetError}
   */
  get timestamp(): number;
  /**
   * The most recent angular rate value that the channel has reported.
   *
   * *   This value will always be between `minAngularRate` and `maxAngularRate`.
   * @returns The last reported angular rate
   * @throws {@link PhidgetError}
   */
  getAngularRate(): readonly [number, number, number];
  /**
   * The minimum value the `AngularRateUpdate` event will report.
   * @returns The angular rate values
   * @throws {@link PhidgetError}
   */
  getMinAngularRate(): readonly [number, number, number];
  /**
   * The maximum value the `AngularRateUpdate` event will report.
   * @returns The angular rate values
   * @throws {@link PhidgetError}
   */
  getMaxAngularRate(): readonly [number, number, number];
  /**
   * The number of axes the channel can measure angular rate on.
   *
   * *   See your device's User Guide for more information about the number of axes and their orientation.
   * @returns Axis count value
   * @throws {@link PhidgetError}
   */
  getAxisCount(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `AngularRateUpdate` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `AngularRateUpdate` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @returns Whether self-heating temperature stabilization is enabled
   * @throws {@link PhidgetError}
   */
  getHeatingEnabled(): boolean;
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   * @param heatingEnabled - Whether self-heating temperature stabilization is enabled
   */
  setHeatingEnabled(heatingEnabled: boolean): Promise<void>;

  /**
   * The most recent timestamp value that the channel has reported. This is an extremely accurate time measurement streamed from the device.
   *
   * *   If your application requires a time measurement, you should use this value over a local software timestamp.
   * @returns The timestamp value
   * @throws {@link PhidgetError}
   */
  getTimestamp(): number;
  /**
   * Re-zeros the gyroscope in 1-2 seconds.
   *
   * *   The device must be stationary when zeroing.
   * *   The angular rate will be reported as 0.0°/s while zeroing.
   * *   Zeroing the gyroscope is a method of compensating for the drift that is inherent to all gyroscopes. See your device's User Guide for more information on dealing with drift.
   * @throws {@link PhidgetError}
   */
  zero(): Promise<void>;
}

/** @public */
export declare class Hub extends HubBase {
  getPortMode(port: number): Promise<HubPortMode>;
  getPortPower(port: number): Promise<boolean>;
}

declare abstract class HubBase extends PhidgetChannel {
  /**
   * The hub class allows you to control power to VINT hub ports.
   * @public
   */
  constructor();

  /**
   * Gets the VINT Hub Port power state
   * @returns The power state
   * @throws {@link PhidgetError}
   * @param port - The Hub port
   */
  abstract getPortPower(port: number): Promise<boolean>;
  /**
   * Controls power to the VINT Hub Ports.
   * @throws {@link PhidgetError}
   * @param port - The Hub port
   * @param state - The power state
   */
  setPortPower(port: number, state: boolean): Promise<void>;
}

/**
 * The mode of the VINT port
 * @public
 */
export declare enum HubPortMode {
  /**
   * Communicate with a smart VINT device
   * @public
   */
  VINT = 0,
  /**
   * 5V Logic-level digital input
   * @public
   */
  DIGITAL_INPUT = 1,
  /**
   * 3.3V digital output
   * @public
   */
  DIGITAL_OUTPUT = 2,
  /**
   * 0-5V voltage input for non-ratiometric sensors
   * @public
   */
  VOLTAGE_INPUT = 3,
  /**
   * 0-5V voltage input for ratiometric sensors
   * @public
   */
  VOLTAGE_RATIO_INPUT = 4,
}

/** @public */
export declare class HumiditySensor extends HumiditySensorBase {}

declare abstract class HumiditySensorBase extends PhidgetChannel {
  /**
   * **HumidityChange** event
   *  * `humidity` - The ambient relative humidity
   * ---
   * The most recent humidity value the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `humidityChangeTrigger` has been set to a non-zero value, the `HumidityChange` event will not occur until the humidity has changed by at least the `humidityChangeTrigger` value.
   */
  onHumidityChange: ((humidity: number) => void) | null;

  /**
   * The Humidity Sensor class gathers relative humidity data from the Phidget and makes it available to your code.
   *
   * If you're using a simple 0-5V sensor that does not have its own firmware, use the VoltageInput or VoltageRatioInput class instead, as specified for your device.
   * @public
   */
  constructor();

  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `HumidityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `HumidityChange` events can also be affected by the `humidityChangeTrigger`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * The most recent humidity value that the channel has reported.
   *
   * *   This value will always be between `minHumidity` and `maxHumidity`.
   * @throws {@link PhidgetError}
   */
  get humidity(): number;
  /**
   * The minimum value that the `HumidityChange` event will report.
   * @throws {@link PhidgetError}
   */
  get minHumidity(): number;
  /**
   * The maximum value that the `HumidityChange` event will report.
   * @throws {@link PhidgetError}
   */
  get maxHumidity(): number;
  /**
   * The channel will not issue a `HumidityChange` event until the humidity value has changed by the amount specified by the `humidityChangeTrigger`.
   *
   * *   Setting the `humidityChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering.
   * @throws {@link PhidgetError}
   */
  get humidityChangeTrigger(): number;
  /**
   * The minimum value that `humidityChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get minHumidityChangeTrigger(): number;
  /**
   * The maximum value that `humidityChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxHumidityChangeTrigger(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `HumidityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `HumidityChange` events can also be affected by the `humidityChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `HumidityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `HumidityChange` events can also be affected by the `humidityChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * The most recent humidity value that the channel has reported.
   *
   * *   This value will always be between `minHumidity` and `maxHumidity`.
   * @returns The humidity value
   * @throws {@link PhidgetError}
   */
  getHumidity(): number;
  /**
   * The minimum value that the `HumidityChange` event will report.
   * @returns The humidity value
   * @throws {@link PhidgetError}
   */
  getMinHumidity(): number;
  /**
   * The maximum value that the `HumidityChange` event will report.
   * @returns The humidity value
   * @throws {@link PhidgetError}
   */
  getMaxHumidity(): number;
  /**
   * The channel will not issue a `HumidityChange` event until the humidity value has changed by the amount specified by the `humidityChangeTrigger`.
   *
   * *   Setting the `humidityChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getHumidityChangeTrigger(): number;
  /**
   * The channel will not issue a `HumidityChange` event until the humidity value has changed by the amount specified by the `humidityChangeTrigger`.
   *
   * *   Setting the `humidityChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering.
   * @throws {@link PhidgetError}
   * @param humidityChangeTrigger - The change trigger value
   */
  setHumidityChangeTrigger(humidityChangeTrigger: number): Promise<void>;
  /**
   * The minimum value that `humidityChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMinHumidityChangeTrigger(): number;
  /**
   * The maximum value that `humidityChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMaxHumidityChangeTrigger(): number;
}

/**
 * The selected polarity mode for the digital input
 * @public
 */
export declare enum InputMode {
  /**
   * For interfacing NPN digital sensors
   * @public
   */
  NPN = 1,
  /**
   * For interfacing PNP digital sensors
   * @public
   */
  PNP = 2,
}

/** @public */
export declare class IR extends IRBase {
  transmit(code: string, ci: Partial<IRCodeInfo>): Promise<void>;
  transmitRaw(
    data: readonly number[],
    carrierFrequency?: number,
    dutyCycle?: number,
    gap?: number
  ): Promise<void>;
  getLastCode(): {
    code: string;
    bitCount: number;
  };
  getLastLearnedCode(): {
    code: string;
    codeInfo: IRCodeInfo;
  };
}

declare abstract class IRBase extends PhidgetChannel {
  /**
   * **Code** event
   *  * `code` - The code string
   *  * `bitCount` - The length of the received code in bits
   *  * `isRepeat` - 'true' if a repeat is detected
   * ---
   * This event is fired every time a code is received and correctly decoded.
   *
   * *   The code is represented by a hexadecimal string (array of bytes) with a length of 1/4 of `bitCount`.
   * *   The MSBit is considered to be the first bit received and will be in array index 0 of `code`
   * *   Repeat will be true if a repeat is detected (either timing wise or via a repeat code)
   *
   * *   False repeasts can happen if two separate button presses happen close together
   */
  onCode: ((code: string, bitCount: number, isRepeat: boolean) => void) | null;

  /**
   * **Learn** event
   *  * `code` - The code string
   *  * `codeInfo` - Contains the data for characterizing the code.
   * ---
   * This event fires when a button has been held down long enough for the channel to have learned the CodeInfo values
   *
   * *   A code is usually learned after 1 second, or after 4 repeats.
   */
  onLearn: ((code: string, codeInfo: Struct.IRCodeInfo) => void) | null;

  /**
   * **RawData** event
   *  * `data` - The data being received
   * ---
   * This event will fire every time the channel gets more data
   *
   * *   This will happen at most once every 8ms.
   */
  onRawData: ((data: readonly number[]) => void) | null;

  /**
   * The Infrared Remote class lets you read and transmit command codes from infrared remotes that the majority of household appliances use. You can use this class to construct and transmit commands from scratch, or learn and retransmit codes from the remote controller of your appliance.
   * @public
   */
  constructor();

  /**
   * The value for a long space in raw data
   */
  static get RAW_DATA_LONG_SPACE(): number;
  /**
   * Maximum bit count for sent / received data
   */
  static get MAX_CODE_BIT_COUNT(): number;
  /**
   * Maximum bit count for sent / received data
   */
  static get MAX_CODE_STRING_LENGTH(): number;

  /**
   * The last code the channel has received.
   *
   * *   The code is represented by a hexadecimal string (array of bytes).
   * @returns
   * 	- code: The last received code
   * 	- bitCount: length of the received code in bits
   * @throws {@link PhidgetError}
   */
  abstract getLastCode(): {
    code: string;
    bitCount: number;
  };
  /**
   * The last code the channel has learned.
   *
   * *   The code is represented by a hexadecimal string (array of bytes).
   * *   The `codeInfo` structure holds data that describes the learned code.
   * @returns
   * 	- code: The last learned code
   * 	- codeInfo: contains the data for characterizing the code
   * @throws {@link PhidgetError}
   */
  abstract getLastLearnedCode(): {
    code: string;
    codeInfo: Struct.IRCodeInfo;
  };
  /**
   * Transmits a code
   *
   * *   `code` data is transmitted MSBit first.
   * *   MSByte is in array index 0 of `code`
   * *   LSBit is right justified, therefore, MSBit may be in bit position 0-7 (of array index 0) depending on the bit count.
   * @throws {@link PhidgetError}
   * @param code - code data
   * @param codeInfo - contains the data for characterizing the code.
   */
  abstract transmit(code: string, codeInfo: Struct.IRCodeInfo): Promise<void>;
  /**
   * Transmits **raw** data as a series of pulses and spaces.
   *
   * *   `data` must start and end with a pulse.
   *     *   Each element is a positive time in μs
   * *   `dataLength` has a maximum length of 200, however, streams should be kept must shorter than this (less than 100ms between gaps).
   *
   * *   `dataLength` must be an odd number
   *
   * *   Leave `carrierFrequency` as 0 for default.
   *
   * *   `carrierFrequency` has a range of 10kHz - 1MHz
   *
   * *   Leave `dutyCycle` as 0 for default
   *
   * *   `dutyCycle` can have a value between 0.1 and 0.5
   *
   * *   Specifying a `gap` will guarantee a gap time (no transmitting) after data is sent.
   *
   * *   gap time is in μs
   * *   gap time can be set to 0
   * @throws {@link PhidgetError}
   * @param data - data to send.
   * @param carrierFrequency - carrier frequency in Hz
   * @param dutyCycle - the duty cycle
   * @param gap - the gap time.
   */
  abstract transmitRaw(
    data: readonly number[],
    carrierFrequency: number,
    dutyCycle: number,
    gap: number
  ): Promise<void>;
  /**
   * Transmits a repeat of the last transmited code.
   *
   * *   Depending on the CodeInfo structure, this may be a retransmission of the code itself, or there may be a special repeat code.
   * @throws {@link PhidgetError}
   */
  transmitRepeat(): Promise<void>;
}

/**
 * Describes the encoding technique used for the code
 * @public
 */
export declare enum IRCodeEncoding {
  /**
   * Unknown - the default value
   * @public
   */
  UNKNOWN = 1,
  /**
   * Space encoding, or Pulse Distance Modulation
   * @public
   */
  SPACE = 2,
  /**
   * Pulse encoding, or Pulse Width Modulation
   * @public
   */
  PULSE = 3,
  /**
   * Bi-Phase, or Manchester encoding
   * @public
   */
  BI_PHASE = 4,
  /**
   * RC5 - a type of Bi-Phase encoding
   * @public
   */
  RC5 = 5,
  /**
   * RC6 - a type of Bi-Phase encoding
   * @public
   */
  RC6 = 6,
}

/**
 * The PhidgetIR CodeInfo structure contains all information needed to transmit a code, apart from the actual code data.
 *
 * *   Some values can be set to null to select defaults.
 * @public
 */
declare interface IRCodeInfo {
  /**
   * Number of bits in the code
   */
  bitCount: number;
  /**
   * Encoding technique used to encode the data
   */
  encoding: Enum.IRCodeEncoding;
  /**
   * Constant or Variable length encoding
   */
  length: Enum.IRCodeLength;
  /**
   * Gap time in microseconds
   */
  gap: number;
  /**
   * Trail time in microseconds. Can be zero for no trail
   */
  trail: number;
  /**
   * Header pulse and space. Can be zero for no header
   */
  header: [number, number];
  /**
   * Pulse and Space times to represent a '1' bit, in microseconds
   */
  one: [number, number];
  /**
   * Pulse and Space times to represent a '0' bit, in microseconds
   */
  zero: [number, number];
  /**
   * A series or pulse and space times to represent the repeat code. Start and end with pulses and null terminate. Set to 0 for none.
   */
  repeat: number[];
  /**
   * Minium number of times to repeat a code on transmit
   */
  minRepeat: number;
  /**
   * Duty Cycle in percent (0.1-0.5). Defaults to 0.33
   */
  dutyCycle: number;
  /**
   * Carrier frequency in Hz - defaults to 38kHz
   */
  carrierFrequency: number;
  /**
   * Bit toggles, which are applied to the code after each transmit
   */
  toggleMask: string;
}

/**
 * The length type of the bitstream and gaps
 * @public
 */
export declare enum IRCodeLength {
  /**
   * Unknown - the default value
   * @public
   */
  UNKNOWN = 1,
  /**
   * Constant - the bitstream and gap length is constant
   * @public
   */
  CONSTANT = 2,
  /**
   * Variable - the bitstream has a variable length with a constant gap
   * @public
   */
  VARIABLE = 3,
}

/**
 * The JavaScript library version
 * @public
 */
export declare const JSLibraryVersion = "[VI]{version} - {date}[/VI]";

/** @public */
export declare class LCD extends LCDBase {
  setAutoFlush(autoFlush: boolean): void;
  setCharacterBitmap(
    font: LCDFont,
    character: string,
    bitmap: number[]
  ): Promise<void>;
  getMaxCharacters(font: LCDFont): number;
  getFontSize(font: LCDFont): {
    width: number;
    height: number;
  };
  writeBitmap(
    xpos: number,
    ypos: number,
    xsize: number,
    ysize: number,
    bitmap: number[]
  ): Promise<void>;
}

declare abstract class LCDBase extends PhidgetChannel {
  /**
   * The LCD class allows you to control various liquid crystal displays. It offers control of displayed text as well as screen settings and custom character creation.
   * @public
   */
  constructor();

  /**
   * Set to true to automatically flush the LCD screen after every message that writes to the LCD.
   * @throws {@link PhidgetError}
   */
  get autoFlush(): boolean;
  set autoFlush(autoFlush: boolean);
  /**
   * The `backlight` affects the brightness of the LCD screen.
   *
   * *   `backlight` is bounded by `minBacklight` and `maxBacklight`.
   * @throws {@link PhidgetError}
   */
  get backlight(): number;
  /**
   * The minimum value that `backlight` can be set to.
   * @throws {@link PhidgetError}
   */
  get minBacklight(): number;
  /**
   * The maximum value that `backlight` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxBacklight(): number;
  /**
   * Contrast level of the text or graphic pixels.
   *
   * *   A higher contrast will make the image darker.
   * *   `contrast` is bounded by `minContrast` and `maxContrast`.
   * @throws {@link PhidgetError}
   */
  get contrast(): number;
  /**
   * The minimum value that `contrast` can be set to.
   * @throws {@link PhidgetError}
   */
  get minContrast(): number;
  /**
   * The maximum value that `contrast` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxContrast(): number;
  /**
   * When `cursorBlink` is true, the device will cause the cursor to periodically blink.
   * @throws {@link PhidgetError}
   */
  get cursorBlink(): boolean;
  /**
   * When `cursorOn` is true, the device will underline to the cursor position.
   * @throws {@link PhidgetError}
   */
  get cursorOn(): boolean;
  /**
   * The frame buffer that is currently being used.
   *
   * *   Commands sent to the device are performed on this buffer.
   * @throws {@link PhidgetError}
   */
  get frameBuffer(): number;
  /**
   * The height of the LCD screen attached to the channel.
   * @throws {@link PhidgetError}
   */
  get height(): number;
  /**
   * The size of the LCD screen attached to the channel.
   * @throws {@link PhidgetError}
   */
  get screenSize(): Enum.LCDScreenSize;
  /**
   * The on/off state of `sleeping`. Putting the device to sleep turns off the display and backlight in order to save power.
   *
   * *   The device will still take commands while asleep, and will wake up if the screen is flushed, or if the contrast or backlight are changed.
   * *   When the device wakes up, it will return to its last known state, taking into account any changes that happened while asleep.
   * @throws {@link PhidgetError}
   */
  get sleeping(): boolean;
  /**
   * The width of the LCD screen attached to the channel.
   * @throws {@link PhidgetError}
   */
  get width(): number;
  /**
   * Set to true to automatically flush the LCD screen after every message that writes to the LCD.
   * @returns Allows setting the LCD to flush the screen automatically
   * @throws {@link PhidgetError}
   */
  getAutoFlush(): boolean;
  /**
   * Set to true to automatically flush the LCD screen after every message that writes to the LCD.
   * @throws {@link PhidgetError}
   * @param autoFlush - Allows setting the LCD to flush the screen automatically
   */
  abstract setAutoFlush(autoFlush: boolean): void;
  /**
   * The `backlight` affects the brightness of the LCD screen.
   *
   * *   `backlight` is bounded by `minBacklight` and `maxBacklight`.
   * @returns The backlight value
   * @throws {@link PhidgetError}
   */
  getBacklight(): number;
  /**
   * The `backlight` affects the brightness of the LCD screen.
   *
   * *   `backlight` is bounded by `minBacklight` and `maxBacklight`.
   * @throws {@link PhidgetError}
   * @param backlight - The backlight value
   */
  setBacklight(backlight: number): Promise<void>;
  /**
   * The minimum value that `backlight` can be set to.
   * @returns The backlight value
   * @throws {@link PhidgetError}
   */
  getMinBacklight(): number;
  /**
   * The maximum value that `backlight` can be set to.
   * @returns The backlight value
   * @throws {@link PhidgetError}
   */
  getMaxBacklight(): number;
  /**
   * Create a bitmap and select a character to represent it. Now, when you use the specific character, the bitmap will show in it's place.
   * @throws {@link PhidgetError}
   * @param font - The font the character belongs to
   * @param character - The character to be changed, in a null-terminated string.
   * @param bitmap - Bitmap array
   */
  abstract setCharacterBitmap(
    font: Enum.LCDFont,
    character: string,
    bitmap: readonly number[]
  ): Promise<void>;
  /**
   * The maximum number of characters that can fit on the frame buffer for the specified font.
   * @returns The maximum number of characters for the font
   * @throws {@link PhidgetError}
   * @param font - The specified font
   */
  abstract getMaxCharacters(font: Enum.LCDFont): number;
  /**
   * Clears all pixels in the current frame buffer.
   *
   * *   Changes made to the frame buffer must be flushed to the LCD screen using `flush()`.
   * @throws {@link PhidgetError}
   */
  clear(): Promise<void>;
  /**
   * Contrast level of the text or graphic pixels.
   *
   * *   A higher contrast will make the image darker.
   * *   `contrast` is bounded by `minContrast` and `maxContrast`.
   * @returns The contrast value
   * @throws {@link PhidgetError}
   */
  getContrast(): number;
  /**
   * Contrast level of the text or graphic pixels.
   *
   * *   A higher contrast will make the image darker.
   * *   `contrast` is bounded by `minContrast` and `maxContrast`.
   * @throws {@link PhidgetError}
   * @param contrast - The contrast value
   */
  setContrast(contrast: number): Promise<void>;
  /**
   * The minimum value that `contrast` can be set to.
   * @returns The contrast value.
   * @throws {@link PhidgetError}
   */
  getMinContrast(): number;
  /**
   * The maximum value that `contrast` can be set to.
   * @returns The contrast value.
   * @throws {@link PhidgetError}
   */
  getMaxContrast(): number;
  /**
   * Copies all pixels from a specified rectangular region to another.
   * @throws {@link PhidgetError}
   * @param sourceFramebuffer - Index number of the frame buffer containing the source rectangle
   * @param destFramebuffer - Index number of the frame buffer containing the destination rectangle
   * @param sourceX1 - X coordinate of upper left corner of source rectangle
   * @param sourceY1 - Y coordinate of upper left corner of source rectangle
   * @param sourceX2 - X coordinate of bottom right corner of source rectangle
   * @param sourceY2 - Y coordinate of bottom right corner of source rectangle
   * @param destX - X coordinate of upper left corner of destination rectangle
   * @param destY - Y coordinate of upper left corner of destination rectangle
   * @param inverted - If true, copied pixels are inverted
   */
  copy(
    sourceFramebuffer: number,
    destFramebuffer: number,
    sourceX1: number,
    sourceY1: number,
    sourceX2: number,
    sourceY2: number,
    destX: number,
    destY: number,
    inverted: boolean
  ): Promise<void>;
  /**
   * When `cursorBlink` is true, the device will cause the cursor to periodically blink.
   * @returns The cursor blink mode
   * @throws {@link PhidgetError}
   */
  getCursorBlink(): boolean;
  /**
   * When `cursorBlink` is true, the device will cause the cursor to periodically blink.
   * @throws {@link PhidgetError}
   * @param cursorBlink - The cursor blink mode
   */
  setCursorBlink(cursorBlink: boolean): Promise<void>;
  /**
   * When `cursorOn` is true, the device will underline to the cursor position.
   * @returns The cursor on value
   * @throws {@link PhidgetError}
   */
  getCursorOn(): boolean;
  /**
   * When `cursorOn` is true, the device will underline to the cursor position.
   * @throws {@link PhidgetError}
   * @param cursorOn - The cursor on value
   */
  setCursorOn(cursorOn: boolean): Promise<void>;
  /**
   * Draws a straight line in the current frame buffer between two specified points
   *
   * *   Changes made to the frame buffer must be flushed to the LCD screen using `flush()`.
   * @throws {@link PhidgetError}
   * @param x1 - X coordinate of the first point
   * @param y1 - Y coordinate of the first point
   * @param x2 - X coordinate of the second point
   * @param y2 - Y coordinate of the second point
   */
  drawLine(x1: number, y1: number, x2: number, y2: number): Promise<void>;
  /**
   * Draws, erases, or inverts a single specified pixel.
   *
   * *   Changes made to the frame buffer must be flushed to the LCD screen using `flush()`.
   * @throws {@link PhidgetError}
   * @param x - The X coordinate of the pixel
   * @param y - The Y coordinate of the pixel
   * @param pixelState - The new state of the pixel.
   */
  drawPixel(
    x: number,
    y: number,
    pixelState: Enum.LCDPixelState
  ): Promise<void>;
  /**
   * Draws a rectangle in the current frame buffer using the specified points
   *
   * *   Changes made to the frame buffer must be flushed to the LCD screen using `flush()`.
   * @throws {@link PhidgetError}
   * @param x1 - The X coordinate of the top-left corner of the rectangle
   * @param y1 - The Y coordinate of the top-left corner of the rectangle
   * @param x2 - The X coordinate of the bottom-right corner of the rectangle
   * @param y2 - The Y coordinate of the bottom-right corner of the rectangle
   * @param filled - If true, the rectangle will be solid. If false, just a single pixel outline.
   * @param inverted - If true, clears the region instead of drawing
   */
  drawRect(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    filled: boolean,
    inverted: boolean
  ): Promise<void>;
  /**
   * Flushes the buffered LCD contents to the LCD screen.
   * @throws {@link PhidgetError}
   */
  flush(): Promise<void>;
  /**
   * Gets the size of the specified font.
   * @returns
   * 	- width: The width of the font
   * 	- height: The height of the font
   * @throws {@link PhidgetError}
   * @param font - The specified font
   */
  abstract getFontSize(font: Enum.LCDFont): {
    width: number;
    height: number;
  };
  /**
   * Sets the size of the specified font.
   * @throws {@link PhidgetError}
   * @param font - The specified font
   * @param width - The width of the font
   * @param height - The height of the font
   */
  setFontSize(font: Enum.LCDFont, width: number, height: number): Promise<void>;
  /**
   * The frame buffer that is currently being used.
   *
   * *   Commands sent to the device are performed on this buffer.
   * @returns The current frame buffer
   * @throws {@link PhidgetError}
   */
  getFrameBuffer(): number;
  /**
   * The frame buffer that is currently being used.
   *
   * *   Commands sent to the device are performed on this buffer.
   * @throws {@link PhidgetError}
   * @param frameBuffer - The current frame buffer
   */
  setFrameBuffer(frameBuffer: number): Promise<void>;
  /**
   * The height of the LCD screen attached to the channel.
   * @returns The height value
   * @throws {@link PhidgetError}
   */
  getHeight(): number;
  /**
   * Initializes the Text LCD display
   * @throws {@link PhidgetError}
   */
  initialize(): Promise<void>;
  /**
   * Writes the specified frame buffer to flash memory
   *
   * *   Use sparingly. The flash memory is only designed to be written to 10,000 times before it may become unusable. This method can only be called one time each time the channel is opened.
   * @throws {@link PhidgetError}
   * @param frameBuffer - The frame buffer to be saved
   */
  saveFrameBuffer(frameBuffer: number): Promise<void>;
  /**
   * The size of the LCD screen attached to the channel.
   * @returns The screen size
   * @throws {@link PhidgetError}
   */
  getScreenSize(): Enum.LCDScreenSize;
  /**
   * The size of the LCD screen attached to the channel.
   * @throws {@link PhidgetError}
   * @param screenSize - The screen size
   */
  setScreenSize(screenSize: Enum.LCDScreenSize): Promise<void>;
  /**
   * The on/off state of `sleeping`. Putting the device to sleep turns off the display and backlight in order to save power.
   *
   * *   The device will still take commands while asleep, and will wake up if the screen is flushed, or if the contrast or backlight are changed.
   * *   When the device wakes up, it will return to its last known state, taking into account any changes that happened while asleep.
   * @returns The sleep status
   * @throws {@link PhidgetError}
   */
  getSleeping(): boolean;
  /**
   * The on/off state of `sleeping`. Putting the device to sleep turns off the display and backlight in order to save power.
   *
   * *   The device will still take commands while asleep, and will wake up if the screen is flushed, or if the contrast or backlight are changed.
   * *   When the device wakes up, it will return to its last known state, taking into account any changes that happened while asleep.
   * @throws {@link PhidgetError}
   * @param sleeping - The sleep status
   */
  setSleeping(sleeping: boolean): Promise<void>;
  /**
   * The width of the LCD screen attached to the channel.
   * @returns The width value
   * @throws {@link PhidgetError}
   */
  getWidth(): number;
  /**
   * Draws a bitmap to the current frame buffer at the given location.
   *
   * *   Each byte in the array represents one pixel in row-major order.
   * *   Changes made to the frame buffer must be flushed to the LCD screen using `flush()`.
   * @throws {@link PhidgetError}
   * @param xPosition - The X coordinate of the bitmap
   * @param yPosition - The Y coordinate of the bitmap
   * @param xSize - The length of each row in the bitmap
   * @param ySize - The number of rows in the bitmap
   * @param bitmap - The bitmap to be drawn
   */
  abstract writeBitmap(
    xPosition: number,
    yPosition: number,
    xSize: number,
    ySize: number,
    bitmap: readonly number[]
  ): Promise<void>;
  /**
   * Writes text to the current frame buffer at the specified location
   *
   * *   Changes made to the frame buffer must be flushed to the LCD screen using `flush()`.
   * @throws {@link PhidgetError}
   * @param font - The font of the text
   * @param xPosition - The X position of the start of the text string
   * @param yPosition - The Y position of the start of the text string
   * @param text - The text to be written
   */
  writeText(
    font: Enum.LCDFont,
    xPosition: number,
    yPosition: number,
    text: string
  ): Promise<void>;
}

/**
 * The type of font being used
 * @public
 */
export declare enum LCDFont {
  /**
   * User-defined font #1
   * @public
   */
  USER1 = 1,
  /**
   * User-defined font #2
   * @public
   */
  USER2 = 2,
  /**
   * 6px by 10px font
   * @public
   */
  DIMENSIONS_6X10 = 3,
  /**
   * 5px by 8px font
   * @public
   */
  DIMENSIONS_5X8 = 4,
  /**
   * 6px by 12px font
   * @public
   */
  DIMENSIONS_6X12 = 5,
}

/**
 * The on/off state of the pixel to be set
 * @public
 */
export declare enum LCDPixelState {
  /**
   * Pixel off state
   * @public
   */
  OFF = 0,
  /**
   * Pixel on state
   * @public
   */
  ON = 1,
  /**
   * Invert the pixel state
   * @public
   */
  INVERT = 2,
}

/**
 * Size of the attached LCD screen
 * @public
 */
export declare enum LCDScreenSize {
  /**
   * Screen size unknown
   * @public
   */
  NO_SCREEN = 1,
  /**
   * One row, eight column text screen
   * @public
   */
  DIMENSIONS_1X8 = 2,
  /**
   * Two row, eight column text screen
   * @public
   */
  DIMENSIONS_2X8 = 3,
  /**
   * One row, 16 column text screen
   * @public
   */
  DIMENSIONS_1X16 = 4,
  /**
   * Two row, 16 column text screen
   * @public
   */
  DIMENSIONS_2X16 = 5,
  /**
   * Four row, 16 column text screen
   * @public
   */
  DIMENSIONS_4X16 = 6,
  /**
   * Two row, 20 column text screen
   * @public
   */
  DIMENSIONS_2X20 = 7,
  /**
   * Four row, 20 column text screen.
   * @public
   */
  DIMENSIONS_4X20 = 8,
  /**
   * Two row, 24 column text screen
   * @public
   */
  DIMENSIONS_2X24 = 9,
  /**
   * One row, 40 column text screen
   * @public
   */
  DIMENSIONS_1X40 = 10,
  /**
   * Two row, 40 column text screen
   * @public
   */
  DIMENSIONS_2X40 = 11,
  /**
   * Four row, 40 column text screen
   * @public
   */
  DIMENSIONS_4X40 = 12,
  /**
   * 64px by 128px graphic screen
   * @public
   */
  DIMENSIONS_64X128 = 13,
}

/**
 * The forward voltage setting of the LED
 * @public
 */
export declare enum LEDForwardVoltage {
  /**
   * 1.7 V
   * @public
   */
  VOLTS_1_7 = 1,
  /**
   * 2.75 V
   * @public
   */
  VOLTS_2_75 = 2,
  /**
   * 3.2 V
   * @public
   */
  VOLTS_3_2 = 3,
  /**
   * 3.9 V
   * @public
   */
  VOLTS_3_9 = 4,
  /**
   * 4.0 V
   * @public
   */
  VOLTS_4_0 = 5,
  /**
   * 4.8 V
   * @public
   */
  VOLTS_4_8 = 6,
  /**
   * 5.0 V
   * @public
   */
  VOLTS_5_0 = 7,
  /**
   * 5.6 V
   * @public
   */
  VOLTS_5_6 = 8,
}

/**
 * The base Phidget22 library version for this release - corresponds to the C library version
 * @public
 */
export declare const LibraryVersion: string;

/** @public */
export declare class LightSensor extends LightSensorBase {}

declare abstract class LightSensorBase extends PhidgetChannel {
  /**
   * **IlluminanceChange** event
   *  * `illuminance` - The current illuminance
   * ---
   * The most recent illuminance value the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `illuminanceChangeTrigger` has been set to a non-zero value, the `IlluminanceChange` event will not occur until the illuminance has changed by at least the `illuminanceChangeTrigger` value.
   */
  onIlluminanceChange: ((illuminance: number) => void) | null;

  /**
   * The Light Sensor class gathers data from the light sensor on a Phidget board.
   *
   * If you're using a simple 0-5V sensor that does not have its own firmware, use the VoltageInput or VoltageRatioInput class instead, as specified for your device.
   * @public
   */
  constructor();

  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `IlluminanceChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `IlluminanceChange` events can also be affected by the `illuminanceChangeTrigger`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * The most recent illuminance value that the channel has reported.
   *
   * *   This value will always be between `minIlluminance` and `maxIlluminance`.
   * @throws {@link PhidgetError}
   */
  get illuminance(): number;
  /**
   * The minimum value the `IlluminanceChange` event will report.
   * @throws {@link PhidgetError}
   */
  get minIlluminance(): number;
  /**
   * The maximum value the `IlluminanceChange` event will report.
   * @throws {@link PhidgetError}
   */
  get maxIlluminance(): number;
  /**
   * The channel will not issue a `IlluminanceChange` event until the illuminance value has changed by the amount specified by the `illuminanceChangeTrigger`.
   *
   * *   Setting the `illuminanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */
  get illuminanceChangeTrigger(): number;
  /**
   * The minimum value that `illuminanceChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get minIlluminanceChangeTrigger(): number;
  /**
   * The maximum value that `illuminanceChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxIlluminanceChangeTrigger(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `IlluminanceChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `IlluminanceChange` events can also be affected by the `illuminanceChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `IlluminanceChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `IlluminanceChange` events can also be affected by the `illuminanceChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * The most recent illuminance value that the channel has reported.
   *
   * *   This value will always be between `minIlluminance` and `maxIlluminance`.
   * @returns The illuminance value
   * @throws {@link PhidgetError}
   */
  getIlluminance(): number;
  /**
   * The minimum value the `IlluminanceChange` event will report.
   * @returns The illuminance value
   * @throws {@link PhidgetError}
   */
  getMinIlluminance(): number;
  /**
   * The maximum value the `IlluminanceChange` event will report.
   * @returns The illuminance value
   * @throws {@link PhidgetError}
   */
  getMaxIlluminance(): number;
  /**
   * The channel will not issue a `IlluminanceChange` event until the illuminance value has changed by the amount specified by the `illuminanceChangeTrigger`.
   *
   * *   Setting the `illuminanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getIlluminanceChangeTrigger(): number;
  /**
   * The channel will not issue a `IlluminanceChange` event until the illuminance value has changed by the amount specified by the `illuminanceChangeTrigger`.
   *
   * *   Setting the `illuminanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param illuminanceChangeTrigger - The change trigger value
   */
  setIlluminanceChangeTrigger(illuminanceChangeTrigger: number): Promise<void>;
  /**
   * The minimum value that `illuminanceChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMinIlluminanceChangeTrigger(): number;
  /**
   * The maximum value that `illuminanceChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMaxIlluminanceChangeTrigger(): number;
}

/**
 * The Logging API controls logs sent to the console. By default, warnings and errors are printed.
 * Verbosity of logs can be changed, or logging can be disabled entirely.
 * @public
 */
export declare class Log {
  /**
   * Sets the log level (verbosity).
   */
  static setLevel(level: LogLevel): void;
  /**
   * Gets the log level (verbosity).
   */
  static getLevel(): LogLevel;
  /**
   * Enables logging within the Phidget library. Logs are sent to the console.
   * @param level - The logging level
   */
  static enable(level: LogLevel): void;
  /**
   * Disables logging within the Phidget library.
   */
  static disable(): void;
  /**
   * Writes a message to the Phidget library log.
   * @param level - The logging level
   * @param message - The message
   */
  static log(level: LogLevel, message: string): void;
}

/**
 * Phidget logging level
 * @public
 */
export declare enum LogLevel {
  /**
   * Critical
   * @public
   */
  CRITICAL = 1,
  /**
   * Error
   * @public
   */
  ERROR = 2,
  /**
   * Warning
   * @public
   */
  WARNING = 3,
  /**
   * Info
   * @public
   */
  INFO = 4,
  /**
   * Debug
   * @public
   */
  DEBUG = 5,
  /**
   * Verbose
   * @public
   */
  VERBOSE = 6,
}

/** @public */
export declare class Magnetometer extends MagnetometerBase {}

declare abstract class MagnetometerBase extends PhidgetChannel {
  /**
   * **MagneticFieldChange** event
   *  * `magneticField` - The magnetic field values
   *  * `timestamp` - The timestamp value
   * ---
   * The most recent magnetic field values the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `magneticFieldChangeTrigger` has been set to a non-zero value, the `MagneticFieldChange` event will not occur until the field strength has changed by at least the `magneticFieldChangeTrigger` value.
   */
  onMagneticFieldChange:
    | ((
        magneticField: readonly [number, number, number],
        timestamp: number
      ) => void)
    | null;

  /**
   * The Magnetometer class gathers magnetic compass data from Phidget boards. Phidget magnetometers usually have multiple sensors, each oriented in a different axis, so multiple dimensions of compass bearing can be recorded.
   *
   * If the Phidget you're using also has a gyroscope and an accelerometer, you may want to use the Spatial class in order to get all of the data at the same time, in a single event.
   * @public
   */
  constructor();

  /**
   * The number of axes the channel can measure field strength on.
   *
   * *   See your device's User Guide for more information about the number of axes and their orientation.
   * @throws {@link PhidgetError}
   */
  get axisCount(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `MagneticFieldChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `MagneticFieldChange` events can also be affected by the `magneticFieldChangeTrigger`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   */
  get heatingEnabled(): boolean;
  /**
   * The most recent field strength value that the channel has reported.
   *
   * *   This value will always be between `minMagneticField` and `maxMagneticField`.
   * @throws {@link PhidgetError}
   */
  get magneticField(): readonly [number, number, number];
  /**
   * The minimum value the `MagneticFieldChange` event will report.Any readings outside this range will result in a `Saturation` event. This check is done after calibration values have been applied, which will affect your magnetometer's range accordingly.
   * @throws {@link PhidgetError}
   */
  get minMagneticField(): readonly [number, number, number];
  /**
   * The maximum value the `MagneticFieldChange` event will report.Any readings outside this range will result in a `Saturation` event. This check is done after calibration values have been applied, which will affect your magnetometer's range accordingly.
   * @throws {@link PhidgetError}
   */
  get maxMagneticField(): readonly [number, number, number];
  /**
   * The channel will not issue a `MagneticFieldChange` event until the field strength value has changed by the amount specified by the `magneticFieldChangeTrigger`.
   *
   * *   Setting the `magneticFieldChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */
  get magneticFieldChangeTrigger(): number;
  /**
   * The minimum value that `magneticFieldChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get minMagneticFieldChangeTrigger(): number;
  /**
   * The maximum value that `magneticFieldChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxMagneticFieldChangeTrigger(): number;
  /**
   * The most recent timestamp value that the channel has reported. This is an extremely accurate time measurement streamed from the device.
   *
   * *   If your application requires a time measurement, you should use this value over a local software timestamp.
   * @throws {@link PhidgetError}
   */
  get timestamp(): number;
  /**
   * The number of axes the channel can measure field strength on.
   *
   * *   See your device's User Guide for more information about the number of axes and their orientation.
   * @returns The axis count value
   * @throws {@link PhidgetError}
   */
  getAxisCount(): number;
  /**
   * Calibrate your device for the environment it will be used in.
   *
   * *   Due to physical location, hard and soft iron offsets, and even bias errors, your device should be calibrated. We have created a calibration program that will provide you with the `MagnetometerCorrectionParameters` for your specific situation. See your device's User Guide for more information.
   * @throws {@link PhidgetError}
   * @param magneticField - Ambient magnetic field value.
   * @param offset0 - Provided by calibration program.
   * @param offset1 - Provided by calibration program.
   * @param offset2 - Provided by calibration program.
   * @param gain0 - Provided by calibration program.
   * @param gain1 - Provided by calibration program.
   * @param gain2 - Provided by calibration program.
   * @param T0 - Provided by calibration program.
   * @param T1 - Provided by calibration program.
   * @param T2 - Provided by calibration program.
   * @param T3 - Provided by calibration program.
   * @param T4 - Provided by calibration program.
   * @param T5 - Provided by calibration program.
   */
  setCorrectionParameters(
    magneticField: number,
    offset0: number,
    offset1: number,
    offset2: number,
    gain0: number,
    gain1: number,
    gain2: number,
    T0: number,
    T1: number,
    T2: number,
    T3: number,
    T4: number,
    T5: number
  ): Promise<void>;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `MagneticFieldChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `MagneticFieldChange` events can also be affected by the `magneticFieldChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `MagneticFieldChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `MagneticFieldChange` events can also be affected by the `magneticFieldChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @returns Whether self-heating temperature stabilization is enabled
   * @throws {@link PhidgetError}
   */
  getHeatingEnabled(): boolean;
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables onboard heating elements to bring the board up to a known temperature to minimize ambient temerature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   * @param heatingEnabled - Whether self-heating temperature stabilization is enabled
   */
  setHeatingEnabled(heatingEnabled: boolean): Promise<void>;
  /**
   * The most recent field strength value that the channel has reported.
   *
   * *   This value will always be between `minMagneticField` and `maxMagneticField`.
   * @returns The channel's measured MagneticField
   * @throws {@link PhidgetError}
   */
  getMagneticField(): readonly [number, number, number];
  /**
   * The minimum value the `MagneticFieldChange` event will report.Any readings outside this range will result in a `Saturation` event. This check is done after calibration values have been applied, which will affect your magnetometer's range accordingly.
   * @returns The field strength value
   * @throws {@link PhidgetError}
   */
  getMinMagneticField(): readonly [number, number, number];
  /**
   * The maximum value the `MagneticFieldChange` event will report.Any readings outside this range will result in a `Saturation` event. This check is done after calibration values have been applied, which will affect your magnetometer's range accordingly.
   * @returns The field strength value
   * @throws {@link PhidgetError}
   */
  getMaxMagneticField(): readonly [number, number, number];
  /**
   * The channel will not issue a `MagneticFieldChange` event until the field strength value has changed by the amount specified by the `magneticFieldChangeTrigger`.
   *
   * *   Setting the `magneticFieldChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMagneticFieldChangeTrigger(): number;
  /**
   * The channel will not issue a `MagneticFieldChange` event until the field strength value has changed by the amount specified by the `magneticFieldChangeTrigger`.
   *
   * *   Setting the `magneticFieldChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param magneticFieldChangeTrigger - The change trigger value
   */
  setMagneticFieldChangeTrigger(
    magneticFieldChangeTrigger: number
  ): Promise<void>;
  /**
   * The minimum value that `magneticFieldChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMinMagneticFieldChangeTrigger(): number;
  /**
   * The maximum value that `magneticFieldChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMaxMagneticFieldChangeTrigger(): number;
  /**
   * Resets the `MagnetometerCorrectionParameters` to their default values.
   *
   * *   Due to physical location, hard and soft iron offsets, and even bias errors, your device should be calibrated. We have created a calibration program that will provide you with the `MagnetometerCorrectionParameters` for your specific situation. See your device's User Guide for more information.
   * @throws {@link PhidgetError}
   */
  resetCorrectionParameters(): Promise<void>;
  /**
   * Saves the `MagnetometerCorrectionParameters`.
   *
   * *   Due to physical location, hard and soft iron offsets, and even bias errors, your device should be calibrated. We have created a calibration program that will provide you with the `MagnetometerCorrectionParameters` for your specific situation. See your device's User Guide for more information.
   * @throws {@link PhidgetError}
   */
  saveCorrectionParameters(): Promise<void>;
  /**
   * The most recent timestamp value that the channel has reported. This is an extremely accurate time measurement streamed from the device.
   *
   * *   If your application requires a time measurement, you should use this value over a local software timestamp.
   * @returns The timestamp value
   * @throws {@link PhidgetError}
   */
  getTimestamp(): number;
}

/**
 * @public
 */
export declare class Manager {
  /**
   * **DeviceAttach** event
   *  * `device` - The Phidget device that attached
   * ---
   * Occurs when a device is attached.Phidget devices you get from the manager are informational only,
   * you can read information about them such as serial number, class, name, etc.
   */
  onDeviceAttach: ((this: Manager, device: Phidget) => void) | null;
  /**
   * **DeviceDetach** event
   *  * `device` - The Phidget device that detached
   * ---
   * Occurs when a device is detached
   */
  onDeviceDetach: ((this: Manager, device: Phidget) => void) | null;
  /**
   * **Attach** event
   *  * `channel` - The Phidget channel that attached
   * ---
   * Occurs when a channel is attached.
   * *   Phidget channels you get from the manager are informational only. You can read information about
   * them such as serial number, class, name, etc. but they are not opened. In order to interact with one,
   * you must call `open` to take ownership of the channel, and wait for the attach.
   */
  onAttach: ((this: Manager, channel: Phidget) => void) | null;
  /**
   * **Detach** event
   *  * `channel` - The Phidget channel that detached
   * ---
   * Occurs when a channel is detached.
   */
  onDetach: ((this: Manager, channel: Phidget) => void) | null;
  /**
   * The Phidget Manager allows tracking of which Phidgets are available to be controlled from the current program.
   * This is useful for listing all available Phidgets so you can select which ones to use at runtime.
   *
   * You do not need to use a Phidget Manager if you know what Phidgets will be required for your application
   * in advance.
   *
   * Phidget channels that become available will each send an Attach event, and Phidgets that are removed
   * from the system will send corresponding Detach events. If you are using a Phidget Manager, your program
   * is responsible for keeping track of available Phidgets using these events.
   *
   * @param opts - Event callbacks can be specified via this object
   */
  constructor(opts?: ManagerOptions);
  /**
   * Opens the Phidget Manager.
   *
   * Be sure to register `Attach` and `Detach` event handlers for the Manager before opening it,
   * to ensure you program doesn't miss the events reported for devices already connected to your system.
   */
  open(): void;
  /**
   * Closes a Phidget Manager that has been opened.
   */
  close(): void;
}

/** @public */
declare interface ManagerOptions {
  onDeviceAttach?: (phid: Phidget) => void;
  onDeviceDetach?: (phid: Phidget) => void;
  onAttach?: (phid: Phidget) => void;
  onDetach?: (phid: Phidget) => void;
}

/**
 * Phidget mesh mode
 * @public
 */
export declare enum MeshMode {
  /**
   * Router mode
   * @public
   */
  ROUTER = 1,
  /**
   * Sleepy end device mode
   * @public
   */
  SLEEPY_END_DEVICE = 2,
}

/** @public */
export declare class MotorPositionController extends MotorPositionControllerBase {
  getAcceleration(): number;
  setAcceleration(acceleration: number): Promise<void>;
  getMinAcceleration(): number;
  getMaxAcceleration(): number;
  addPositionOffset(positionOffset: number): void;
  getDeadBand(): number;
  setDeadBand(deadBand: number): Promise<void>;
  getPosition(): number;
  getMinPosition(): number;
  getMaxPosition(): number;
  setRescaleFactor(rescaleFactor: number): void;
  getTargetPosition(): number;
  setTargetPosition(targetPosition: number): Promise<void>;
  getVelocityLimit(): number;
  getStallVelocity(): number;
  setStallVelocity(stallVelocity: number): Promise<void>;
  setVelocityLimit(velocityLimit: number): Promise<void>;
  getMinStallVelocity(): number;
  getMaxStallVelocity(): number;
  getMinVelocityLimit(): number;
  getMaxVelocityLimit(): number;
}

declare abstract class MotorPositionControllerBase extends PhidgetChannel {
  /**
   * **PositionChange** event
   *  * `position` - The position value
   * ---
   * The most recent position value will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   Regardless of the `dataInterval`, this event will occur only when the position value has changed from the previous value reported.
   * *   Units for `position` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   */
  onPositionChange: ((position: number) => void) | null;

  /**
   * **DutyCycleUpdate** event
   *  * `dutyCycle` - The duty cycle value
   * ---
   * The most recent duty cycle value will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   This event will **always** occur when the `dataInterval` elapses. You can depend on this event for constant timing when implementing control loops in code. This is the last event to fire, giving you up-to-date access to all properties.
   */
  onDutyCycleUpdate: ((dutyCycle: number) => void) | null;

  /**
   * The Motor Position Controller class controlls the position, velocity and acceleration of the attached motor. It also contains various other control and monitoring functions that aid in the control of the motor.
   *
   * For specifics on how to use this class, we recommend watching our video on the [Phidget Motor Position Controller](https://www.youtube.com/watch?v=0cQlxNd7dk4) class.
   * @public
   */
  constructor();

  /**
   * The rate at which the controller can change the motor's velocity.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */
  get acceleration(): number;
  /**
   * The minimum value that `acceleration` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */
  get minAcceleration(): number;
  /**
   * The maximum value that `acceleration` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */
  get maxAcceleration(): number;
  /**
   * The controller will limit the current through the motor to this value.
   * @throws {@link PhidgetError}
   */
  get currentLimit(): number;
  /**
   * The minimum current limit that can be set for the device.
   * @throws {@link PhidgetError}
   */
  get minCurrentLimit(): number;
  /**
   * The maximum current limit that can be set for the device.
   * @throws {@link PhidgetError}
   */
  get maxCurrentLimit(): number;
  /**
   * Depending on power supply voltage and motor coil inductance, current through the motor can change relatively slowly or extremely rapidly. A physically larger DC Motor will typically have a lower inductance, requiring a higher current regulator gain. A higher power supply voltage will result in motor current changing more rapidly, requiring a higher current regulator gain. If the current regulator gain is too small, spikes in current will occur, causing large variations in torque, and possibly damaging the motor controller. If the current regulator gain is too high, the current will jitter, causing the motor to sound 'rough', especially when changing directions. Each DC Motor we sell specifies a suitable current regulator gain.
   * @throws {@link PhidgetError}
   */
  get currentRegulatorGain(): number;
  /**
   * The minimum current regulator gain for the device.
   * @throws {@link PhidgetError}
   */
  get minCurrentRegulatorGain(): number;
  /**
   * The maximum current regulator gain for the device.
   * @throws {@link PhidgetError}
   */
  get maxCurrentRegulatorGain(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `DutyCycleUpdate` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * Depending on your system, it may not be possible to bring the position error (`targetPosition` - `position`) to zero. A small error can lead to the motor continually 'hunting' for a target position, which can cause unwanted effects. By setting a non-zero `deadBand`, the position controller will relax control of the motor within the deadband, preventing the 'hunting' behavior.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */
  get deadBand(): number;
  /**
   * The most recent duty cycle value that the controller has reported.
   *
   * *   This value will be between -1 and 1 where a sign change (±) is indicitave of a direction change.
   * *   Note that `dutyCycle` is merely an indication of the average voltage across the motor. At a constant load, an increase in `dutyCycle` indicates an increase in motor speed.
   * *   The units of `dutyCycle` refer to 'duty cycle'. This is because the controller must rapidly switch the power on/off (i.e. change the duty cycle) in order to manipulate the voltage across the motor.
   * @throws {@link PhidgetError}
   */
  get dutyCycle(): number;
  /**
   * When engaged, a motor has the ability to be positioned. When disengaged, no commands are sent to the motor.
   *
   * *   This function is useful for completely relaxing a motor once it has reached the target position.
   * @throws {@link PhidgetError}
   */
  get engaged(): boolean;
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get minFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get maxFailsafeTime(): number;
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the controller will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @throws {@link PhidgetError}
   */
  get fanMode(): Enum.FanMode;
  /**
   * The encoder interface mode. Match the mode to the type of encoder you have attached.
   *
   * *   It is recommended to only change this when the encoder disabled in order to avoid unexpected results.
   * @throws {@link PhidgetError}
   */
  get IOMode(): Enum.EncoderIOMode;
  /**
   * Derivative gain constant. A higher `kd` will help reduce oscillations.
   * @throws {@link PhidgetError}
   */
  get kd(): number;
  /**
   * Integral gain constant. The integral term will help eliminate steady-state error.
   * @throws {@link PhidgetError}
   */
  get ki(): number;
  /**
   * Proportional gain constant. A small `kp` value will result in a less responsive controller, however, if `kp` is too high, the system can become unstable.
   * @throws {@link PhidgetError}
   */
  get kp(): number;
  /**
   * The most recent position value that the controller has reported.
   *
   * *   This value will always be between `minPosition` and `maxPosition`.
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */
  get position(): number;
  /**
   * The minimum value that `targetPosition` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */
  get minPosition(): number;
  /**
   * The maximum value that `targetPosition` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */
  get maxPosition(): number;
  /**
   * Change the units of your parameters so that your application is more intuitive.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */
  get rescaleFactor(): number;
  set rescaleFactor(rescaleFactor: number);
  /**
   * Before reading this description, it is important to note the difference between the units of `stallVelocity` and `dutyCycle`.
   *
   * *   `dutyCycle` is a number between -1 and 1 with units of 'duty cycle'. It simply represents the average voltage across the motor.
   * *   `stallVelocity` represents a real velocity (e.g. m/s, RPM, etc.) and the units are determined by the `rescaleFactor`. With a `rescaleFactor` of 1, the default units would be in commutations per second.
   *
   * If the load on your motor is large, your motor may begin rotating more slowly, or even fully stall. Depending on the voltage across your motor, this may result in a large amount of current through both the controller and the motor. In order to prevent damage in these situations, you can use the `stallVelocity` property.
   *
   * The `stallVelocity` should be set to the lowest velocity you would expect from your motor. The controller will then monitor the motor's velocity, as well as the `dutyCycle`, and prevent a 'dangerous stall' from occuring. If the controller detects a dangerous stall, it will immediately disengage the motor (i.e. `engaged` will be set to false) and an error will be reported to your program.
   *
   * *   A 'dangerous stall' will occur faster when the `dutyCycle` is higher (i.e. when the average voltage across the motor is higher)
   * *   A 'dangerous stall' will occur faster as (`stallVelocity` - motor velocity) becomes larger .
   *
   * Setting `stallVelocity` to 0 will turn off stall protection functionality.
   * @throws {@link PhidgetError}
   */
  get stallVelocity(): number;
  /**
   * The lower bound of `stallVelocity`.
   * @throws {@link PhidgetError}
   */
  get minStallVelocity(): number;
  /**
   * The upper bound of `stallVelocity`.
   * @throws {@link PhidgetError}
   */
  get maxStallVelocity(): number;
  /**
   * If the controller is configured and the `targetPosition` is set, the motor will try to reach the `targetPosition`.
   *
   * *   If the `deadBand` is non-zero, the final position of the motor may not match the `targetPosition`
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */
  get targetPosition(): number;
  /**
   * When moving, the motor velocity will be limited by this value.
   *
   * *   `velocityLimit` is bounded by `minVelocityLimit` and `maxVelocityLimit`.
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */
  get velocityLimit(): number;
  /**
   * The minimum value that `velocityLimit` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */
  get minVelocityLimit(): number;
  /**
   * The maximum value that `velocityLimit` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   */
  get maxVelocityLimit(): number;
  /**
   * The rate at which the controller can change the motor's velocity.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @returns The acceleration value
   * @throws {@link PhidgetError}
   */
  abstract getAcceleration(): number;
  /**
   * The rate at which the controller can change the motor's velocity.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   * @param acceleration - The acceleration value
   */
  abstract setAcceleration(acceleration: number): Promise<void>;
  /**
   * The minimum value that `acceleration` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @returns The acceleration value.
   * @throws {@link PhidgetError}
   */
  abstract getMinAcceleration(): number;
  /**
   * The maximum value that `acceleration` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @returns The acceleration value.
   * @throws {@link PhidgetError}
   */
  abstract getMaxAcceleration(): number;
  /**
   * The controller will limit the current through the motor to this value.
   * @returns Motor current limit
   * @throws {@link PhidgetError}
   */
  getCurrentLimit(): number;
  /**
   * The controller will limit the current through the motor to this value.
   * @throws {@link PhidgetError}
   * @param currentLimit - Motor current limit
   */
  setCurrentLimit(currentLimit: number): Promise<void>;
  /**
   * The minimum current limit that can be set for the device.
   * @returns Minimum current limit
   * @throws {@link PhidgetError}
   */
  getMinCurrentLimit(): number;
  /**
   * The maximum current limit that can be set for the device.
   * @returns Maximum current limit
   * @throws {@link PhidgetError}
   */
  getMaxCurrentLimit(): number;
  /**
   * Depending on power supply voltage and motor coil inductance, current through the motor can change relatively slowly or extremely rapidly. A physically larger DC Motor will typically have a lower inductance, requiring a higher current regulator gain. A higher power supply voltage will result in motor current changing more rapidly, requiring a higher current regulator gain. If the current regulator gain is too small, spikes in current will occur, causing large variations in torque, and possibly damaging the motor controller. If the current regulator gain is too high, the current will jitter, causing the motor to sound 'rough', especially when changing directions. Each DC Motor we sell specifies a suitable current regulator gain.
   * @returns Current Regulator Gain
   * @throws {@link PhidgetError}
   */
  getCurrentRegulatorGain(): number;
  /**
   * Depending on power supply voltage and motor coil inductance, current through the motor can change relatively slowly or extremely rapidly. A physically larger DC Motor will typically have a lower inductance, requiring a higher current regulator gain. A higher power supply voltage will result in motor current changing more rapidly, requiring a higher current regulator gain. If the current regulator gain is too small, spikes in current will occur, causing large variations in torque, and possibly damaging the motor controller. If the current regulator gain is too high, the current will jitter, causing the motor to sound 'rough', especially when changing directions. Each DC Motor we sell specifies a suitable current regulator gain.
   * @throws {@link PhidgetError}
   * @param currentRegulatorGain - Current Regulator Gain
   */
  setCurrentRegulatorGain(currentRegulatorGain: number): Promise<void>;
  /**
   * The minimum current regulator gain for the device.
   * @returns Minimum current regulator gain
   * @throws {@link PhidgetError}
   */
  getMinCurrentRegulatorGain(): number;
  /**
   * The maximum current regulator gain for the device.
   * @returns Maximum current regulator gain
   * @throws {@link PhidgetError}
   */
  getMaxCurrentRegulatorGain(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `DutyCycleUpdate` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `DutyCycleUpdate` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * Depending on your system, it may not be possible to bring the position error (`targetPosition` - `position`) to zero. A small error can lead to the motor continually 'hunting' for a target position, which can cause unwanted effects. By setting a non-zero `deadBand`, the position controller will relax control of the motor within the deadband, preventing the 'hunting' behavior.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @returns The dead band value
   * @throws {@link PhidgetError}
   */
  abstract getDeadBand(): number;
  /**
   * Depending on your system, it may not be possible to bring the position error (`targetPosition` - `position`) to zero. A small error can lead to the motor continually 'hunting' for a target position, which can cause unwanted effects. By setting a non-zero `deadBand`, the position controller will relax control of the motor within the deadband, preventing the 'hunting' behavior.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   * @param deadBand - The dead band value
   */
  abstract setDeadBand(deadBand: number): Promise<void>;
  /**
   * The most recent duty cycle value that the controller has reported.
   *
   * *   This value will be between -1 and 1 where a sign change (±) is indicitave of a direction change.
   * *   Note that `dutyCycle` is merely an indication of the average voltage across the motor. At a constant load, an increase in `dutyCycle` indicates an increase in motor speed.
   * *   The units of `dutyCycle` refer to 'duty cycle'. This is because the controller must rapidly switch the power on/off (i.e. change the duty cycle) in order to manipulate the voltage across the motor.
   * @returns The duty cycle value.
   * @throws {@link PhidgetError}
   */
  getDutyCycle(): number;
  /**
   * When engaged, a motor has the ability to be positioned. When disengaged, no commands are sent to the motor.
   *
   * *   This function is useful for completely relaxing a motor once it has reached the target position.
   * @returns The engaged value.
   * @throws {@link PhidgetError}
   */
  getEngaged(): boolean;
  /**
   * When engaged, a motor has the ability to be positioned. When disengaged, no commands are sent to the motor.
   *
   * *   This function is useful for completely relaxing a motor once it has reached the target position.
   * @throws {@link PhidgetError}
   * @param engaged - The engaged value.
   */
  setEngaged(engaged: boolean): Promise<void>;
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For Motor Position Controller channels, this will disengage the motor. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */
  enableFailsafe(failsafeTime: number): Promise<void>;
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMinFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMaxFailsafeTime(): number;
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the controller will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @returns The fan mode
   * @throws {@link PhidgetError}
   */
  getFanMode(): Enum.FanMode;
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the controller will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @throws {@link PhidgetError}
   * @param fanMode - The fan mode
   */
  setFanMode(fanMode: Enum.FanMode): Promise<void>;
  /**
   * The encoder interface mode. Match the mode to the type of encoder you have attached.
   *
   * *   It is recommended to only change this when the encoder disabled in order to avoid unexpected results.
   * @returns The IO mode value.
   * @throws {@link PhidgetError}
   */
  getIOMode(): Enum.EncoderIOMode;
  /**
   * The encoder interface mode. Match the mode to the type of encoder you have attached.
   *
   * *   It is recommended to only change this when the encoder disabled in order to avoid unexpected results.
   * @throws {@link PhidgetError}
   * @param IOMode - The IO mode value.
   */
  setIOMode(IOMode: Enum.EncoderIOMode): Promise<void>;
  /**
   * Derivative gain constant. A higher `kd` will help reduce oscillations.
   * @returns The Kd value.
   * @throws {@link PhidgetError}
   */
  getKd(): number;
  /**
   * Derivative gain constant. A higher `kd` will help reduce oscillations.
   * @throws {@link PhidgetError}
   * @param kd - The Kd value.
   */
  setKd(kd: number): Promise<void>;
  /**
   * Integral gain constant. The integral term will help eliminate steady-state error.
   * @returns The Ki value.
   * @throws {@link PhidgetError}
   */
  getKi(): number;
  /**
   * Integral gain constant. The integral term will help eliminate steady-state error.
   * @throws {@link PhidgetError}
   * @param ki - The Ki value.
   */
  setKi(ki: number): Promise<void>;
  /**
   * Proportional gain constant. A small `kp` value will result in a less responsive controller, however, if `kp` is too high, the system can become unstable.
   * @returns The Kp value.
   * @throws {@link PhidgetError}
   */
  getKp(): number;
  /**
   * Proportional gain constant. A small `kp` value will result in a less responsive controller, however, if `kp` is too high, the system can become unstable.
   * @throws {@link PhidgetError}
   * @param kp - The Kp value.
   */
  setKp(kp: number): Promise<void>;
  /**
   * The most recent position value that the controller has reported.
   *
   * *   This value will always be between `minPosition` and `maxPosition`.
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  abstract getPosition(): number;
  /**
   * The minimum value that `targetPosition` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  abstract getMinPosition(): number;
  /**
   * The maximum value that `targetPosition` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  abstract getMaxPosition(): number;
  /**
   * Adds an offset (positive or negative) to the current position. Useful for zeroing position.
   * @throws {@link PhidgetError}
   * @param positionOffset - Amount to offset the position by
   */
  abstract addPositionOffset(positionOffset: number): void;
  /**
   * Change the units of your parameters so that your application is more intuitive.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @returns The rescale factor value
   * @throws {@link PhidgetError}
   */
  getRescaleFactor(): number;
  /**
   * Change the units of your parameters so that your application is more intuitive.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   * @param rescaleFactor - The rescale factor value
   */
  abstract setRescaleFactor(rescaleFactor: number): void;
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */
  resetFailsafe(): Promise<void>;
  /**
   * Before reading this description, it is important to note the difference between the units of `stallVelocity` and `dutyCycle`.
   *
   * *   `dutyCycle` is a number between -1 and 1 with units of 'duty cycle'. It simply represents the average voltage across the motor.
   * *   `stallVelocity` represents a real velocity (e.g. m/s, RPM, etc.) and the units are determined by the `rescaleFactor`. With a `rescaleFactor` of 1, the default units would be in commutations per second.
   *
   * If the load on your motor is large, your motor may begin rotating more slowly, or even fully stall. Depending on the voltage across your motor, this may result in a large amount of current through both the controller and the motor. In order to prevent damage in these situations, you can use the `stallVelocity` property.
   *
   * The `stallVelocity` should be set to the lowest velocity you would expect from your motor. The controller will then monitor the motor's velocity, as well as the `dutyCycle`, and prevent a 'dangerous stall' from occuring. If the controller detects a dangerous stall, it will immediately disengage the motor (i.e. `engaged` will be set to false) and an error will be reported to your program.
   *
   * *   A 'dangerous stall' will occur faster when the `dutyCycle` is higher (i.e. when the average voltage across the motor is higher)
   * *   A 'dangerous stall' will occur faster as (`stallVelocity` - motor velocity) becomes larger .
   *
   * Setting `stallVelocity` to 0 will turn off stall protection functionality.
   * @returns The stall velocity value.
   * @throws {@link PhidgetError}
   */
  abstract getStallVelocity(): number;
  /**
   * Before reading this description, it is important to note the difference between the units of `stallVelocity` and `dutyCycle`.
   *
   * *   `dutyCycle` is a number between -1 and 1 with units of 'duty cycle'. It simply represents the average voltage across the motor.
   * *   `stallVelocity` represents a real velocity (e.g. m/s, RPM, etc.) and the units are determined by the `rescaleFactor`. With a `rescaleFactor` of 1, the default units would be in commutations per second.
   *
   * If the load on your motor is large, your motor may begin rotating more slowly, or even fully stall. Depending on the voltage across your motor, this may result in a large amount of current through both the controller and the motor. In order to prevent damage in these situations, you can use the `stallVelocity` property.
   *
   * The `stallVelocity` should be set to the lowest velocity you would expect from your motor. The controller will then monitor the motor's velocity, as well as the `dutyCycle`, and prevent a 'dangerous stall' from occuring. If the controller detects a dangerous stall, it will immediately disengage the motor (i.e. `engaged` will be set to false) and an error will be reported to your program.
   *
   * *   A 'dangerous stall' will occur faster when the `dutyCycle` is higher (i.e. when the average voltage across the motor is higher)
   * *   A 'dangerous stall' will occur faster as (`stallVelocity` - motor velocity) becomes larger .
   *
   * Setting `stallVelocity` to 0 will turn off stall protection functionality.
   * @throws {@link PhidgetError}
   * @param stallVelocity - The stall velocity value.
   */
  abstract setStallVelocity(stallVelocity: number): Promise<void>;
  /**
   * The lower bound of `stallVelocity`.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  abstract getMinStallVelocity(): number;
  /**
   * The upper bound of `stallVelocity`.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  abstract getMaxStallVelocity(): number;
  /**
   * If the controller is configured and the `targetPosition` is set, the motor will try to reach the `targetPosition`.
   *
   * *   If the `deadBand` is non-zero, the final position of the motor may not match the `targetPosition`
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  abstract getTargetPosition(): number;
  /**
   * If the controller is configured and the `targetPosition` is set, the motor will try to reach the `targetPosition`.
   *
   * *   If the `deadBand` is non-zero, the final position of the motor may not match the `targetPosition`
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   * @param targetPosition - The position value
   */
  abstract setTargetPosition(targetPosition: number): Promise<void>;
  /**
   * When moving, the motor velocity will be limited by this value.
   *
   * *   `velocityLimit` is bounded by `minVelocityLimit` and `maxVelocityLimit`.
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @returns The velocity value.
   * @throws {@link PhidgetError}
   */
  abstract getVelocityLimit(): number;
  /**
   * When moving, the motor velocity will be limited by this value.
   *
   * *   `velocityLimit` is bounded by `minVelocityLimit` and `maxVelocityLimit`.
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @throws {@link PhidgetError}
   * @param velocityLimit - The velocity value.
   */
  abstract setVelocityLimit(velocityLimit: number): Promise<void>;
  /**
   * The minimum value that `velocityLimit` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  abstract getMinVelocityLimit(): number;
  /**
   * The maximum value that `velocityLimit` can be set to.
   *
   * *   Units for `position`, `velocityLimit`, `acceleration`, and `deadBand` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  abstract getMaxVelocityLimit(): number;
}

/**
 * @public
 */
declare class NetworkConnection extends NetworkConnectionBase {
  constructor(options: NetworkConnectionOptions);
  constructor(uri: string, options?: NetworkConnectionOptions);
  constructor(
    port: number,
    hostname?: string,
    options?: NetworkConnectionOptions
  );
  /**
   * Connects to the server. Once the initial connection has succeeded,
   * it will be maintained until close is called.
   *
   * It retryOnFail is true, the initial connect will retry on failure until a connection is established,
   * and connect() will not resolve until the connection is established.
   * Thisis allows connect to be called before the network server is running.
   *
   * If retryOnFail is false (the default), connect() will throw an exception
   * if the connection can not be established.
   *
   * @param retryOnFail - Keep trying to connect if the initial attempt fails. Defaults to false.
   */
  connect(retryOnFail?: boolean): Promise<void>;
}
export { NetworkConnection as Connection };
export { NetworkConnection };

declare abstract class NetworkConnectionBase extends PhidgetConnection {
  /**
   * **AuthenticationNeeded** event
   *
   * ---
   * Called when the server requires a password, and none has been provided, or the provided password is wrong.
   *
   * Return the correct password to connect, or return null to cancel.
   */
  onAuthenticationNeeded: ((this: NetworkConnectionBase) => string) | null;
  /**
   * **Connect** event
   *
   * ---
   * Called when connection to the server is established.
   */
  onConnect: ((this: NetworkConnectionBase) => void) | null;
  /**
   * **Disconnect** event
   *
   * ---
   * Called when the connection to the server is closed.
   */
  onDisconnect: ((this: NetworkConnectionBase) => void) | null;
  /**
   * The Connection object manages a connection to a Phidget Server.
   *
   * Once a connection has been successfully established via the connect() call,
   * this connection will be maintained until close() is called. If the underlying
   * connection is ever closed - because the server was shut down, or because of
   * network issue, the Connection object will try to re-establish the connection automatically.
   *
   * @param options - The options parameter is optional, and supports the following properties:
   * *   `hostname`: The server hostname or IP address. **Default**: `'localhost'`
   * *   `port`: The server port. **Default**: `5661` (Node.js) / `8989` (Browser)
   * *   `name`: A name for the connection. **Default**: Connection URI
   * *   `passwd`: Password for the Phidget Server. **Default**: `''`
   * *   `onConnect()`: Function that will be called on connection to server
   * *   `onDisconnect()`: Function that will be called on disconnection from server
   * *   `onAuthenticationNeeded()`: Function that will be called if a password is needed
   * *   `onError(code, msg)`: Function that will be called if an error occurs
   */
  constructor(options: NetworkConnectionOptions);
  /**
   * The Connection object manages a connection to a Phidget Server.
   *
   * Once a connection has been successfully established via the connect() call,
   * this connection will be maintained until close() is called. If the underlying
   * connection is ever closed - because the server was shut down, or because of
   * network issue, the Connection object will try to re-establish the connection automatically.
   *
   * @param uri - Connection URI
   * @param options - The options parameter is optional, and supports the following properties:
   * *   `name`: A name for the connection. **Default**: Connection URI
   * *   `passwd`: Password for the Phidget Server. **Default**: `''`
   * *   `onConnect()`: Function that will be called on connection to server
   * *   `onDisconnect()`: Function that will be called on disconnection from server
   * *   `onAuthenticationNeeded()`: Function that will be called if a password is needed
   * *   `onError(code, msg)`: Function that will be called if an error occurs
   */
  constructor(uri: string, options?: NetworkConnectionOptions);
  /**
   * The Connection object manages a connection to a Phidget Server.
   *
   * Once a connection has been successfully established via the connect() call,
   * this connection will be maintained until close() is called. If the underlying
   * connection is ever closed - because the server was shut down, or because of
   * network issue, the Connection object will try to re-establish the connection automatically.
   *
   * @param port - The server port.
   * @param hostname - The server hostname or IP address.
   * @param options - The options parameter is optional, and supports the following properties:
   * *   `name`: A name for the connection. **Default**: Connection URI
   * *   `passwd`: Password for the Phidget Server. **Default**: `''`
   * *   `onConnect()`: Function that will be called on connection to server
   * *   `onDisconnect()`: Function that will be called on disconnection from server
   * *   `onAuthenticationNeeded()`: Function that will be called if a password is needed
   * *   `onError(code, msg)`: Function that will be called if an error occurs
   */
  constructor(
    port: number,
    hostname?: string,
    options?: NetworkConnectionOptions
  );

  delete(): void;
  /** Sets the keepalive timeout, in ms. Default is 8000. */
  setKeepAlive(timeout: number): void;
  close(): void;
}

declare interface NetworkConnectionOptions {
  hostname?: string;
  port?: number;
  name?: string;
  passwd?: string;
  onConnect?: () => void | Promise<void>;
  onDisconnect?: () => void | Promise<void>;
  onAuthenticationNeeded?: () => string;
  onError?: (code: ErrorCode, msg: string) => void | Promise<void>;
}

/**
 * The NMEA Data structure
 * @public
 */
declare interface NMEAData {
  /**
   * NMEA GGA Sentence
   */
  GGA: GPGGA;
  /**
   * NMEA GSA Sentence
   */
  GSA: GPGSA;
  /**
   * NMEA RMC Sentence
   */
  RMC: GPRMC;
  /**
   * NMEA VTG Sentence
   */
  VTG: GPVTG;
}

/**
 * The Type of Error on the Packet
 * @public
 */
export declare enum PacketErrorCode {
  /**
   * No error
   * @public
   */
  OK = 0,
  /**
   * Unknown Error
   * @public
   */
  UNKNOWN = 1,
  /**
   * The response packet timed out
   * @public
   */
  TIMEOUT = 2,
  /**
   * Something about the received transmission didn't match the expected format.
   * @public
   */
  FORMAT = 3,
  /**
   * The input lines are invalid. This likely means a cable has been unplugged.
   * @public
   */
  INVALID = 4,
  /**
   * Data is being received fater than it can be processed. Some has been lost.
   * @public
   */
  OVERRUN = 5,
  /**
   * Something behind the scenes got out of sequence.
   * @public
   */
  CORRUPT = 6,
}

/** @public */
export declare abstract class Phidget extends PhidgetBase {
  /**
   * **Attach** event
   *
   * ---
   * Occurs when the channel is attached to a physical channel on a Phidget.
   *
   * `Attach` must be registered prior to calling `open()`, and will be called when the
   * Phidget library matches the channel with a physical channel on a Phidget. `Attach`
   * may be called more than once if the channel is detached during its lifetime.
   *
   * `Attach` is the recommended place to configuration properties of the channel such
   * as the data interval or change trigger.
   */
  onAttach: ((this: Phidget, ch: Phidget) => void | Promise<void>) | null;
  /**
   * **Detach** event
   *
   * ---
   * Occurs when the channel is detached from a Phidget device channel.Detach typically occurs
   * when the Phidget device is removed from the system.
   */
  onDetach: ((this: Phidget, ch: Phidget) => void) | null;
  /**
   * **Error** event
   *  * `code` - The error code
   *  * `msg` - The error description
   * ---
   * Error is called when an error condition has been detected.
   *
   * See the documentation for your specific channel class to see what error events it might throw.
   * @param code - The error code
   * @param description - The error description
   */
  onError:
    | ((this: Phidget, code: ErrorEventCode, description: string) => void)
    | null;
  /**
   * **PropertyChange** event
   *  * `propertyName` - The name of the property that has changed
   * ---
   * Occurs when a property is changed externally from the user channel, usually from a network client attached to the same channel.
   * @param propertyName - The name of the property that has changed
   */
  onPropertyChange: ((this: Phidget, propertyName: string) => void) | null;
  /**
   * The channel name
   */
  name: string;
  /**
   * Gets the version of the Phidget library being used by the program in human readable form.
   * @returns The Phidget library version.
   * @throws {@link PhidgetError}
   */
  static get libraryVersion(): string;
  /**
   * Gets the version of the Phidget library being used by the program in human readable form.
   * @returns The Phidget library version.
   * @throws {@link PhidgetError}
   */
  static getLibraryVersion(): string;
}

/**
 * The core Phidget class deals with functionality common to all Phidgets, such as opening and closing them, or setting Attach, Detach and Event handlers.
 *
 * This class is also used to specify the associations between the Phidget software objects and their corresponding physical devices, and makes it possible to determine which Phidget is which in cases where it might otherwise be ambiguous.
 *
 * This class contains various functions such as **Release**, **Retain**, and **getParent** designed to be used with the **Phidget Manager**. These specialized functions may be safely ignored if your application does not require a **Manager**. You can check the **Manager API** for more information.
 * @public
 */
declare abstract class PhidgetBase {
  /**
   * Pass to <code>setDeviceSerialNumber()</code> to open any serial number.
   */
  static get ANY_SERIAL_NUMBER(): number;
  /**
   * Pass to <code>setHubPort()</code> to open any hub port.
   */
  static get ANY_HUB_PORT(): number;
  /**
   * Pass to <code>setChannel()</code> to open any channel.
   */
  static get ANY_CHANNEL(): number;
  /**
   * Pass to <code>setDeviceLabel()</code> to open any label.
   */
  static get ANY_LABEL(): null;
  /**
   * Pass to <code>open()</code> for an infinite timeout.
   */
  static get INFINITE_TIMEOUT(): number;
  /**
   * Pass to <code>open()</code> for the default timeout.
   */
  static get DEFAULT_TIMEOUT(): number;
  /**
   * Gets the attached status of channel. A Phidget is attached after it has been opened and the Phidget library finds and connects to the corresponding hardware device.
   *
   * *   Most API calls are only valid on attached Phidgets.
   * @throws {@link PhidgetError}
   */
  get attached(): boolean;
  /**
   * get: Gets the channel index of the channel on the device.
   *
   * set: Specifies the channel index to be opened. The default channel is 0. Set to `ANY_CHANNEL` to open any channel on the specified device.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   */
  get channel(): number;
  set channel(channel: number);
  /**
   * Returns true if this represents a channel, false if this represents a device. Mostly for use alongside `getParent()` to distinguish channel handles from device handles.
   * @throws {@link PhidgetError}
   */
  get isChannel(): boolean;
  /**
   * Gets the channel class of the channel.
   * @throws {@link PhidgetError}
   */
  get channelClass(): Enum.ChannelClass;
  /**
   * Gets the name of the channel class the channel belongs to.
   * @throws {@link PhidgetError}
   */
  get channelClassName(): string;
  /**
   * Gets the channel's name. This name serves as a description of the specific nature of the channel.
   * @throws {@link PhidgetError}
   */
  get channelName(): string;
  /**
   * Gets the subclass for this channel. Allows for identifying channels with specific characteristics without needing to know the exact device and channel index.
   * @throws {@link PhidgetError}
   */
  get channelSubclass(): Enum.ChannelSubclass;
  /**
   * Gets the connection associated with this Phidget.
   * @throws {@link PhidgetError}
   */
  get connection(): PhidgetConnection | null;
  /**
   * Gets the device class for the Phidget which this channel is a part of.
   * @throws {@link PhidgetError}
   */
  get deviceClass(): Enum.DeviceClass;
  /**
   * Gets the name of the device class for the Phidget which this channel is a part of.
   * @throws {@link PhidgetError}
   */
  get deviceClassName(): string;

  /**
   * Gets the Device ID for the Phidget which this channel is a part of.
   * @throws {@link PhidgetError}
   */
  get deviceID(): Enum.DeviceID;
  /**
   * get: Gets the label of the Phidget which this channel is a part of. A device label is a custom string used to more easily identify a Phidget. Labels are written to a Phidget using `writeDeviceLabel()`, or by right-clicking the device and setting a label in the Phidget Control Panel for Windows.
   *
   * set: Specifies the label of the Phidget to be opened. Leave un-set to open any label. A device label is a custom string used to more easily identify a Phidget. Labels are written to a Phidget using `writeDeviceLabel()`, or by right-clicking the device and setting a label in the Phidget Control Panel for Windows.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   */
  get deviceLabel(): string;
  set deviceLabel(deviceLabel: string);
  /**
   * Gets the name of the Phidget which this channel is a part of.
   * @throws {@link PhidgetError}
   */
  get deviceName(): string;
  /**
   * get: Gets the serial number of the Phidget which this channel is a part of.
   * If the channel is part of a VINT device, this will be the serial number of the VINT Hub the device is attached to.
   *
   * set: Specifies the serial number of the Phidget to be opened. Leave un-set, or set to `ANY_SERIAL_NUMBER` to open any serial number.
   * If the channel is part of a VINT device, this will be the serial number of the VINT Hub the device is attached to.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   */
  get deviceSerialNumber(): number;
  set deviceSerialNumber(deviceSerialNumber: number);
  /**
   * Gets the SKU (part number) of the Phidget which this channel is a part of.
   * @throws {@link PhidgetError}
   */
  get deviceSKU(): string;
  /**
   * Gets the firmware version of the Phidget which this channel is a part of.
   * @throws {@link PhidgetError}
   */
  get deviceVersion(): number;

  /**
   * Gets the hub that this channel is attached to.
   * @throws {@link PhidgetError}
   */
  get hub(): Phidget;
  /**
   * get: Gets the hub port index of the VINT Hub port that the channel is attached to.
   *
   * set: Specifies the hub port index of the VINT Hub port to open this channel on. Leave un-set, or set to `ANY_HUB_PORT` to open the channel on any VINT Hub port
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   */
  get hubPort(): number;
  set hubPort(hubPort: number);
  /**
   * Gets the number of VINT ports present on the VINT Hub that the channel is attached to.
   * @throws {@link PhidgetError}
   */
  get hubPortCount(): number;
  /**
   * get: Gets whether this channel is a VINT Hub port channel, or part of a VINT device attached to a hub port.
   *
   * set: Specifies whether this channel should be opened on a VINT Hub port directly, or on a VINT device attached to a hub port.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   */
  get isHubPortDevice(): boolean;
  set isHubPortDevice(isHubPortDevice: boolean);
  /**
   * Configures the communication speed for this VINT device. Available speeds depend on the VINT Device and Hub Port capabilities.
   * @throws {@link PhidgetError}
   */
  get hubPortSpeed(): number;
  /**
   * The max communication speed of a high-speed capable VINT Port.
   * @throws {@link PhidgetError}
   */
  get maxHubPortSpeed(): number;
  /**
   * Indicates that the communication speed of this VINT port can be set.
   * @throws {@link PhidgetError}
   */
  get hubPortSupportsSetSpeed(): boolean;
  /**
   * Gets a key which identifies this device or channel uniquely. This can be useful for correlating attach/detach events from the **Manager**.
   * @throws {@link PhidgetError}
   */
  get key(): string;
  /**
   * get: Returns true when this channel is attached directly on the local machine, or false otherwise.
   *
   * set: Set to True if the channel is to be opened locally, and not over a network. If both this and `isRemote` are set to False (the default), the channel will be opened either locally or remotely, on whichever matching channel is found first.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   */
  get isLocal(): boolean;
  set isLocal(isLocal: boolean);
  /**
   * Returns true if `open()` has been called on this channel.
   * @throws {@link PhidgetError}
   */
  get isOpen(): boolean;
  /**
   * Gets the handle of the parent device of the given Phidget handle.
   *
   * For example, this would refer to the device the channel is a part of, or the Hub that a device is plugged into.
   *
   * This is useful when used alongside a **Phidget Manager** to create device trees like the one in the Phidget Control Panel.
   *
   * *   This can be used to travel up the device tree and get device information at each step.
   * *   The root device will return a null handle
   * *   Parent handles always refer to devices. See `getIsChannel()`
   * @throws {@link PhidgetError}
   */
  get parent(): Phidget | null;
  /**
   * get: Returns true when this channel is attached via a Phidget network server, or false otherwise.
   *
   * set:
   *
   * Set to True if the channel is to be opened remotely, rather than locally. If both this and `isLocal` are set to False (the default), the channel will be opened either locally or remotely, on whichever matching channel is found first.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   */
  get isRemote(): boolean;
  set isRemote(isRemote: boolean);
  /**
   * The max communication speed of a high-speed capable VINT Device.
   * @throws {@link PhidgetError}
   */
  get maxVINTDeviceSpeed(): number;
  /**
   * Indicates that the communication speed of this VINT device can be set.
   * @throws {@link PhidgetError}
   */
  get VINTDeviceSupportsSetSpeed(): boolean;
  /**
   * Gets the attached status of channel. A Phidget is attached after it has been opened and the Phidget library finds and connects to the corresponding hardware device.
   *
   * *   Most API calls are only valid on attached Phidgets.
   * @returns True if the channel is attached
   * @throws {@link PhidgetError}
   */
  abstract getAttached(): boolean;
  /**
   * Gets the channel index of the channel on the device.
   * @returns The channel index
   * @throws {@link PhidgetError}
   */
  abstract getChannel(): number;
  /**
   * Specifies the channel index to be opened. The default channel is 0. Set to `ANY_CHANNEL` to open any channel on the specified device.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   * @param channel - The channel index
   */
  abstract setChannel(channel: number): void;
  /**
   * Gets the channel class of the channel.
   * @returns The channel class
   * @throws {@link PhidgetError}
   */
  abstract getChannelClass(): Enum.ChannelClass;
  /**
   * Gets the name of the channel class the channel belongs to.
   * @returns The name of the channel's class
   * @throws {@link PhidgetError}
   */
  abstract getChannelClassName(): string;
  /**
   * Gets the channel's name. This name serves as a description of the specific nature of the channel.
   * @returns The channel's name
   * @throws {@link PhidgetError}
   */
  abstract getChannelName(): string;
  /**
   * Gets the subclass for this channel. Allows for identifying channels with specific characteristics without needing to know the exact device and channel index.
   * @returns The channel's subclass
   * @throws {@link PhidgetError}
   */
  abstract getChannelSubclass(): Enum.ChannelSubclass;
  /**
   * Closes a Phidget channel that has been opened.`close()` will release the channel on the Phidget device.
   * @throws {@link PhidgetError}
   */
  abstract close(): Promise<void>;
  /**
   * Gets the connection associated with this Phidget.
   * @returns The connection
   * @throws {@link PhidgetError}
   */
  abstract getConnection(): PhidgetConnection | null;
  /**
   * Gets the number of channels of the specified channel class on the device. Pass `phidget22.ChannelClass.NONE` to get the total number of channels.
   * @returns The Channel Count
   * @throws {@link PhidgetError}
   * @param cls - The Channel Class
   */
  abstract getDeviceChannelCount(cls: Enum.ChannelClass): number;
  /**
   * Gets the device class for the Phidget which this channel is a part of.
   * @returns The class of the device the channel is a part of.
   * @throws {@link PhidgetError}
   */
  abstract getDeviceClass(): Enum.DeviceClass;
  /**
   * Gets the name of the device class for the Phidget which this channel is a part of.
   * @returns The class name of the device the channel is a part of.
   * @throws {@link PhidgetError}
   */
  abstract getDeviceClassName(): string;

  /**
   * Gets the Device ID for the Phidget which this channel is a part of.
   * @returns The device id of the device the channel is a part of
   * @throws {@link PhidgetError}
   */
  abstract getDeviceID(): Enum.DeviceID;
  /**
   * Gets the label of the Phidget which this channel is a part of. A device label is a custom string used to more easily identify a Phidget. Labels are written to a Phidget using `writeDeviceLabel()`, or by right-clicking the device and setting a label in the Phidget Control Panel for Windows.
   * @returns The device label
   * @throws {@link PhidgetError}
   */
  abstract getDeviceLabel(): string;
  /**
   * Specifies the label of the Phidget to be opened. Leave un-set to open any label. A device label is a custom string used to more easily identify a Phidget. Labels are written to a Phidget using `writeDeviceLabel()`, or by right-clicking the device and setting a label in the Phidget Control Panel for Windows.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   * @param deviceLabel - The device label
   */
  abstract setDeviceLabel(deviceLabel?: string): void;
  /**
   * Gets the name of the Phidget which this channel is a part of.
   * @returns The name of the device the channel is a part of
   * @throws {@link PhidgetError}
   */
  abstract getDeviceName(): string;
  /**
   * Gets the serial number of the Phidget which this channel is a part of.
   * If the channel is part of a VINT device, this will be the serial number of the VINT Hub the device is attached to.
   * @returns The device serial number
   * @throws {@link PhidgetError}
   */
  abstract getDeviceSerialNumber(): number;
  /**
   * Specifies the serial number of the Phidget to be opened. Leave un-set, or set to `ANY_SERIAL_NUMBER` to open any serial number.
   * If the channel is part of a VINT device, this will be the serial number of the VINT Hub the device is attached to.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   * @param deviceSerialNumber - The device serial number
   */
  abstract setDeviceSerialNumber(deviceSerialNumber: number): void;
  /**
   * Gets the SKU (part number) of the Phidget which this channel is a part of.
   * @returns The SKU of the device the channel is a part of
   * @throws {@link PhidgetError}
   */
  abstract getDeviceSKU(): string;
  /**
   * Gets the firmware version of the Phidget which this channel is a part of.
   * @returns The version of the device the channel is a part of
   * @throws {@link PhidgetError}
   */
  abstract getDeviceVersion(): number;

  /**
   * Gets the hub that this channel is attached to.
   * @returns The hub the channels device is attached to
   * @throws {@link PhidgetError}
   */
  abstract getHub(): Phidget;
  /**
   * Gets the hub port index of the VINT Hub port that the channel is attached to.
   * @returns The hub port index
   * @throws {@link PhidgetError}
   */
  abstract getHubPort(): number;
  /**
   * Specifies the hub port index of the VINT Hub port to open this channel on. Leave un-set, or set to `ANY_HUB_PORT` to open the channel on any VINT Hub port
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   * @param hubPort - The hub port index
   */
  abstract setHubPort(hubPort: number): void;
  /**
   * Gets the number of VINT ports present on the VINT Hub that the channel is attached to.
   * @returns The number of ports on the VINT Hub
   * @throws {@link PhidgetError}
   */
  abstract getHubPortCount(): number;
  /**
   * Configures the communication speed for this VINT device. Available speeds depend on the VINT Device and Hub Port capabilities.
   * @returns The VINT Device communication speed
   * @throws {@link PhidgetError}
   */
  abstract getHubPortSpeed(): number;
  /**
   * Configures the communication speed for this VINT device. Available speeds depend on the VINT Device and Hub Port capabilities.
   * @throws {@link PhidgetError}
   * @param hubPortSpeed - The VINT Device communication speed
   */
  abstract setHubPortSpeed(hubPortSpeed: number): Promise<void>;
  /**
   * The max communication speed of a high-speed capable VINT Port.
   * @returns The VINT Port max speed
   * @throws {@link PhidgetError}
   */
  abstract getMaxHubPortSpeed(): number;
  /**
   * Indicates that the communication speed of this VINT port can be set.
   * @returns The VINT Port supports set speed
   * @throws {@link PhidgetError}
   */
  abstract getHubPortSupportsSetSpeed(): boolean;
  /**
   * Returns true if this represents a channel, false if this represents a device. Mostly for use alongside `getParent()` to distinguish channel handles from device handles.
   * @returns True if the handle is for a channel.
   * @throws {@link PhidgetError}
   */
  abstract getIsChannel(): boolean;
  /**
   * Gets whether this channel is a VINT Hub port channel, or part of a VINT device attached to a hub port.
   * @returns The hub port mode (True if the channel is a hub port itself)
   * @throws {@link PhidgetError}
   */
  abstract getIsHubPortDevice(): boolean;
  /**
   * Specifies whether this channel should be opened on a VINT Hub port directly, or on a VINT device attached to a hub port.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   * @param isHubPortDevice - The hub port mode (True if the channel is a hub port itself)
   */
  abstract setIsHubPortDevice(isHubPortDevice: boolean): void;
  /**
   * Returns true when this channel is attached directly on the local machine, or false otherwise.
   * @returns True if the channel is attached to a local device
   * @throws {@link PhidgetError}
   */
  abstract getIsLocal(): boolean;
  /**
   * Set to True if the channel is to be opened locally, and not over a network. If both this and `isRemote` are set to False (the default), the channel will be opened either locally or remotely, on whichever matching channel is found first.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   * @param isLocal - True if the channel is attached to a local device
   */
  abstract setIsLocal(isLocal: boolean): void;
  /**
   * Returns true if `open()` has been called on this channel.
   * @returns True if the channel is opened.
   * @throws {@link PhidgetError}
   */
  abstract getIsOpen(): boolean;
  /**
   * Returns true when this channel is attached via a Phidget network server, or false otherwise.
   * @returns True if the channel is attached to a network device
   * @throws {@link PhidgetError}
   */
  abstract getIsRemote(): boolean;
  /**
   * Set to True if the channel is to be opened remotely, rather than locally. If both this and `isLocal` are set to False (the default), the channel will be opened either locally or remotely, on whichever matching channel is found first.
   *
   * If setting this property, it must be set before the channel is opened. The behaviour of setting this property while the channel is open is undefined.
   * @throws {@link PhidgetError}
   * @param isRemote - True if the channel is attached to a network device
   */
  abstract setIsRemote(isRemote: boolean): void;
  /**
   * Gets a key which identifies this device or channel uniquely. This can be useful for correlating attach/detach events from the **Manager**.
   * @returns The key
   * @throws {@link PhidgetError}
   */
  abstract getKey(): string;
  /**
   * Opens the Phidget channel. The specific channel to be opened can be specified by setting any of the following properties:
   *
   * *   DeviceSerialNumber
   * *   DeviceLabel
   * *   Channel
   * *   HubPort
   * *   IsHubPortDevice
   * *   ServerName
   * *   IsLocal
   * *   IsRemote
   *
   * `open()` will return immediately, with the attachment process proceeding asynchronously. Use the Attach event or Attached property to determine when the channel is ready to use.
   * @throws {@link PhidgetError}
   */
  abstract open(): Promise<void>;
  /**
   * Opens the Phidget channel and waits a defined amount of time for the device to attach.The specific channel to be opened can be specified by setting any of the following properties:
   *
   * *   DeviceSerialNumber
   * *   DeviceLabel
   * *   Channel
   * *   HubPort
   * *   IsHubPortDevice
   * *   ServerName
   * *   IsLocal
   * *   IsRemote
   *
   * `open()` will block until the channel is attached or a timeout occurs. A timeout value of 0 will wait forever.
   * @throws {@link PhidgetError}
   * @param timeout - Timeout in milliseconds
   */
  abstract open(timeout: number): Promise<void>;
  /**
   * Gets the handle of the parent device of the given Phidget handle.
   *
   * For example, this would refer to the device the channel is a part of, or the Hub that a device is plugged into.
   *
   * This is useful when used alongside a **Phidget Manager** to create device trees like the one in the Phidget Control Panel.
   *
   * *   This can be used to travel up the device tree and get device information at each step.
   * *   The root device will return a null handle
   * *   Parent handles always refer to devices. See `getIsChannel()`
   * @returns The handle of the parent
   * @throws {@link PhidgetError}
   */
  abstract getParent(): Phidget | null;

  /**
   * The max communication speed of a high-speed capable VINT Device.
   * @returns The VINT Device max commuinication speed
   * @throws {@link PhidgetError}
   */
  abstract getMaxVINTDeviceSpeed(): number;
  /**
   * Indicates that the communication speed of this VINT device can be set.
   * @returns The VINT Device supports set speed
   * @throws {@link PhidgetError}
   */
  abstract getVINTDeviceSupportsSetSpeed(): boolean;
  /**
   * Writes a label to the device in the form of a string in the device flash memory. This label can then be used to identify the device, and will persist across power cycles.
   *
   * The label can be at most 10 UTF-16 code units. Most unicode characters take up a single code unit, but some, such as emoji, can take several.
   *
   * Some older devices can not have their labels set from Windows. For these devices the label should be set from Linux or macOS.
   *
   * Note: You should be careful when writing labels in your code, because the label is stored in flash which can only be re-written around 10,000 times before it will no longer write. If your program is complex, be sure to test it thoroughly before using WriteLabel to avoid accidentally burning out the flash.
   * @throws {@link PhidgetError}
   * @param deviceLabel - The device label
   */
  abstract writeDeviceLabel(deviceLabel: string): Promise<void>;
}

/** @public */
declare abstract class PhidgetChannel extends Phidget {
  toString(): string;
  /******************************
   *******  Phidget API  ********
   ******************************/
  getConnection(): PhidgetConnection | null;
  getKey(): string;
  open(timeout?: number): Promise<void>;
  close(): Promise<void>;
  getAttached(): boolean;
  getIsOpen(): boolean;
  getChannel(): number;
  setChannel(ch: number): void;
  getChannelClass(): ChannelClass;
  getChannelClassName(): string;
  getChannelName(): string;
  getChannelSubclass(): ChannelSubclass;
  getDeviceClass(): DeviceClass;
  getDeviceClassName(): string;
  getDeviceID(): DeviceID;
  getDeviceLabel(): string;
  setDeviceLabel(label: string): void;
  getDeviceName(): string;
  getDeviceSerialNumber(): number;
  setDeviceSerialNumber(sn: number): void;
  getDeviceSKU(): string;
  getDeviceVersion(): number;
  getHub(): Phidget;
  getHubPort(): number;
  setHubPort(hubPort: number): void;
  getHubPortSpeed(): number;
  setHubPortSpeed(hubPortSpeed: number): Promise<void>;
  getIsChannel(): boolean;
  getIsHubPortDevice(): boolean;
  setIsHubPortDevice(isHubPort: boolean): void;
  getIsLocal(): boolean;
  setIsLocal(isLocal: boolean): void;
  getIsRemote(): boolean;
  setIsRemote(isRemote: boolean): void;
  getParent(): Phidget;
  getDeviceFirmwareUpgradeString(): string;
  writeDeviceLabel(deviceLabel: string): Promise<void>;
  getDeviceChannelCount(cls?: ChannelClass): number;
  getDeviceVINTID(): number;
  getHubPortCount(): number;
  getHubPortSupportsSetSpeed(): boolean;
  getMaxHubPortSpeed(): number;
  getVINTDeviceSupportsSetSpeed(): boolean;
  getMaxVINTDeviceSpeed(): number;
  reboot(): Promise<void>;
  rebootFirmwareUpgrade(upgradeTimeout: number): Promise<void>;
}

/** @public */
export declare abstract class PhidgetConnection {
  /** Connects */
  protected abstract connect(): Promise<void>;
  /** Closes the connection */
  protected abstract close(): void;
  /** Connection status */
  connected: boolean;
  /** Name assigned to this connection via constructor options */
  readonly name: string;
  /**
   * **Error** event
   *  * `code` - The error code
   *  * `msg` - The error description
   * ---
   * `Error` is called when an error condition has been detected on the connection.
   */
  onError: ConnectionErrorHandler | null;
  /** Sets the global connection removed event handler */
  static setOnConnectionRemoved(func: ConnectionHandler): void;
  /** Sets the global connection added event handler */
  static setOnConnectionAdded(func: ConnectionHandler): void;

  /** Removes this connection from the internal Connection list, and cleans up Connection resources */
  delete(): void;
  /** A unique key representing this connection */
  getKey(): number;
  /** A unique key representing this connection */
  get key(): number;
}

/** @public */
export declare class PhidgetError extends Error {
  /**
   * The Error Code
   */
  errorCode: ErrorCode;
  innerException?: Error;
  constructor(code: ErrorCode, message?: string, innerException?: unknown);
  get stacks(): string | undefined;
}

/** @public */
export declare class PHSensor extends PHSensorBase {}

declare abstract class PHSensorBase extends PhidgetChannel {
  /**
   * **PHChange** event
   *  * `PH` - The current pH
   * ---
   * The most recent pH value the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `PHChangeTrigger` has been set to a non-zero value, the `PHChange` event will not occur until the pH has changed by at least the `PHChangeTrigger` value.
   */
  onPHChange: ((PH: number) => void) | null;

  /**
   * The PH Sensor class gathers data from a pH sensor type Phidget board.
   *
   * If you're using a simple 0-5V sensor that does not have its own firmware, use the VoltageInput or VoltageRatioInput class instead, as specified for your device.
   * @public
   */
  constructor();

  /**
   * Set this property to the measured temperature of the solution to correct the slope of the pH conversion for temperature.
   * @throws {@link PhidgetError}
   */
  get correctionTemperature(): number;
  /**
   * The minimum value that `correctionTemperature` can be set to.
   * @throws {@link PhidgetError}
   */
  get minCorrectionTemperature(): number;
  /**
   * The maximum value that `correctionTemperature` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxCorrectionTemperature(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PHChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PHChange` events can also be affected by the `PHChangeTrigger`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * The most recent pH value that the channel has reported.
   *
   * *   This value will always be between `minPH` and `maxPH`.
   * @throws {@link PhidgetError}
   */
  get PH(): number;
  /**
   * The minimum value the `PHChange` event will report.
   * @throws {@link PhidgetError}
   */
  get minPH(): number;
  /**
   * The maximum value the `PHChange` event will report.
   * @throws {@link PhidgetError}
   */
  get maxPH(): number;
  /**
   * The channel will not issue a `PHChange` event until the pH value has changed by the amount specified by the `PHChangeTrigger`.
   *
   * *   Setting the `PHChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */
  get PHChangeTrigger(): number;
  /**
   * The minimum value that `PHChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get minPHChangeTrigger(): number;
  /**
   * The maximum value that `PHChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxPHChangeTrigger(): number;
  /**
   * Set this property to the measured temperature of the solution to correct the slope of the pH conversion for temperature.
   * @returns The temperature of the solution to correct the pH measurement.
   * @throws {@link PhidgetError}
   */
  getCorrectionTemperature(): number;
  /**
   * Set this property to the measured temperature of the solution to correct the slope of the pH conversion for temperature.
   * @throws {@link PhidgetError}
   * @param correctionTemperature - The temperature of the solution to correct the pH measurement.
   */
  setCorrectionTemperature(correctionTemperature: number): Promise<void>;
  /**
   * The minimum value that `correctionTemperature` can be set to.
   * @returns The minimum temperature that can be corrected for.
   * @throws {@link PhidgetError}
   */
  getMinCorrectionTemperature(): number;
  /**
   * The maximum value that `correctionTemperature` can be set to.
   * @returns The maximum temperature that can be corrected for.
   * @throws {@link PhidgetError}
   */
  getMaxCorrectionTemperature(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PHChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PHChange` events can also be affected by the `PHChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PHChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PHChange` events can also be affected by the `PHChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * The most recent pH value that the channel has reported.
   *
   * *   This value will always be between `minPH` and `maxPH`.
   * @returns The pH value
   * @throws {@link PhidgetError}
   */
  getPH(): number;
  /**
   * The minimum value the `PHChange` event will report.
   * @returns The pH value
   * @throws {@link PhidgetError}
   */
  getMinPH(): number;
  /**
   * The maximum value the `PHChange` event will report.
   * @returns The pH value
   * @throws {@link PhidgetError}
   */
  getMaxPH(): number;
  /**
   * The channel will not issue a `PHChange` event until the pH value has changed by the amount specified by the `PHChangeTrigger`.
   *
   * *   Setting the `PHChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getPHChangeTrigger(): number;
  /**
   * The channel will not issue a `PHChange` event until the pH value has changed by the amount specified by the `PHChangeTrigger`.
   *
   * *   Setting the `PHChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param PHChangeTrigger - The change trigger value
   */
  setPHChangeTrigger(PHChangeTrigger: number): Promise<void>;
  /**
   * The minimum value that `PHChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMinPHChangeTrigger(): number;
  /**
   * The maximum value that `PHChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMaxPHChangeTrigger(): number;
}

/** @public */
export declare class PowerGuard extends PowerGuardBase {}

declare abstract class PowerGuardBase extends PhidgetChannel {
  /**
   * The Power Guard class controls the safety features and thresholds of a programmable power guard Phidget board.
   * @public
   */
  constructor();

  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get minFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get maxFailsafeTime(): number;
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the device will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @throws {@link PhidgetError}
   */
  get fanMode(): Enum.FanMode;
  /**
   * The device constantly monitors the output voltage, and if it exceeds the `overVoltage` value, it will disconnect the input from the output.
   *
   * *   This functionality is critical for protecting power supplies from regenerated voltage coming from motors. Many power supplies assume that a higher than output expected voltage is related to an internal failure to the power supply, and will permanently disable themselves to protect the system. A typical safe value is to set OverVoltage to 1-2 volts higher than the output voltage of the supply. For instance, a 12V supply would be protected by setting OverVoltage to 13V.
   * *   The device will connect the input to the output again when the voltage drops to (`overVoltage` - 1V)
   * @throws {@link PhidgetError}
   */
  get overVoltage(): number;
  /**
   * The minimum value that `overVoltage` can be set to.
   * @throws {@link PhidgetError}
   */
  get minOverVoltage(): number;
  /**
   * The maximum value that `overVoltage` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxOverVoltage(): number;
  /**
   * When `powerEnabled` is true, the device will connect the input to the output and begin monitoring.
   *
   * *   The output voltage is constantly monitored and will be automatically disconnected from the input when the output exceeds the `overVoltage` value.
   * *   `powerEnabled` allows the device to operate as a Solid State Relay, powering on or off all devices connected to the output.
   * @throws {@link PhidgetError}
   */
  get powerEnabled(): boolean;
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For Power Guard channels, this will turn off the output. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */
  enableFailsafe(failsafeTime: number): Promise<void>;
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMinFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMaxFailsafeTime(): number;
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the device will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @returns The fan mode value
   * @throws {@link PhidgetError}
   */
  getFanMode(): Enum.FanMode;
  /**
   * The `fanMode` dictates the operating condition of the fan.
   *
   * *   Choose between on, off, or automatic (based on temperature).
   * *   If the `fanMode` is set to automatic, the fan will turn on when the temperature reaches 70°C and it will remain on until the temperature falls below 55°C.
   * *   If the `fanMode` is off, the device will still turn on the fan if the temperature reaches 85°C and it will remain on until it falls below 70°C.
   * @throws {@link PhidgetError}
   * @param fanMode - The fan mode value
   */
  setFanMode(fanMode: Enum.FanMode): Promise<void>;
  /**
   * The device constantly monitors the output voltage, and if it exceeds the `overVoltage` value, it will disconnect the input from the output.
   *
   * *   This functionality is critical for protecting power supplies from regenerated voltage coming from motors. Many power supplies assume that a higher than output expected voltage is related to an internal failure to the power supply, and will permanently disable themselves to protect the system. A typical safe value is to set OverVoltage to 1-2 volts higher than the output voltage of the supply. For instance, a 12V supply would be protected by setting OverVoltage to 13V.
   * *   The device will connect the input to the output again when the voltage drops to (`overVoltage` - 1V)
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */
  getOverVoltage(): number;
  /**
   * The device constantly monitors the output voltage, and if it exceeds the `overVoltage` value, it will disconnect the input from the output.
   *
   * *   This functionality is critical for protecting power supplies from regenerated voltage coming from motors. Many power supplies assume that a higher than output expected voltage is related to an internal failure to the power supply, and will permanently disable themselves to protect the system. A typical safe value is to set OverVoltage to 1-2 volts higher than the output voltage of the supply. For instance, a 12V supply would be protected by setting OverVoltage to 13V.
   * *   The device will connect the input to the output again when the voltage drops to (`overVoltage` - 1V)
   * @throws {@link PhidgetError}
   * @param overVoltage - The voltage value
   */
  setOverVoltage(overVoltage: number): Promise<void>;
  /**
   * The minimum value that `overVoltage` can be set to.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */
  getMinOverVoltage(): number;
  /**
   * The maximum value that `overVoltage` can be set to.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */
  getMaxOverVoltage(): number;
  /**
   * When `powerEnabled` is true, the device will connect the input to the output and begin monitoring.
   *
   * *   The output voltage is constantly monitored and will be automatically disconnected from the input when the output exceeds the `overVoltage` value.
   * *   `powerEnabled` allows the device to operate as a Solid State Relay, powering on or off all devices connected to the output.
   * @returns The power enabled value.
   * @throws {@link PhidgetError}
   */
  getPowerEnabled(): boolean;
  /**
   * When `powerEnabled` is true, the device will connect the input to the output and begin monitoring.
   *
   * *   The output voltage is constantly monitored and will be automatically disconnected from the input when the output exceeds the `overVoltage` value.
   * *   `powerEnabled` allows the device to operate as a Solid State Relay, powering on or off all devices connected to the output.
   * @throws {@link PhidgetError}
   * @param powerEnabled - The power enabled value.
   */
  setPowerEnabled(powerEnabled: boolean): Promise<void>;
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */
  resetFailsafe(): Promise<void>;
}

/**
 * The voltage level being provided to the sensor
 * @public
 */
export declare enum PowerSupply {
  /**
   * Switch the sensor power supply off
   * @public
   */
  OFF = 1,
  /**
   * The sensor is provided with 12 volts
   * @public
   */
  VOLTS_12 = 2,
  /**
   * The sensor is provided with 24 volts
   * @public
   */
  VOLTS_24 = 3,
}

/** @public */
export declare class PressureSensor extends PressureSensorBase {}

declare abstract class PressureSensorBase extends PhidgetChannel {
  /**
   * **PressureChange** event
   *  * `pressure` - The new measured pressure
   * ---
   * The most recent pressure value the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `pressureChangeTrigger` has been set to a non-zero value, the `PressureChange` event will not occur until the pressure has changed by at least the `pressureChangeTrigger` value.
   */
  onPressureChange: ((pressure: number) => void) | null;

  /**
   * The Pressure Sensor class gathers data from the pressure sensor on a Phidget board.
   *
   * If you're using a simple 0-5V sensor that does not have its own firmware, use the VoltageInput or VoltageRatioInput class instead, as specified for your device.
   * @public
   */
  constructor();

  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PressureChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PressureChange` events can also be affected by the `pressureChangeTrigger`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * The most recent pressure value that the channel has reported.
   *
   * *   This value will always be between `minPressure` and `maxPressure`.
   * @throws {@link PhidgetError}
   */
  get pressure(): number;
  /**
   * The minimum value the `PressureChange` event will report.
   * @throws {@link PhidgetError}
   */
  get minPressure(): number;
  /**
   * The maximum value the `PressureChange` event will report.
   * @throws {@link PhidgetError}
   */
  get maxPressure(): number;
  /**
   * The channel will not issue a `PressureChange` event until the pressure value has changed by the amount specified by the `pressureChangeTrigger`.
   *
   * *   Setting the `pressureChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */
  get pressureChangeTrigger(): number;
  /**
   * The minimum value that `pressureChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get minPressureChangeTrigger(): number;
  /**
   * The maximum value that `pressureChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxPressureChangeTrigger(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PressureChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PressureChange` events can also be affected by the `pressureChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PressureChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `PressureChange` events can also be affected by the `pressureChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * The most recent pressure value that the channel has reported.
   *
   * *   This value will always be between `minPressure` and `maxPressure`.
   * @returns The pressure value
   * @throws {@link PhidgetError}
   */
  getPressure(): number;
  /**
   * The minimum value the `PressureChange` event will report.
   * @returns The pressure value
   * @throws {@link PhidgetError}
   */
  getMinPressure(): number;
  /**
   * The maximum value the `PressureChange` event will report.
   * @returns The pressure value
   * @throws {@link PhidgetError}
   */
  getMaxPressure(): number;
  /**
   * The channel will not issue a `PressureChange` event until the pressure value has changed by the amount specified by the `pressureChangeTrigger`.
   *
   * *   Setting the `pressureChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getPressureChangeTrigger(): number;
  /**
   * The channel will not issue a `PressureChange` event until the pressure value has changed by the amount specified by the `pressureChangeTrigger`.
   *
   * *   Setting the `pressureChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param pressureChangeTrigger - The change trigger value
   */
  setPressureChangeTrigger(pressureChangeTrigger: number): Promise<void>;
  /**
   * The minimum value that `pressureChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMinPressureChangeTrigger(): number;
  /**
   * The maximum value that `pressureChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMaxPressureChangeTrigger(): number;
}

/** @public */
export declare class RCServo extends RCServoBase {
  getAcceleration(): number;
  getMinAcceleration(): number;
  getMaxAcceleration(): number;
  getPosition(): number;
  setMaxPosition(maxPosition: number): void;
  setMinPosition(minPosition: number): void;
  getTargetPosition(): number;
  getVelocity(): number;
  getVelocityLimit(): number;
  getMinVelocityLimit(): number;
  getMaxVelocityLimit(): number;
  setAcceleration(acceleration: number): Promise<void>;
  setTargetPosition(targetPosition: number): Promise<void>;
  setVelocityLimit(velocityLimit: number): Promise<void>;
}

declare abstract class RCServoBase extends PhidgetChannel {
  /**
   * **PositionChange** event
   *  * `position` - The position value
   * ---
   * An event that occurs when the position changes on a RC servo motor.
   */
  onPositionChange: ((position: number) => void) | null;

  /**
   * **VelocityChange** event
   *  * `velocity` - The velocity value
   * ---
   * An event that occurs when the velocity changes on a RC servo motor.
   */
  onVelocityChange: ((velocity: number) => void) | null;

  /**
   * **TargetPositionReached** event
   *  * `position` - The position value
   * ---
   * Occurs when the RC servo motor has reached the `targetPosition`.
   *
   * *   The controller cannot know if the RC servo motor has physically reached the target position. When `targetPosition` is reached, it simply means the controller pulse width output is matching its target.
   */
  onTargetPositionReached: ((position: number) => void) | null;

  /**
   * The RC Servo class controls the signal being sent to the servo motors from the Phidget controller in order to control their position. This class provides control of the position, velocity, acceleration, and supply voltage of the attached servo.
   * @public
   */
  constructor();

  /**
   * When changing velocity, the RC servo motor will accelerate/decelerate at this rate.
   *
   * *   The acceleration is bounded by `maxAcceleration` and `minAcceleration`.
   *
   * *   Using the **default settings** this acceleration will correspond acceleration of servo arm in **degrees/s2**, for many standard RC servos.
   *
   * *   `speedRampingState` controls whether or not the acceleration value is actually applied when trying to reach a target position.
   * *   There is a practical limit on how fast your RC servo motor can accelerate. This is based on the load and physical design of the motor.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */
  get acceleration(): number;
  /**
   * The minimum value that `acceleration` can be set to.
   *
   * *   This value depends on `minPosition`/`maxPosition` and `minPulseWidth`/`maxPulseWidth`
   * .
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */
  get minAcceleration(): number;
  /**
   * The maximum acceleration that `acceleration` can be set to.
   *
   * *   This value depends on `minPosition`/`maxPosition` and `minPulseWidth`/`maxPulseWidth`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */
  get maxAcceleration(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `VelocityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * When engaged, a RC servo motor has the ability to be positioned. When disengaged, no commands are sent to the RC servo motor.
   *
   * *   There is no position feedback to the controller, so the RC servo motor will immediately snap to the `targetPosition` after being engaged from a disengaged state.
   * *   This property is useful for relaxing a servo once it has reached a given position.
   * *   If you are concerned about tracking position accurately, you should not disengage the motor while `isMoving` is true.
   * @throws {@link PhidgetError}
   */
  get engaged(): boolean;
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get minFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get maxFailsafeTime(): number;
  /**
   * `isMoving` returns true if the RC servo motor is currently in motion.
   *
   * *   The controller cannot know if the RC servo motor is physically moving. When `isMoving` is false, it simply means there are no commands in the pipeline to the RC servo motor.
   * @throws {@link PhidgetError}
   */
  get isMoving(): boolean;
  /**
   * The most recent position of the RC servo motor that the controller has reported.
   *
   * *   This value will always be between `minPosition` and `maxPosition`.
   *
   * *   Using the **default settings** this position will correspond to the rotation of the servo arm in **degrees**, for many standard RC servos.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */
  get position(): number;
  /**
   * The minimum position that `targetPosition` can be set to.
   *
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */
  get minPosition(): number;
  set minPosition(minPosition: number);
  /**
   * The maximum position `targetPosition` can be set to.
   *
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */
  get maxPosition(): number;
  set maxPosition(maxPosition: number);
  /**
   * The `minPulseWidth` represents the minimum pulse width that your RC servo motor specifies.
   *
   * *   This value can be found in the data sheet of most RC servo motors.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */
  get minPulseWidth(): number;
  /**
   * The `maxPulseWidth` represents the maximum pulse width that your RC servo motor specifies.
   *
   * *   This value can be found in the data sheet of most RC servo motors.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */
  get maxPulseWidth(): number;
  /**
   * The minimum pulse width that `minPulseWidth` can be set to.
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */
  get minPulseWidthLimit(): number;
  /**
   * The maximum pulse width that `maxPulseWidth` can be set to.
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */
  get maxPulseWidthLimit(): number;
  /**
   * When speed ramping state is enabled, the controller will take the `acceleration` and `velocityLimit` properties into account when moving the RC servo motor, usually resulting in smooth motion. If speed ramping state is not enabled, the controller will simply set the RC servo motor to the requested position.
   * @throws {@link PhidgetError}
   */
  get speedRampingState(): boolean;
  /**
   * If the RC servo motor is configured and `targetPosition` is set, the controller will continuously try to reach targeted position.
   *
   * *   The target position is bounded by `minPosition` and `maxPosition`.
   *
   * *   Using the **default settings** this position will correspond to the rotation of the servo arm in **degrees**, for many standard RC servos.
   *
   * *   If the RC servo motor is not engaged, then the position cannot be read.
   * *   The position can still be set while the RC servo motor is not engaged. Once engaged, the RC servo motor will snap to position, assuming it is not there already.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   * ### Position and Pulse Width
   *
   * *   An RC servo motor's position is controlled using a type of **Pulse Width Modulation**, sending voltage pulses of a given time span, or **Pulse Width** to the servo.
   * *   The servo translates the **Pulse Width** of the control signal to a corresponding position of the servo arm.
   * *   Knowing this, a servo's range of motion can be thought of in terms of a `minPulseWidth` and a `maxPulseWidth` corresponding to range of pulse widths that produce the servo arm's full **range of movement**.
   *
   * *   In Phidget22, you can adjust the `minPulseWidth` and `maxPulseWidth` stored by the library to match the desired **range of movement** you expect from your servo.
   *
   * *   Since directly setting the timing of RC servo pulse widths is not very intuitive for most purpses, we map these pulse widths to a user-defied _**Minimum**_ and _**Maximum**_ **Position**.This allows you to define the servo's position in terms best suited to your application, such as degrees, fractions of a rotation, or even some measure of speed for a continuous-rotation servo.
   * *   By setting the servo's `targetPosition` to `maxPosition`, the controller will send pulses of `maxPulseWidth` to the servo.
   *     *   Similarly, `minPosition` will send pulses of `minPulseWidth` to the servo
   *     *   `maxPosition` can be set smaller than `minPosition` to invert movement of the servo, if it helps your application.
   * *   Setting a `targetPosition` will transate the position between `minPosition` and `maxPosition` to a corresponding **Pulse Width** between `minPulseWidth` and `maxPulseWidth`, in turn sending the servo arm to the desired position.
   * *   Setting `velocityLimit` and `acceleration` for your servo will limit the rate of change of the servo's position in terms of one _**UserUnit**_ per second (or /s2). Here, a _**UserUnit**_ is whatever distance is maked by the change of the `targetPosition` by **1.0**
   *
   * ### Adjusting the Servo's Limits
   *
   * *   **To tune your program to a specific servo:**
   *
   * 1.  First adjust the servo's range of motion by setting the `maxPulseWidth` and `minPulseWidth`. You can use the default values for these _(or the ones on your servo's datasheet)_ as a starting point.
   * 2.  Send the servo to `maxPosition` and `minPosition` to check the results. Repeat steps 1 and 2 as nessesarry.
   * 3.  Set the `maxPosition` and `minPosition` to match whatever numbers you find best suited to your application.
   * @throws {@link PhidgetError}
   */
  get targetPosition(): number;
  /**
   * The `torque` is a ratio of the maximum available torque.
   *
   * *   The torque is bounded by `minTorque` and `maxTorque`
   * *   Increasing the torque will increase the speed and power consumption of the RC servo motor.
   * @throws {@link PhidgetError}
   */
  get torque(): number;
  /**
   * The minimum value that `torque` can be set to.
   *
   * *   `torque` is a ratio of the maximum available torque, therefore the minimum torque is a unitless constant.
   * @throws {@link PhidgetError}
   */
  get minTorque(): number;
  /**
   * The maximum value that `torque` can be set to.
   *
   * *   `torque` is a ratio of the maximum available torque, therefore the minimum torque is a unitless constant.
   * @throws {@link PhidgetError}
   */
  get maxTorque(): number;
  /**
   * The velocity that the RC servo motor is being driven at.
   *
   * *   A negative value means the RC servo motor is moving towards a lower position.
   * *   The velocity range of the RC servo motor will be from -`velocityLimit` to +`velocityLimit`, depending on direction.
   * *   This is not the actual physical velocity of the RC servo motor.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */
  get velocity(): number;
  /**
   * When moving, the RC servo motor velocity will be limited by this value.*   The velocity limit is bounded by `minVelocityLimit` and `maxVelocityLimit`.
   *
   * *   Using the **default settings** this velocity will correspond to the maximum speed of rotation of servo arm in **degrees/s**, for many standard RC servos.
   *
   * *   `speedRampingState` controls whether or not the velocity limit value is actually applied when trying to reach a target position.
   * *   The velocity range of the RC servo motor will be from -`velocityLimit` to +`velocityLimit`, depending on direction.
   * *   Note that when this value is set to 0, the RC servo motor will not move.
   * *   There is a practical limit on how fast your servo can rotate, based on the physical design of the motor.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */
  get velocityLimit(): number;
  /**
   * The minimum velocity `velocityLimit` can be set to.
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */
  get minVelocityLimit(): number;
  /**
   * The maximum velocity `velocityLimit` can be set to. This value depends on `minPosition`/`maxPosition` and `minPulseWidth`/`maxPulseWidth`.
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   */
  get maxVelocityLimit(): number;
  /**
   * The supply voltage for the RC servo motor.
   *
   * *   If your controller supports multiple RC servo motors, every motor will have the same supply voltage. It is not possible to set individual supply voltages.
   * @throws {@link PhidgetError}
   */
  get voltage(): Enum.RCServoVoltage;
  /**
   * When changing velocity, the RC servo motor will accelerate/decelerate at this rate.
   *
   * *   The acceleration is bounded by `maxAcceleration` and `minAcceleration`.
   *
   * *   Using the **default settings** this acceleration will correspond acceleration of servo arm in **degrees/s2**, for many standard RC servos.
   *
   * *   `speedRampingState` controls whether or not the acceleration value is actually applied when trying to reach a target position.
   * *   There is a practical limit on how fast your RC servo motor can accelerate. This is based on the load and physical design of the motor.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The acceleration value
   * @throws {@link PhidgetError}
   */
  abstract getAcceleration(): number;
  /**
   * When changing velocity, the RC servo motor will accelerate/decelerate at this rate.
   *
   * *   The acceleration is bounded by `maxAcceleration` and `minAcceleration`.
   *
   * *   Using the **default settings** this acceleration will correspond acceleration of servo arm in **degrees/s2**, for many standard RC servos.
   *
   * *   `speedRampingState` controls whether or not the acceleration value is actually applied when trying to reach a target position.
   * *   There is a practical limit on how fast your RC servo motor can accelerate. This is based on the load and physical design of the motor.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   * @param acceleration - The acceleration value
   */
  abstract setAcceleration(acceleration: number): Promise<void>;
  /**
   * The minimum value that `acceleration` can be set to.
   *
   * *   This value depends on `minPosition`/`maxPosition` and `minPulseWidth`/`maxPulseWidth`
   * .
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The acceleration value
   * @throws {@link PhidgetError}
   */
  abstract getMinAcceleration(): number;
  /**
   * The maximum acceleration that `acceleration` can be set to.
   *
   * *   This value depends on `minPosition`/`maxPosition` and `minPulseWidth`/`maxPulseWidth`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The acceleration value
   * @throws {@link PhidgetError}
   */
  abstract getMaxAcceleration(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `VelocityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `VelocityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * When engaged, a RC servo motor has the ability to be positioned. When disengaged, no commands are sent to the RC servo motor.
   *
   * *   There is no position feedback to the controller, so the RC servo motor will immediately snap to the `targetPosition` after being engaged from a disengaged state.
   * *   This property is useful for relaxing a servo once it has reached a given position.
   * *   If you are concerned about tracking position accurately, you should not disengage the motor while `isMoving` is true.
   * @returns The engaged value
   * @throws {@link PhidgetError}
   */
  getEngaged(): boolean;
  /**
   * When engaged, a RC servo motor has the ability to be positioned. When disengaged, no commands are sent to the RC servo motor.
   *
   * *   There is no position feedback to the controller, so the RC servo motor will immediately snap to the `targetPosition` after being engaged from a disengaged state.
   * *   This property is useful for relaxing a servo once it has reached a given position.
   * *   If you are concerned about tracking position accurately, you should not disengage the motor while `isMoving` is true.
   * @throws {@link PhidgetError}
   * @param engaged - The engaged value
   */
  setEngaged(engaged: boolean): Promise<void>;
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For RC Servo channels, this will disengage the servo. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */
  enableFailsafe(failsafeTime: number): Promise<void>;
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMinFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMaxFailsafeTime(): number;
  /**
   * `isMoving` returns true if the RC servo motor is currently in motion.
   *
   * *   The controller cannot know if the RC servo motor is physically moving. When `isMoving` is false, it simply means there are no commands in the pipeline to the RC servo motor.
   * @returns The moving value
   * @throws {@link PhidgetError}
   */
  getIsMoving(): boolean;
  /**
   * The most recent position of the RC servo motor that the controller has reported.
   *
   * *   This value will always be between `minPosition` and `maxPosition`.
   *
   * *   Using the **default settings** this position will correspond to the rotation of the servo arm in **degrees**, for many standard RC servos.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  abstract getPosition(): number;
  /**
   * The minimum position that `targetPosition` can be set to.
   *
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   * @param minPosition - The position value
   */
  abstract setMinPosition(minPosition: number): void;
  /**
   * The minimum position that `targetPosition` can be set to.
   *
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  getMinPosition(): number;
  /**
   * The maximum position `targetPosition` can be set to.
   *
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   * @param maxPosition - The position value
   */
  abstract setMaxPosition(maxPosition: number): void;
  /**
   * The maximum position `targetPosition` can be set to.
   *
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  getMaxPosition(): number;
  /**
   * The `minPulseWidth` represents the minimum pulse width that your RC servo motor specifies.
   *
   * *   This value can be found in the data sheet of most RC servo motors.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   * @param minPulseWidth - The pulse width value
   */
  setMinPulseWidth(minPulseWidth: number): Promise<void>;
  /**
   * The `minPulseWidth` represents the minimum pulse width that your RC servo motor specifies.
   *
   * *   This value can be found in the data sheet of most RC servo motors.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The pulse width value
   * @throws {@link PhidgetError}
   */
  getMinPulseWidth(): number;
  /**
   * The `maxPulseWidth` represents the maximum pulse width that your RC servo motor specifies.
   *
   * *   This value can be found in the data sheet of most RC servo motors.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   * @param maxPulseWidth - The pulse width value
   */
  setMaxPulseWidth(maxPulseWidth: number): Promise<void>;
  /**
   * The `maxPulseWidth` represents the maximum pulse width that your RC servo motor specifies.
   *
   * *   This value can be found in the data sheet of most RC servo motors.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The pulse width value
   * @throws {@link PhidgetError}
   */
  getMaxPulseWidth(): number;
  /**
   * The minimum pulse width that `minPulseWidth` can be set to.
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The pulse width value
   * @throws {@link PhidgetError}
   */
  getMinPulseWidthLimit(): number;
  /**
   * The maximum pulse width that `maxPulseWidth` can be set to.
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The pulse width value
   * @throws {@link PhidgetError}
   */
  getMaxPulseWidthLimit(): number;
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */
  resetFailsafe(): Promise<void>;
  /**
   * When speed ramping state is enabled, the controller will take the `acceleration` and `velocityLimit` properties into account when moving the RC servo motor, usually resulting in smooth motion. If speed ramping state is not enabled, the controller will simply set the RC servo motor to the requested position.
   * @returns The speed ramping state value
   * @throws {@link PhidgetError}
   */
  getSpeedRampingState(): boolean;
  /**
   * When speed ramping state is enabled, the controller will take the `acceleration` and `velocityLimit` properties into account when moving the RC servo motor, usually resulting in smooth motion. If speed ramping state is not enabled, the controller will simply set the RC servo motor to the requested position.
   * @throws {@link PhidgetError}
   * @param speedRampingState - The speed ramping state value
   */
  setSpeedRampingState(speedRampingState: boolean): Promise<void>;
  /**
   * If the RC servo motor is configured and `targetPosition` is set, the controller will continuously try to reach targeted position.
   *
   * *   The target position is bounded by `minPosition` and `maxPosition`.
   *
   * *   Using the **default settings** this position will correspond to the rotation of the servo arm in **degrees**, for many standard RC servos.
   *
   * *   If the RC servo motor is not engaged, then the position cannot be read.
   * *   The position can still be set while the RC servo motor is not engaged. Once engaged, the RC servo motor will snap to position, assuming it is not there already.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   * ### Position and Pulse Width
   *
   * *   An RC servo motor's position is controlled using a type of **Pulse Width Modulation**, sending voltage pulses of a given time span, or **Pulse Width** to the servo.
   * *   The servo translates the **Pulse Width** of the control signal to a corresponding position of the servo arm.
   * *   Knowing this, a servo's range of motion can be thought of in terms of a `minPulseWidth` and a `maxPulseWidth` corresponding to range of pulse widths that produce the servo arm's full **range of movement**.
   *
   * *   In Phidget22, you can adjust the `minPulseWidth` and `maxPulseWidth` stored by the library to match the desired **range of movement** you expect from your servo.
   *
   * *   Since directly setting the timing of RC servo pulse widths is not very intuitive for most purpses, we map these pulse widths to a user-defied _**Minimum**_ and _**Maximum**_ **Position**.This allows you to define the servo's position in terms best suited to your application, such as degrees, fractions of a rotation, or even some measure of speed for a continuous-rotation servo.
   * *   By setting the servo's `targetPosition` to `maxPosition`, the controller will send pulses of `maxPulseWidth` to the servo.
   *     *   Similarly, `minPosition` will send pulses of `minPulseWidth` to the servo
   *     *   `maxPosition` can be set smaller than `minPosition` to invert movement of the servo, if it helps your application.
   * *   Setting a `targetPosition` will transate the position between `minPosition` and `maxPosition` to a corresponding **Pulse Width** between `minPulseWidth` and `maxPulseWidth`, in turn sending the servo arm to the desired position.
   * *   Setting `velocityLimit` and `acceleration` for your servo will limit the rate of change of the servo's position in terms of one _**UserUnit**_ per second (or /s2). Here, a _**UserUnit**_ is whatever distance is maked by the change of the `targetPosition` by **1.0**
   *
   * ### Adjusting the Servo's Limits
   *
   * *   **To tune your program to a specific servo:**
   *
   * 1.  First adjust the servo's range of motion by setting the `maxPulseWidth` and `minPulseWidth`. You can use the default values for these _(or the ones on your servo's datasheet)_ as a starting point.
   * 2.  Send the servo to `maxPosition` and `minPosition` to check the results. Repeat steps 1 and 2 as nessesarry.
   * 3.  Set the `maxPosition` and `minPosition` to match whatever numbers you find best suited to your application.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  abstract getTargetPosition(): number;
  /**
   * If the RC servo motor is configured and `targetPosition` is set, the controller will continuously try to reach targeted position.
   *
   * *   The target position is bounded by `minPosition` and `maxPosition`.
   *
   * *   Using the **default settings** this position will correspond to the rotation of the servo arm in **degrees**, for many standard RC servos.
   *
   * *   If the RC servo motor is not engaged, then the position cannot be read.
   * *   The position can still be set while the RC servo motor is not engaged. Once engaged, the RC servo motor will snap to position, assuming it is not there already.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   * ### Position and Pulse Width
   *
   * *   An RC servo motor's position is controlled using a type of **Pulse Width Modulation**, sending voltage pulses of a given time span, or **Pulse Width** to the servo.
   * *   The servo translates the **Pulse Width** of the control signal to a corresponding position of the servo arm.
   * *   Knowing this, a servo's range of motion can be thought of in terms of a `minPulseWidth` and a `maxPulseWidth` corresponding to range of pulse widths that produce the servo arm's full **range of movement**.
   *
   * *   In Phidget22, you can adjust the `minPulseWidth` and `maxPulseWidth` stored by the library to match the desired **range of movement** you expect from your servo.
   *
   * *   Since directly setting the timing of RC servo pulse widths is not very intuitive for most purpses, we map these pulse widths to a user-defied _**Minimum**_ and _**Maximum**_ **Position**.This allows you to define the servo's position in terms best suited to your application, such as degrees, fractions of a rotation, or even some measure of speed for a continuous-rotation servo.
   * *   By setting the servo's `targetPosition` to `maxPosition`, the controller will send pulses of `maxPulseWidth` to the servo.
   *     *   Similarly, `minPosition` will send pulses of `minPulseWidth` to the servo
   *     *   `maxPosition` can be set smaller than `minPosition` to invert movement of the servo, if it helps your application.
   * *   Setting a `targetPosition` will transate the position between `minPosition` and `maxPosition` to a corresponding **Pulse Width** between `minPulseWidth` and `maxPulseWidth`, in turn sending the servo arm to the desired position.
   * *   Setting `velocityLimit` and `acceleration` for your servo will limit the rate of change of the servo's position in terms of one _**UserUnit**_ per second (or /s2). Here, a _**UserUnit**_ is whatever distance is maked by the change of the `targetPosition` by **1.0**
   *
   * ### Adjusting the Servo's Limits
   *
   * *   **To tune your program to a specific servo:**
   *
   * 1.  First adjust the servo's range of motion by setting the `maxPulseWidth` and `minPulseWidth`. You can use the default values for these _(or the ones on your servo's datasheet)_ as a starting point.
   * 2.  Send the servo to `maxPosition` and `minPosition` to check the results. Repeat steps 1 and 2 as nessesarry.
   * 3.  Set the `maxPosition` and `minPosition` to match whatever numbers you find best suited to your application.
   * @throws {@link PhidgetError}
   * @param targetPosition - The position value
   */
  abstract setTargetPosition(targetPosition: number): Promise<void>;
  /**
   * The `torque` is a ratio of the maximum available torque.
   *
   * *   The torque is bounded by `minTorque` and `maxTorque`
   * *   Increasing the torque will increase the speed and power consumption of the RC servo motor.
   * @returns The torque value.
   * @throws {@link PhidgetError}
   */
  getTorque(): number;
  /**
   * The `torque` is a ratio of the maximum available torque.
   *
   * *   The torque is bounded by `minTorque` and `maxTorque`
   * *   Increasing the torque will increase the speed and power consumption of the RC servo motor.
   * @throws {@link PhidgetError}
   * @param torque - The torque value.
   */
  setTorque(torque: number): Promise<void>;
  /**
   * The minimum value that `torque` can be set to.
   *
   * *   `torque` is a ratio of the maximum available torque, therefore the minimum torque is a unitless constant.
   * @returns The torque value
   * @throws {@link PhidgetError}
   */
  getMinTorque(): number;
  /**
   * The maximum value that `torque` can be set to.
   *
   * *   `torque` is a ratio of the maximum available torque, therefore the minimum torque is a unitless constant.
   * @returns The torque value
   * @throws {@link PhidgetError}
   */
  getMaxTorque(): number;
  /**
   * The velocity that the RC servo motor is being driven at.
   *
   * *   A negative value means the RC servo motor is moving towards a lower position.
   * *   The velocity range of the RC servo motor will be from -`velocityLimit` to +`velocityLimit`, depending on direction.
   * *   This is not the actual physical velocity of the RC servo motor.
   *
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  abstract getVelocity(): number;
  /**
   * When moving, the RC servo motor velocity will be limited by this value.*   The velocity limit is bounded by `minVelocityLimit` and `maxVelocityLimit`.
   *
   * *   Using the **default settings** this velocity will correspond to the maximum speed of rotation of servo arm in **degrees/s**, for many standard RC servos.
   *
   * *   `speedRampingState` controls whether or not the velocity limit value is actually applied when trying to reach a target position.
   * *   The velocity range of the RC servo motor will be from -`velocityLimit` to +`velocityLimit`, depending on direction.
   * *   Note that when this value is set to 0, the RC servo motor will not move.
   * *   There is a practical limit on how fast your servo can rotate, based on the physical design of the motor.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  abstract getVelocityLimit(): number;
  /**
   * When moving, the RC servo motor velocity will be limited by this value.*   The velocity limit is bounded by `minVelocityLimit` and `maxVelocityLimit`.
   *
   * *   Using the **default settings** this velocity will correspond to the maximum speed of rotation of servo arm in **degrees/s**, for many standard RC servos.
   *
   * *   `speedRampingState` controls whether or not the velocity limit value is actually applied when trying to reach a target position.
   * *   The velocity range of the RC servo motor will be from -`velocityLimit` to +`velocityLimit`, depending on direction.
   * *   Note that when this value is set to 0, the RC servo motor will not move.
   * *   There is a practical limit on how fast your servo can rotate, based on the physical design of the motor.
   * *   The units for `targetPosition`, `velocityLimit`, and `acceleration` are configured by scaling the internal timing (set with `minPulseWidth` and `maxPulseWidth`) to a user specified range with `minPosition` and `maxPosition`.
   *
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @throws {@link PhidgetError}
   * @param velocityLimit - The velocity value
   */
  abstract setVelocityLimit(velocityLimit: number): Promise<void>;
  /**
   * The minimum velocity `velocityLimit` can be set to.
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  abstract getMinVelocityLimit(): number;
  /**
   * The maximum velocity `velocityLimit` can be set to. This value depends on `minPosition`/`maxPosition` and `minPulseWidth`/`maxPulseWidth`.
   *
   * See `targetPosition` for a deeper explanation of how the settings of your RC Servo controller interact to move your servo.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  abstract getMaxVelocityLimit(): number;
  /**
   * The supply voltage for the RC servo motor.
   *
   * *   If your controller supports multiple RC servo motors, every motor will have the same supply voltage. It is not possible to set individual supply voltages.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */
  getVoltage(): Enum.RCServoVoltage;
  /**
   * The supply voltage for the RC servo motor.
   *
   * *   If your controller supports multiple RC servo motors, every motor will have the same supply voltage. It is not possible to set individual supply voltages.
   * @throws {@link PhidgetError}
   * @param voltage - The voltage value
   */
  setVoltage(voltage: Enum.RCServoVoltage): Promise<void>;
}

/**
 * Voltage supplied to all attached servos
 * @public
 */
export declare enum RCServoVoltage {
  /**
   * Run all servos on 5V DC
   * @public
   */
  VOLTS_5_0 = 1,
  /**
   * Run all servos on 6V DC
   * @public
   */
  VOLTS_6_0 = 2,
  /**
   * Run all servos on 7.4V DC
   * @public
   */
  VOLTS_7_4 = 3,
}

/** @public */
export declare class ResistanceInput extends ResistanceInputBase {}

declare abstract class ResistanceInputBase extends PhidgetChannel {
  /**
   * **ResistanceChange** event
   *  * `resistance` - The resistance value
   * ---
   * The most recent resistance value the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `resistanceChangeTrigger` has been set to a non-zero value, the `ResistanceChange` event will not occur until the resistance has changed by at least the `resistanceChangeTrigger` value.
   */
  onResistanceChange: ((resistance: number) => void) | null;

  /**
   * The Resistance Input class measures the resistance of a circuit connected to the Phidget, which is used to read resistance-based sensors such as platinum RTDs.
   * @public
   */
  constructor();

  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `ResistanceChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `ResistanceChange` events can also be affected by the `resistanceChangeTrigger`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * The most recent resistance value that the channel has reported.
   *
   * *   This value will always be between `minResistance` and `maxResistance`.
   * *   The `resistance` value will change when the device is also being used as a temperature sensor. This is a side effect of increasing accuracy on the temperature channel.
   * @throws {@link PhidgetError}
   */
  get resistance(): number;
  /**
   * The minimum value the `ResistanceChange` event will report.
   *
   * *   When the device is also being used as a TemperatureSensor the `minResistance` and `maxResistance` will not represent the true input range. This is a side effect of increasing accuracy on the temperature channel.
   * @throws {@link PhidgetError}
   */
  get minResistance(): number;
  /**
   * The maximum value the `ResistanceChange` event will report.
   * @throws {@link PhidgetError}
   */
  get maxResistance(): number;
  /**
   * The channel will not issue a `ResistanceChange` event until the resistance value has changed by the amount specified by the `resistanceChangeTrigger`.
   *
   * *   Setting the `resistanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */
  get resistanceChangeTrigger(): number;
  /**
   * The minimum value that the `resistanceChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get minResistanceChangeTrigger(): number;
  /**
   * The maximum value that `resistanceChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxResistanceChangeTrigger(): number;
  /**
   * Select the RTD wiring configuration.
   *
   * *   More information about RTD wiring can be found in the user guide.
   * @throws {@link PhidgetError}
   */
  get RTDWireSetup(): Enum.RTDWireSetup;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `ResistanceChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `ResistanceChange` events can also be affected by the `resistanceChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `ResistanceChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `ResistanceChange` events can also be affected by the `resistanceChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * The most recent resistance value that the channel has reported.
   *
   * *   This value will always be between `minResistance` and `maxResistance`.
   * *   The `resistance` value will change when the device is also being used as a temperature sensor. This is a side effect of increasing accuracy on the temperature channel.
   * @returns The resistance value
   * @throws {@link PhidgetError}
   */
  getResistance(): number;
  /**
   * The minimum value the `ResistanceChange` event will report.
   *
   * *   When the device is also being used as a TemperatureSensor the `minResistance` and `maxResistance` will not represent the true input range. This is a side effect of increasing accuracy on the temperature channel.
   * @returns The minimum resistance
   * @throws {@link PhidgetError}
   */
  getMinResistance(): number;
  /**
   * The maximum value the `ResistanceChange` event will report.
   * @returns The resistance value
   * @throws {@link PhidgetError}
   */
  getMaxResistance(): number;
  /**
   * The channel will not issue a `ResistanceChange` event until the resistance value has changed by the amount specified by the `resistanceChangeTrigger`.
   *
   * *   Setting the `resistanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getResistanceChangeTrigger(): number;
  /**
   * The channel will not issue a `ResistanceChange` event until the resistance value has changed by the amount specified by the `resistanceChangeTrigger`.
   *
   * *   Setting the `resistanceChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param resistanceChangeTrigger - The change trigger value
   */
  setResistanceChangeTrigger(resistanceChangeTrigger: number): Promise<void>;
  /**
   * The minimum value that the `resistanceChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMinResistanceChangeTrigger(): number;
  /**
   * The maximum value that `resistanceChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMaxResistanceChangeTrigger(): number;
  /**
   * Select the RTD wiring configuration.
   *
   * *   More information about RTD wiring can be found in the user guide.
   * @returns Wire setup value
   * @throws {@link PhidgetError}
   */
  getRTDWireSetup(): Enum.RTDWireSetup;
  /**
   * Select the RTD wiring configuration.
   *
   * *   More information about RTD wiring can be found in the user guide.
   * @throws {@link PhidgetError}
   * @param RTDWireSetup - Wire setup value
   */
  setRTDWireSetup(RTDWireSetup: Enum.RTDWireSetup): Promise<void>;
}

/** @public */
export declare class RFID extends RFIDBase {
  getLastTag(): {
    tagString: string;
    protocol: RFIDProtocol;
  };
}

declare abstract class RFIDBase extends PhidgetChannel {
  /**
   * **Tag** event
   *  * `tag` - Data from the tag
   *  * `protocol` - Communication protocol of the tag
   * ---
   * Occurs when an RFID tag is read.
   */
  onTag: ((tag: string, protocol: Enum.RFIDProtocol) => void) | null;

  /**
   * **TagLost** event
   *  * `tag` - Data from the lost tag
   *  * `protocol` - Communication protocol of the lost tag
   * ---
   * Occurs when an RFID tag that was being read is no longer seen by the reader. Typically this indicates the tag has been removed from the read range, though it could also happen due to interference from multiple tags entering the read range at the same time.
   */
  onTagLost: ((tag: string, protocol: Enum.RFIDProtocol) => void) | null;

  /**
   * The RFID class provides methods for Phidget RFID boards to read and write (if writing is supported) to RFID tags.
   * @public
   */
  constructor();

  /**
   * The on/off state of the antenna.
   *
   * *   You can turn the antenna off to save power.
   * *   You must turn the antenna on in order to detect and read RFID tags.
   * @throws {@link PhidgetError}
   */
  get antennaEnabled(): boolean;
  /**
   * This property is true if a compatibile RFID tag is being read by the reader.
   *
   * *   `TagPresent` will remain true until the tag is out of range and can no longer be read.
   * @throws {@link PhidgetError}
   */
  get tagPresent(): boolean;
  /**
   * The on/off state of the antenna.
   *
   * *   You can turn the antenna off to save power.
   * *   You must turn the antenna on in order to detect and read RFID tags.
   * @returns The state of the antenna
   * @throws {@link PhidgetError}
   */
  getAntennaEnabled(): boolean;
  /**
   * The on/off state of the antenna.
   *
   * *   You can turn the antenna off to save power.
   * *   You must turn the antenna on in order to detect and read RFID tags.
   * @throws {@link PhidgetError}
   * @param antennaEnabled - The state of the antenna
   */
  setAntennaEnabled(antennaEnabled: boolean): Promise<void>;
  /**
   * Gets the most recently read tag's data, even if that tag is no longer within read range.
   *
   * *   Only valid after at least one tag has been read.
   * @returns
   * 	- tagString: The data stored on the most recently read tag
   * 	- protocol: Protocol of the most recently read tag
   * @throws {@link PhidgetError}
   */
  abstract getLastTag(): {
    tagString: string;
    protocol: Enum.RFIDProtocol;
  };
  /**
   * This property is true if a compatibile RFID tag is being read by the reader.
   *
   * *   `TagPresent` will remain true until the tag is out of range and can no longer be read.
   * @returns Tag is in range
   * @throws {@link PhidgetError}
   */
  getTagPresent(): boolean;
  /**
   * Writes data to the tag being currently read by the reader.
   *
   * *   You cannot write to a read-only or locked tag.
   * @throws {@link PhidgetError}
   * @param tagString - The data to write to the tag
   * @param protocol - The communication protocol to use
   * @param lockTag - If true, permanently locks the tag so that it cannot be re-written after this write.
   */
  write(
    tagString: string,
    protocol: Enum.RFIDProtocol,
    lockTag: boolean
  ): Promise<void>;
}

/**
 * The protocol used to communicate with the tags
 * @public
 */
export declare enum RFIDProtocol {
  /**
   * EM4100 Series
   * @public
   */
  EM4100 = 1,
  /**
   * ISO11785 FDX B
   * @public
   */
  ISO11785_FDX_B = 2,
  /**
   * PhidgetTAG
   * @public
   */
  PHIDGET_TAG = 3,
}

/**
 * RTD sensor type
 * @public
 */
export declare enum RTDType {
  /**
   * Configures the RTD type as a PT100 with a 3850ppm curve.
   * @public
   */
  PT100_3850 = 1,
  /**
   * Configures the RTD type as a PT1000 with a 3850ppm curve.
   * @public
   */
  PT1000_3850 = 2,
  /**
   * Configures the RTD type as a PT100 with a 3920ppm curve.
   * @public
   */
  PT100_3920 = 3,
  /**
   * Configures the RTD type as a PT1000 with a 3920ppm curve.
   * @public
   */
  PT1000_3920 = 4,
}

/**
 * RTD wiring configuration
 * @public
 */
export declare enum RTDWireSetup {
  /**
   * Configures the device to make resistance calculations based on a 2-wire RTD setup.
   * @public
   */
  WIRES_2 = 1,
  /**
   * Configures the device to make resistance calculations based on a 3-wire RTD setup.
   * @public
   */
  WIRES_3 = 2,
  /**
   * Configures the device to make resistance calculations based on a 4-wire RTD setup.
   * @public
   */
  WIRES_4 = 3,
}

/** @public */
export declare class SoundSensor extends SoundSensorBase {}

declare abstract class SoundSensorBase extends PhidgetChannel {
  /**
   * **SPLChange** event
   *  * `dB` - The dB SPL value.
   *  * `dBA` - The dBA SPL value.
   *  * `dBC` - The dBC SPL value.
   *  * `octaves` - The dB SPL value for each band.
   * ---
   * The most recent SPL values the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `SPLChangeTrigger` has been set to a non-zero value, the `SPLChange` event will not occur until the `dB` SPL value has changed by at least the `SPLChangeTrigger` value.
   * *   The dB SPL value is calculated from the `octaves` data.
   * *   The dBA SPL value is calculated by applying a A-weighted filter to the `octaves` data.
   * *   The dBC SPL value is calculated by applying a C-weighted filter to the `octaves` data.
   * *   The following frequency bands are represented:
   *
   * *   octaves\[0\] = 31.5 Hz
   * *   octaves\[1\] = 63 Hz
   * *   octaves\[2\] = 125 Hz
   * *   octaves\[3\] = 250 Hz
   * *   octaves\[4\] = 500 Hz
   * *   octaves\[5\] = 1 kHz
   * *   octaves\[6\] = 2 kHz
   * *   octaves\[7\] = 4 kHz
   * *   octaves\[8\] = 8 kHz
   * *   octaves\[9\] = 16 kHz
   */
  onSPLChange:
    | ((
        dB: number,
        dBA: number,
        dBC: number,
        octaves: readonly [
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number,
          number
        ]
      ) => void)
    | null;

  /**
   * The Sound Sensor class gathers data from the sound sensor on a Phidget board.
   *
   * If you're using a simple 0-5V sensor that does not have its own firmware, use the VoltageInput or VoltageRatioInput class instead, as specified for your device.
   * @public
   */
  constructor();

  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `SPLChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `SPLChange` events can also be affected by the `SPLChangeTrigger`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * The most recent dB SPL value that has been calculated.
   *
   * *   This value is bounded by `maxdB`.
   * @throws {@link PhidgetError}
   */
  get dB(): number;
  /**
   * The maximum value the `SPLChange` event will report.
   * @throws {@link PhidgetError}
   */
  get maxdB(): number;
  /**
   * The most recent dBA SPL value that has been calculated.
   *
   * *   The dBA SPL value is calculated by applying a A-weighted filter to the `octaves` data.
   * @throws {@link PhidgetError}
   */
  get dBA(): number;
  /**
   * The most recent dBC SPL value that has been calculated.
   *
   * *   The dBC SPL value is calculated by applying a C-weighted filter to the `octaves` data.
   * @throws {@link PhidgetError}
   */
  get dBC(): number;
  /**
   * The minimum SPL value that the channel can accurately measure.
   *
   * *   Input SPLs below this level will not produce an output from the microphone.
   * @throws {@link PhidgetError}
   */
  get noiseFloor(): number;
  /**
   * The unweighted value of each frequency band.
   *
   * *   The following frequency bands are represented:
   *
   * *   octaves\[0\] = 31.5 Hz
   * *   octaves\[1\] = 63 Hz
   * *   octaves\[2\] = 125 Hz
   * *   octaves\[3\] = 250 Hz
   * *   octaves\[4\] = 500 Hz
   * *   octaves\[5\] = 1 kHz
   * *   octaves\[6\] = 2 kHz
   * *   octaves\[7\] = 4 kHz
   * *   octaves\[8\] = 8 kHz
   * *   octaves\[9\] = 16 kHz
   * @throws {@link PhidgetError}
   */
  get octaves(): readonly [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
  /**
   * The channel will not issue a `SPLChange` event until the `dB` value has changed by the amount specified by the `SPLChangeTrigger`.
   *
   * *   Setting the `SPLChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */
  get SPLChangeTrigger(): number;
  /**
   * The minimum value that `SPLChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get minSPLChangeTrigger(): number;
  /**
   * The maximum value that `SPLChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxSPLChangeTrigger(): number;
  /**
   * When selecting a range, first decide how sensitive you want the microphone to be. Select a smaller range when you want more sensitivity from the microphone.
   *
   * *   If a `Saturation` event occurrs, increase the range.
   * @throws {@link PhidgetError}
   */
  get SPLRange(): Enum.SPLRange;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `SPLChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `SPLChange` events can also be affected by the `SPLChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `SPLChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `SPLChange` events can also be affected by the `SPLChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * The most recent dB SPL value that has been calculated.
   *
   * *   This value is bounded by `maxdB`.
   * @returns The dB value
   * @throws {@link PhidgetError}
   */
  getdB(): number;
  /**
   * The maximum value the `SPLChange` event will report.
   * @returns The dB value
   * @throws {@link PhidgetError}
   */
  getMaxdB(): number;
  /**
   * The most recent dBA SPL value that has been calculated.
   *
   * *   The dBA SPL value is calculated by applying a A-weighted filter to the `octaves` data.
   * @returns The dBA value
   * @throws {@link PhidgetError}
   */
  getdBA(): number;
  /**
   * The most recent dBC SPL value that has been calculated.
   *
   * *   The dBC SPL value is calculated by applying a C-weighted filter to the `octaves` data.
   * @returns The dBC value
   * @throws {@link PhidgetError}
   */
  getdBC(): number;
  /**
   * The minimum SPL value that the channel can accurately measure.
   *
   * *   Input SPLs below this level will not produce an output from the microphone.
   * @returns The noise floor value.
   * @throws {@link PhidgetError}
   */
  getNoiseFloor(): number;
  /**
   * The unweighted value of each frequency band.
   *
   * *   The following frequency bands are represented:
   *
   * *   octaves\[0\] = 31.5 Hz
   * *   octaves\[1\] = 63 Hz
   * *   octaves\[2\] = 125 Hz
   * *   octaves\[3\] = 250 Hz
   * *   octaves\[4\] = 500 Hz
   * *   octaves\[5\] = 1 kHz
   * *   octaves\[6\] = 2 kHz
   * *   octaves\[7\] = 4 kHz
   * *   octaves\[8\] = 8 kHz
   * *   octaves\[9\] = 16 kHz
   * @returns The octave values
   * @throws {@link PhidgetError}
   */
  getOctaves(): readonly [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
  ];
  /**
   * The channel will not issue a `SPLChange` event until the `dB` value has changed by the amount specified by the `SPLChangeTrigger`.
   *
   * *   Setting the `SPLChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getSPLChangeTrigger(): number;
  /**
   * The channel will not issue a `SPLChange` event until the `dB` value has changed by the amount specified by the `SPLChangeTrigger`.
   *
   * *   Setting the `SPLChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param SPLChangeTrigger - The change trigger value
   */
  setSPLChangeTrigger(SPLChangeTrigger: number): Promise<void>;
  /**
   * The minimum value that `SPLChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMinSPLChangeTrigger(): number;
  /**
   * The maximum value that `SPLChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMaxSPLChangeTrigger(): number;
  /**
   * When selecting a range, first decide how sensitive you want the microphone to be. Select a smaller range when you want more sensitivity from the microphone.
   *
   * *   If a `Saturation` event occurrs, increase the range.
   * @returns The range value.
   * @throws {@link PhidgetError}
   */
  getSPLRange(): Enum.SPLRange;
  /**
   * When selecting a range, first decide how sensitive you want the microphone to be. Select a smaller range when you want more sensitivity from the microphone.
   *
   * *   If a `Saturation` event occurrs, increase the range.
   * @throws {@link PhidgetError}
   * @param SPLRange - The range value.
   */
  setSPLRange(SPLRange: Enum.SPLRange): Promise<void>;
}

/** @public */
export declare class Spatial extends SpatialBase {
  getQuaternion(): SpatialQuaternion;
  getEulerAngles(): SpatialEulerAngles;
}

/**
 * Controls the AHRS algorithm.
 * @public
 */
export declare enum SpatialAlgorithm {
  /**
   * No AHRS algorithm is used.
   * @public
   */
  NONE = 0,
  /**
   * AHRS algorithm, incorporating magnetometer data for yaw correction.
   * @public
   */
  AHRS = 1,
  /**
   * IMU algorithm, using gyro and accelerometer, but not magnetometer.
   * @public
   */
  IMU = 2,
}

declare abstract class SpatialBase extends PhidgetChannel {
  /**
   * **SpatialData** event
   *  * `acceleration` - The acceleration vaulues
   *  * `angularRate` - The angular rate values
   *  * `magneticField` - The field strength values
   *  * `timestamp` - The timestamp value
   * ---
   * The most recent values that your channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   */
  onSpatialData:
    | ((
        acceleration: readonly [number, number, number],
        angularRate: readonly [number, number, number],
        magneticField: readonly [number, number, number],
        timestamp: number
      ) => void)
    | null;

  /**
   * **AlgorithmData** event
   *  * `quaternion` - The quaternion value - \[x, y, z, w\]
   *  * `timestamp` - The timestamp value
   * ---
   * The most recent IMU/AHRS Quaternion will be reported in this event, which occurs when the `dataInterval` has elapsed.
   */
  onAlgorithmData:
    | ((
        quaternion: readonly [number, number, number, number],
        timestamp: number
      ) => void)
    | null;

  /**
   * The Spatial class simultaneously gathers data from the acceleromter, gyroscope and magnetometer on a Phidget board.
   *
   * You can also use the individual classes for these sensors if you want to handle the data in separate events.
   * @public
   */
  constructor();

  /**
   * The minimum acceleration the sensor will measure.
   * @throws {@link PhidgetError}
   */
  get minAcceleration(): readonly [number, number, number];
  /**
   * The maximum acceleration the sensor will measure.
   * @throws {@link PhidgetError}
   */
  get maxAcceleration(): readonly [number, number, number];
  /**
   * Selects the IMU/AHRS algorithm.
   * @throws {@link PhidgetError}
   */
  get algorithm(): Enum.SpatialAlgorithm;
  /**
   * Sets the gain for the magnetometer in the AHRS algorithm. Lower gains reduce sensor noise while slowing response time.
   * @throws {@link PhidgetError}
   */
  get algorithmMagnetometerGain(): number;
  /**
   * The minimum angular rate the sensor will measure.
   * @throws {@link PhidgetError}
   */
  get minAngularRate(): readonly [number, number, number];
  /**
   * The maximum angular rate the sensor will measure.
   * @throws {@link PhidgetError}
   */
  get maxAngularRate(): readonly [number, number, number];
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `SpatialData` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * Gets the latest device orientation in the form of Euler angles. (Pitch, roll, and yaw)
   * @throws {@link PhidgetError}
   */
  get eulerAngles(): Struct.SpatialEulerAngles;
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables on-board heating elements to bring the board up to a known temperature to minimize ambient temperature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   */
  get heatingEnabled(): boolean;
  /**
   * The minimum field strength the sensor will measure.
   * @throws {@link PhidgetError}
   */
  get minMagneticField(): readonly [number, number, number];
  /**
   * The maximum field strength the sensor will measure.
   * @throws {@link PhidgetError}
   */
  get maxMagneticField(): readonly [number, number, number];

  /**
   * Gets the latest AHRS/IMU quaternion sent from the device.
   * @throws {@link PhidgetError}
   */
  get quaternion(): Struct.SpatialQuaternion;
  /**
   * The minimum acceleration the sensor will measure.
   * @returns The minimum acceleration value
   * @throws {@link PhidgetError}
   */
  getMinAcceleration(): readonly [number, number, number];
  /**
   * The maximum acceleration the sensor will measure.
   * @returns The maximum acceleration values
   * @throws {@link PhidgetError}
   */
  getMaxAcceleration(): readonly [number, number, number];
  /**
   * Calibrate your device for the environment it will be used in.
   *
   * *   Setting these parameters will allow you to tune the AHRS algorithm on the device to your specific application.
   * @throws {@link PhidgetError}
   * @param angularVelocityThreshold - The maximum angular velocity reading where the device is assumed to be "at rest"
   * @param angularVelocityDeltaThreshold - The acceptable amount of change in angular velocity between measurements before movement is assumed.
   * @param accelerationThreshold - The maximum acceleration applied to the device (minus gravity) where it is assumed to be "at rest". This is also the maximum acceleration allowable before the device stops correcting to the acceleration vector.
   * @param magTime - The time it will take to correct the heading 95% of the way to aligning with the compass (in seconds),up to 15 degrees of error. Beyond 15 degrees, this is the time it will take for the bearing to move 45 degrees towards the compass reading. Remember you can zero the algorithm at any time to instantly realign the spatial with acceleration and magnetic field vectors regardless of magnitude.
   * @param accelTime - The time it will take to correct the pitch and roll 95% of the way to aligning with the accelerometer (in seconds).
   * @param biasTime - The time it will take to have the gyro biases settle to within 95% of the measured steady state (in seconds).
   */
  setAHRSParameters(
    angularVelocityThreshold: number,
    angularVelocityDeltaThreshold: number,
    accelerationThreshold: number,
    magTime: number,
    accelTime: number,
    biasTime: number
  ): Promise<void>;
  /**
   * Selects the IMU/AHRS algorithm.
   * @returns The sensor algorithm
   * @throws {@link PhidgetError}
   */
  getAlgorithm(): Enum.SpatialAlgorithm;
  /**
   * Selects the IMU/AHRS algorithm.
   * @throws {@link PhidgetError}
   * @param algorithm - The sensor algorithm
   */
  setAlgorithm(algorithm: Enum.SpatialAlgorithm): Promise<void>;
  /**
   * Sets the gain for the magnetometer in the AHRS algorithm. Lower gains reduce sensor noise while slowing response time.
   * @returns The AHRS algorithm magnetometer gain
   * @throws {@link PhidgetError}
   */
  getAlgorithmMagnetometerGain(): number;
  /**
   * Sets the gain for the magnetometer in the AHRS algorithm. Lower gains reduce sensor noise while slowing response time.
   * @throws {@link PhidgetError}
   * @param algorithmMagnetometerGain - The AHRS algorithm magnetometer gain
   */
  setAlgorithmMagnetometerGain(
    algorithmMagnetometerGain: number
  ): Promise<void>;
  /**
   * The minimum angular rate the sensor will measure.
   * @returns The angular rate values
   * @throws {@link PhidgetError}
   */
  getMinAngularRate(): readonly [number, number, number];
  /**
   * The maximum angular rate the sensor will measure.
   * @returns The angular rate values
   * @throws {@link PhidgetError}
   */
  getMaxAngularRate(): readonly [number, number, number];
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `SpatialData` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `SpatialData` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * Gets the latest device orientation in the form of Euler angles. (Pitch, roll, and yaw)
   * @returns Gets the latest device orientation in the form of Euler angles.
   * @throws {@link PhidgetError}
   */
  abstract getEulerAngles(): Struct.SpatialEulerAngles;
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables on-board heating elements to bring the board up to a known temperature to minimize ambient temperature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @returns Whether self-heating temperature stabilization is enabled
   * @throws {@link PhidgetError}
   */
  getHeatingEnabled(): boolean;
  /**
   * Set to TRUE to enable the temperature stabilization feature of this device. This enables on-board heating elements to bring the board up to a known temperature to minimize ambient temperature effects on the sensor's reading. You can leave this setting FALSE to conserve power consumption.
   *
   * If you enable heating, it is strongly recommended to keep the board in its enclosure to keep it insulated from moving air.
   *
   * This property is shared by any and all spatial-related objects on this device (Accelerometer, Gyroscope, Magnetometer, Spatial)
   * @throws {@link PhidgetError}
   * @param heatingEnabled - Whether self-heating temperature stabilization is enabled
   */
  setHeatingEnabled(heatingEnabled: boolean): Promise<void>;
  /**
   * The minimum field strength the sensor will measure.
   * @returns The field strength value
   * @throws {@link PhidgetError}
   */
  getMinMagneticField(): readonly [number, number, number];
  /**
   * The maximum field strength the sensor will measure.
   * @returns The field strength value
   * @throws {@link PhidgetError}
   */
  getMaxMagneticField(): readonly [number, number, number];
  /**
   * Calibrate your device for the environment it will be used in.
   *
   * *   Due to physical location, hard and soft iron offsets, and even bias errors, your device should be calibrated. We have created a calibration program that will provide you with the `MagnetometerCorrectionParameters` for your specific situation. See your device's User Guide for more information.
   * @throws {@link PhidgetError}
   * @param magneticField - Ambient magnetic field value.
   * @param offset0 - Provided by calibration program.
   * @param offset1 - Provided by calibration program.
   * @param offset2 - Provided by calibration program.
   * @param gain0 - Provided by calibration program.
   * @param gain1 - Provided by calibration program.
   * @param gain2 - Provided by calibration program.
   * @param T0 - Provided by calibration program.
   * @param T1 - Provided by calibration program.
   * @param T2 - Provided by calibration program.
   * @param T3 - Provided by calibration program.
   * @param T4 - Provided by calibration program.
   * @param T5 - Provided by calibration program.
   */
  setMagnetometerCorrectionParameters(
    magneticField: number,
    offset0: number,
    offset1: number,
    offset2: number,
    gain0: number,
    gain1: number,
    gain2: number,
    T0: number,
    T1: number,
    T2: number,
    T3: number,
    T4: number,
    T5: number
  ): Promise<void>;

  /**
   * Gets the latest AHRS/IMU quaternion sent from the device.
   * @returns Gets the latest AHRS/IMU quaternion sent from the device.
   * @throws {@link PhidgetError}
   */
  abstract getQuaternion(): Struct.SpatialQuaternion;
  /**
   * Resets the `MagnetometerCorrectionParameters` to their default values.
   *
   * *   Due to physical location, hard and soft iron offsets, and even bias errors, your device should be calibrated. We have created a calibration program that will provide you with the `MagnetometerCorrectionParameters` for your specific situation. See your device's User Guide for more information.
   * @throws {@link PhidgetError}
   */
  resetMagnetometerCorrectionParameters(): Promise<void>;
  /**
   * Saves the `MagnetometerCorrectionParameters`.
   *
   * *   Due to physical location, hard and soft iron offsets, and even bias errors, your device should be calibrated. We have created a calibration program that will provide you with the `MagnetometerCorrectionParameters` for your specific situation. See your device's User Guide for more information.
   * @throws {@link PhidgetError}
   */
  saveMagnetometerCorrectionParameters(): Promise<void>;
  /**
   * Zeros the AHRS algorithm.
   * @throws {@link PhidgetError}
   */
  zeroAlgorithm(): Promise<void>;
  /**
   * Re-zeros the gyroscope in 1-2 seconds.
   *
   * *   The device must be stationary when zeroing.
   * *   The angular rate will be reported as 0.0°/s while zeroing.
   * *   Zeroing the gyroscope is a method of compensating for the drift that is inherent to all gyroscopes. See your device's User Guide for more information on dealing with drift.
   * @throws {@link PhidgetError}
   */
  zeroGyro(): Promise<void>;
}

/**
 * A set of Euler Angles from a PhidgetSpatial
 * @public
 */
declare interface SpatialEulerAngles {
  /**
   * The pitch angle, in degrees
   */
  pitch: number;
  /**
   * The roll angle, in degrees
   */
  roll: number;
  /**
   * The heading angle, in degrees
   */
  heading: number;
}

/**
 * Controls how data from primary and backup sptial sensing chips are used.
 * @public
 */
export declare enum SpatialPrecision {
  /**
   * High precision sensor is used when possible, fallback to low precision sensor.
   * @public
   */
  HYBRID = 0,
  /**
   * High precision sensor is always used.
   * @public
   */
  HIGH = 1,
  /**
   * Low precision sensor is always used.
   * @public
   */
  LOW = 2,
}

/**
 * A quaternion from a PhidgetSpatial
 * @public
 */
declare interface SpatialQuaternion {
  /**
   * The x component of the quaternion
   */
  x: number;
  /**
   * The y component of the quaternion
   */
  y: number;
  /**
   * The z component of the quaternion
   */
  z: number;
  /**
   * The W component of the quaternion
   */
  w: number;
}

/**
 * The measurement range of the sound sensor
 * @public
 */
export declare enum SPLRange {
  /**
   * Range 102dB
   * @public
   */
  DB_102 = 1,
  /**
   * Range 82dB
   * @public
   */
  DB_82 = 2,
}

/** @public */
export declare class Stepper extends StepperBase {
  getAcceleration(): number;
  setAcceleration(acceleration: number): Promise<void>;
  getMinAcceleration(): number;
  getMaxAcceleration(): number;
  getPosition(): number;
  getMinPosition(): number;
  getMaxPosition(): number;
  setRescaleFactor(rescaleFactor: number): void;
  getTargetPosition(): number;
  setTargetPosition(targetPosition: number): Promise<void>;
  getVelocity(): number;
  getVelocityLimit(): number;
  setVelocityLimit(velocityLimit: number): Promise<void>;
  getMaxVelocityLimit(): number;
  getMinVelocityLimit(): number;
  addPositionOffset(positionOffset: number): void;
}

declare abstract class StepperBase extends PhidgetChannel {
  /**
   * **PositionChange** event
   *  * `position` - The current stepper position
   * ---
   * Occurs when the controller updates the stepper motor position.
   *
   * *   This event will still fire even if the motor is blocked from physically moving or misses steps.
   */
  onPositionChange: ((position: number) => void) | null;

  /**
   * **VelocityChange** event
   *  * `velocity` - Velocity of the stepper. Sign indicates direction.
   * ---
   * Occurs when the stepper motor velocity changes.
   */
  onVelocityChange: ((velocity: number) => void) | null;

  /**
   * **Stopped** event
   * ---
   * Occurs when the motor controller stops.
   *
   * *   The motor may still be physically moving if the inertia is great enough to make it misstep.
   */
  onStopped: (() => void) | null;

  /**
   * The Stepper class powers and controls the stepper motor connected to the Phidget controller, allowing you to change the position, velocity, acceleration, and current limit.
   * @public
   */
  constructor();

  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * *   Changing the acceleration value while the stepper is in motion (especially at speeds higher than 1000 1/16th steps/s) can cause unpredictable results due to the inability of the processor tocalculate a new acceleration curve quickly enough. Generally you should wait until the motor is stationary until calling this function.
   * @throws {@link PhidgetError}
   */
  get acceleration(): number;
  /**
   * The minimum value that `acceleration` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */
  get minAcceleration(): number;
  /**
   * The maximum value that `acceleration` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */
  get maxAcceleration(): number;
  /**
   * Use `phidget22.StepperControlMode.STEP` mode when you want to set a `targetPosition` for the Stepper motor. Use `phidget22.StepperControlMode.RUN` mode when you simply want the Stepper motor to rotate continuously in a specific direction.
   *
   * Changing the control mode while the motor is running will not have an effect on the motor's movements until a new `targetPosition` or `velocityLimit` is set.
   *
   * In `phidget22.StepperControlMode.RUN` mode, setting a `velocityLimit` will also set the target position of the controller to `minPosition` or `maxPosition`, corresponding to the direction of movement.
   * @throws {@link PhidgetError}
   */
  get controlMode(): Enum.StepperControlMode;
  /**
   * The current through the motor will be limited by the `currentLimit`.
   *
   * *   See your Stepper motor's data sheet for more information about what value the `currentLimit` should be.
   * @throws {@link PhidgetError}
   */
  get currentLimit(): number;
  /**
   * The minimum value that `currentLimit` and `holdingCurrentLimit` can be set to.
   *
   * *   Reference your controller's User Guide for more information about how the `holdingCurrentLimit` and `currentLimit` can be used in your application.
   * @throws {@link PhidgetError}
   */
  get minCurrentLimit(): number;
  /**
   * The maximum value that `currentLimit` and `holdingCurrentLimit` can be set to.
   *
   * *   Reference your controller's User Guide for more information about how the `holdingCurrentLimit` and `currentLimit` can be used in your application.
   * @throws {@link PhidgetError}
   */
  get maxCurrentLimit(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `VelocityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * When this property is true, the controller will supply power to the motor coils.
   *
   * *   The controller must be `engaged` in order to move the Stepper motor, or have it hold position.
   * @throws {@link PhidgetError}
   */
  get engaged(): boolean;
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get minFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get maxFailsafeTime(): number;
  /**
   * The `holdingCurrentLimit` will activate when the `targetPosition` has been reached. It will limit current through the motor.
   *
   * *   When the motor is not stopped, the current through the motor is limited by the `currentLimit`.
   * *   If no `holdingCurrentLimit` is specified, the `currentLimit` value will persist when the motor is stopped.
   * *   Reference your controller's User Guide for more information about how the `holdingCurrentLimit` and `currentLimit` can be used in your application.
   * @throws {@link PhidgetError}
   */
  get holdingCurrentLimit(): number;
  /**
   * `isMoving` returns true while the controller is sending commands to the motor. Note: there is no feedback to the controller, so it does not know whether the motor shaft is actually moving or not.
   * @throws {@link PhidgetError}
   */
  get isMoving(): boolean;
  /**
   * The most recent position value that the controller has reported.
   *
   * *   This value will always be between `minPosition` and `maxPosition`.
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */
  get position(): number;
  /**
   * The minimum value that `targetPosition` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */
  get minPosition(): number;
  /**
   * The maximum value that `targetPosition` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */
  get maxPosition(): number;
  /**
   * Applies a factor to the \[user units\] per step to all movement parameters to make the units in your application is more intuitive.
   *
   * *   For example, starting from position 0 and setting a new position with a rescale factor, the stepper will move `position` / `rescaleFactor` steps.
   * *   In this way, units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   *
   *
   * RescaleFactor = (1/16) \* (MotorStepAngle/Degrees Per UserUnit)
   * @throws {@link PhidgetError}
   */
  get rescaleFactor(): number;
  set rescaleFactor(rescaleFactor: number);
  /**
   * If the controller is configured and the `targetPosition` is set, the Stepper motor will move towards the `targetPosition` at the specified `acceleration` and `velocity`.
   *
   * *   `targetPosition` is only used when the `controlMode` is set to step mode.
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */
  get targetPosition(): number;
  /**
   * The most recent velocity value that the controller has reported.
   *
   * *   This value is bounded by `minVelocityLimit` and `maxVelocityLimit`.
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */
  get velocity(): number;
  /**
   * When moving, the Stepper motor velocity will be limited by this value.
   *
   * *   The `velocityLimit` is bounded by `minVelocityLimit` and `maxVelocityLimit`.
   * *   When in step mode, the `minVelocityLimit` has a value of 0. This is because the sign (±) of the `targetPosition` will indicate the direction.
   * *   When in run mode, the `minVelocityLimit` has a value of -`maxVelocityLimit`. This is because there is no target position, so the direction is defined by the sign (±) of the `velocityLimit`.
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */
  get velocityLimit(): number;
  /**
   * The minimum value that `velocityLimit` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */
  get minVelocityLimit(): number;
  /**
   * The maximum value that `velocityLimit` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   */
  get maxVelocityLimit(): number;
  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * *   Changing the acceleration value while the stepper is in motion (especially at speeds higher than 1000 1/16th steps/s) can cause unpredictable results due to the inability of the processor tocalculate a new acceleration curve quickly enough. Generally you should wait until the motor is stationary until calling this function.
   * @returns The acceleration value
   * @throws {@link PhidgetError}
   */
  abstract getAcceleration(): number;
  /**
   * The rate at which the controller can change the motor's `velocity`.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * *   Changing the acceleration value while the stepper is in motion (especially at speeds higher than 1000 1/16th steps/s) can cause unpredictable results due to the inability of the processor tocalculate a new acceleration curve quickly enough. Generally you should wait until the motor is stationary until calling this function.
   * @throws {@link PhidgetError}
   * @param acceleration - The acceleration value
   */
  abstract setAcceleration(acceleration: number): Promise<void>;
  /**
   * The minimum value that `acceleration` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @returns The acceleration value
   * @throws {@link PhidgetError}
   */
  abstract getMinAcceleration(): number;
  /**
   * The maximum value that `acceleration` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @returns The acceleration value
   * @throws {@link PhidgetError}
   */
  abstract getMaxAcceleration(): number;
  /**
   * Use `phidget22.StepperControlMode.STEP` mode when you want to set a `targetPosition` for the Stepper motor. Use `phidget22.StepperControlMode.RUN` mode when you simply want the Stepper motor to rotate continuously in a specific direction.
   *
   * Changing the control mode while the motor is running will not have an effect on the motor's movements until a new `targetPosition` or `velocityLimit` is set.
   *
   * In `phidget22.StepperControlMode.RUN` mode, setting a `velocityLimit` will also set the target position of the controller to `minPosition` or `maxPosition`, corresponding to the direction of movement.
   * @returns The control mode value
   * @throws {@link PhidgetError}
   */
  getControlMode(): Enum.StepperControlMode;
  /**
   * Use `phidget22.StepperControlMode.STEP` mode when you want to set a `targetPosition` for the Stepper motor. Use `phidget22.StepperControlMode.RUN` mode when you simply want the Stepper motor to rotate continuously in a specific direction.
   *
   * Changing the control mode while the motor is running will not have an effect on the motor's movements until a new `targetPosition` or `velocityLimit` is set.
   *
   * In `phidget22.StepperControlMode.RUN` mode, setting a `velocityLimit` will also set the target position of the controller to `minPosition` or `maxPosition`, corresponding to the direction of movement.
   * @throws {@link PhidgetError}
   * @param controlMode - The control mode value
   */
  setControlMode(controlMode: Enum.StepperControlMode): Promise<void>;
  /**
   * The current through the motor will be limited by the `currentLimit`.
   *
   * *   See your Stepper motor's data sheet for more information about what value the `currentLimit` should be.
   * @returns The current limit value
   * @throws {@link PhidgetError}
   */
  getCurrentLimit(): number;
  /**
   * The current through the motor will be limited by the `currentLimit`.
   *
   * *   See your Stepper motor's data sheet for more information about what value the `currentLimit` should be.
   * @throws {@link PhidgetError}
   * @param currentLimit - The current limit value
   */
  setCurrentLimit(currentLimit: number): Promise<void>;
  /**
   * The minimum value that `currentLimit` and `holdingCurrentLimit` can be set to.
   *
   * *   Reference your controller's User Guide for more information about how the `holdingCurrentLimit` and `currentLimit` can be used in your application.
   * @returns The current limit
   * @throws {@link PhidgetError}
   */
  getMinCurrentLimit(): number;
  /**
   * The maximum value that `currentLimit` and `holdingCurrentLimit` can be set to.
   *
   * *   Reference your controller's User Guide for more information about how the `holdingCurrentLimit` and `currentLimit` can be used in your application.
   * @returns The current limit
   * @throws {@link PhidgetError}
   */
  getMaxCurrentLimit(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `VelocityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `PositionChange` / `VelocityChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * When this property is true, the controller will supply power to the motor coils.
   *
   * *   The controller must be `engaged` in order to move the Stepper motor, or have it hold position.
   * @returns The engaged state
   * @throws {@link PhidgetError}
   */
  getEngaged(): boolean;
  /**
   * When this property is true, the controller will supply power to the motor coils.
   *
   * *   The controller must be `engaged` in order to move the Stepper motor, or have it hold position.
   * @throws {@link PhidgetError}
   * @param engaged - The engaged state
   */
  setEngaged(engaged: boolean): Promise<void>;
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For Stepper Motor channels, this will disengage the motor. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */
  enableFailsafe(failsafeTime: number): Promise<void>;
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMinFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMaxFailsafeTime(): number;
  /**
   * The `holdingCurrentLimit` will activate when the `targetPosition` has been reached. It will limit current through the motor.
   *
   * *   When the motor is not stopped, the current through the motor is limited by the `currentLimit`.
   * *   If no `holdingCurrentLimit` is specified, the `currentLimit` value will persist when the motor is stopped.
   * *   Reference your controller's User Guide for more information about how the `holdingCurrentLimit` and `currentLimit` can be used in your application.
   * @returns The current value
   * @throws {@link PhidgetError}
   */
  getHoldingCurrentLimit(): number;
  /**
   * The `holdingCurrentLimit` will activate when the `targetPosition` has been reached. It will limit current through the motor.
   *
   * *   When the motor is not stopped, the current through the motor is limited by the `currentLimit`.
   * *   If no `holdingCurrentLimit` is specified, the `currentLimit` value will persist when the motor is stopped.
   * *   Reference your controller's User Guide for more information about how the `holdingCurrentLimit` and `currentLimit` can be used in your application.
   * @throws {@link PhidgetError}
   * @param holdingCurrentLimit - The current value
   */
  setHoldingCurrentLimit(holdingCurrentLimit: number): Promise<void>;
  /**
   * `isMoving` returns true while the controller is sending commands to the motor. Note: there is no feedback to the controller, so it does not know whether the motor shaft is actually moving or not.
   * @returns The moving state
   * @throws {@link PhidgetError}
   */
  getIsMoving(): boolean;
  /**
   * The most recent position value that the controller has reported.
   *
   * *   This value will always be between `minPosition` and `maxPosition`.
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  abstract getPosition(): number;
  /**
   * The minimum value that `targetPosition` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  abstract getMinPosition(): number;
  /**
   * The maximum value that `targetPosition` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  abstract getMaxPosition(): number;
  /**
   * Adds an offset (positive or negative) to the current position and target position.
   *
   * *   This is especially useful for zeroing position.
   * @throws {@link PhidgetError}
   * @param positionOffset - Amount to offset the position by
   */
  abstract addPositionOffset(positionOffset: number): void;
  /**
   * Applies a factor to the \[user units\] per step to all movement parameters to make the units in your application is more intuitive.
   *
   * *   For example, starting from position 0 and setting a new position with a rescale factor, the stepper will move `position` / `rescaleFactor` steps.
   * *   In this way, units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   *
   *
   * RescaleFactor = (1/16) \* (MotorStepAngle/Degrees Per UserUnit)
   * @returns The rescale factor value
   * @throws {@link PhidgetError}
   */
  getRescaleFactor(): number;
  /**
   * Applies a factor to the \[user units\] per step to all movement parameters to make the units in your application is more intuitive.
   *
   * *   For example, starting from position 0 and setting a new position with a rescale factor, the stepper will move `position` / `rescaleFactor` steps.
   * *   In this way, units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`. The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   *
   *
   * RescaleFactor = (1/16) \* (MotorStepAngle/Degrees Per UserUnit)
   * @throws {@link PhidgetError}
   * @param rescaleFactor - The rescale factor value
   */
  abstract setRescaleFactor(rescaleFactor: number): void;
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */
  resetFailsafe(): Promise<void>;
  /**
   * If the controller is configured and the `targetPosition` is set, the Stepper motor will move towards the `targetPosition` at the specified `acceleration` and `velocity`.
   *
   * *   `targetPosition` is only used when the `controlMode` is set to step mode.
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @returns The position value
   * @throws {@link PhidgetError}
   */
  abstract getTargetPosition(): number;
  /**
   * If the controller is configured and the `targetPosition` is set, the Stepper motor will move towards the `targetPosition` at the specified `acceleration` and `velocity`.
   *
   * *   `targetPosition` is only used when the `controlMode` is set to step mode.
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   * @param targetPosition - The position value
   */
  abstract setTargetPosition(targetPosition: number): Promise<void>;
  /**
   * The most recent velocity value that the controller has reported.
   *
   * *   This value is bounded by `minVelocityLimit` and `maxVelocityLimit`.
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  abstract getVelocity(): number;
  /**
   * When moving, the Stepper motor velocity will be limited by this value.
   *
   * *   The `velocityLimit` is bounded by `minVelocityLimit` and `maxVelocityLimit`.
   * *   When in step mode, the `minVelocityLimit` has a value of 0. This is because the sign (±) of the `targetPosition` will indicate the direction.
   * *   When in run mode, the `minVelocityLimit` has a value of -`maxVelocityLimit`. This is because there is no target position, so the direction is defined by the sign (±) of the `velocityLimit`.
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @returns Velocity limit
   * @throws {@link PhidgetError}
   */
  abstract getVelocityLimit(): number;
  /**
   * When moving, the Stepper motor velocity will be limited by this value.
   *
   * *   The `velocityLimit` is bounded by `minVelocityLimit` and `maxVelocityLimit`.
   * *   When in step mode, the `minVelocityLimit` has a value of 0. This is because the sign (±) of the `targetPosition` will indicate the direction.
   * *   When in run mode, the `minVelocityLimit` has a value of -`maxVelocityLimit`. This is because there is no target position, so the direction is defined by the sign (±) of the `velocityLimit`.
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @throws {@link PhidgetError}
   * @param velocityLimit - Velocity limit
   */
  abstract setVelocityLimit(velocityLimit: number): Promise<void>;
  /**
   * The minimum value that `velocityLimit` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @returns The velocity limit value
   * @throws {@link PhidgetError}
   */
  abstract getMinVelocityLimit(): number;
  /**
   * The maximum value that `velocityLimit` can be set to.
   *
   * *   Units for `position`, `velocity`, and `acceleration` can be set by the user through the `rescaleFactor`.The `rescaleFactor` allows you to use more intuitive units such as rotations, or degrees.
   * *   The default units for this motor controller are **1/16steps per count**.
   * @returns The velocity value
   * @throws {@link PhidgetError}
   */
  abstract getMaxVelocityLimit(): number;
}

/**
 * Method of motor control
 * @public
 */
export declare enum StepperControlMode {
  /**
   * Control the motor by setting a target position.
   * @public
   */
  STEP = 0,
  /**
   * Control the motor by selecting a target velocity (sign indicates direction). The motor will rotate continuously in the chosen direction.
   * @public
   */
  RUN = 1,
}

declare namespace Struct {
  export {
    UnitInfo,
    GPSTime,
    GPSDate,
    GPGGA,
    GPGSA,
    GPRMC,
    GPVTG,
    NMEAData,
    SpatialQuaternion,
    SpatialEulerAngles,
    IRCodeInfo,
  };
}

/** @public */
export declare class TemperatureSensor extends TemperatureSensorBase {}

declare abstract class TemperatureSensorBase extends PhidgetChannel {
  /**
   * **TemperatureChange** event
   *  * `temperature` - The temperature
   * ---
   * The most recent temperature value the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `temperatureChangeTrigger` has been set to a non-zero value, the `TemperatureChange` event will not occur until the temperature has changed by at least the `temperatureChangeTrigger` value.
   */
  onTemperatureChange: ((temperature: number) => void) | null;

  /**
   * The Temperature Sensor class gathers data from the temperature sensor on a Phidget board. This includes on-board ambient temperature sensors, connected thermocouples or platinum RTDs, and IR temperature sensors. This class is also used to measure the temperature on some high-power Phidget boards such as motor controllers for safety reasons.
   *
   * If you're using a simple 0-5V sensor that does not have its own firmware, use the VoltageInput or VoltageRatioInput class instead, as specified for your device.
   * @public
   */
  constructor();

  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `TemperatureChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `TemperatureChange` events can also be affected by the `temperatureChangeTrigger`.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * The `RTDType` must correspond to the RTD type you are using in your application.
   *
   * *   If you are unsure which `RTDType` to use, visit your device's User Guide for more information.
   * @throws {@link PhidgetError}
   */
  get RTDType(): Enum.RTDType;
  /**
   * The `RTDWireSetup` must correspond to the wire configuration you are using in your application.
   *
   * *   If you are unsure which `RTDWireSetup` to use, visit your device's User Guide for more information.
   * @throws {@link PhidgetError}
   */
  get RTDWireSetup(): Enum.RTDWireSetup;
  /**
   * The most recent temperature value that the channel has reported.
   *
   * *   This value will always be between `minTemperature` and `maxTemperature`.
   * @throws {@link PhidgetError}
   */
  get temperature(): number;
  /**
   * The minimum value the `TemperatureChange` event will report.
   * @throws {@link PhidgetError}
   */
  get minTemperature(): number;
  /**
   * The maximum value the `TemperatureChange` event will report.
   * @throws {@link PhidgetError}
   */
  get maxTemperature(): number;
  /**
   * The channel will not issue a `TemperatureChange` event until the temperature value has changed by the amount specified by the `temperatureChangeTrigger`.
   *
   * *   Setting the `temperatureChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */
  get temperatureChangeTrigger(): number;
  /**
   * The minimum value that `temperatureChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get minTemperatureChangeTrigger(): number;
  /**
   * The maximum value that `temperatureChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxTemperatureChangeTrigger(): number;
  /**
   * The `thermocoupleType` must correspond to the thermocouple type you are using in your application.
   *
   * *   If you are unsure which `thermocoupleType` to use, visit the [Thermocouple Primer](https://www.phidgets.com/docs/Thermocouple_Primer) for more information.
   * @throws {@link PhidgetError}
   */
  get thermocoupleType(): Enum.ThermocoupleType;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `TemperatureChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `TemperatureChange` events can also be affected by the `temperatureChangeTrigger`.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another `TemperatureChange` event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between `TemperatureChange` events can also be affected by the `temperatureChangeTrigger`.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * The `RTDType` must correspond to the RTD type you are using in your application.
   *
   * *   If you are unsure which `RTDType` to use, visit your device's User Guide for more information.
   * @returns The RTD type
   * @throws {@link PhidgetError}
   */
  getRTDType(): Enum.RTDType;
  /**
   * The `RTDType` must correspond to the RTD type you are using in your application.
   *
   * *   If you are unsure which `RTDType` to use, visit your device's User Guide for more information.
   * @throws {@link PhidgetError}
   * @param RTDType - The RTD type
   */
  setRTDType(RTDType: Enum.RTDType): Promise<void>;
  /**
   * The `RTDWireSetup` must correspond to the wire configuration you are using in your application.
   *
   * *   If you are unsure which `RTDWireSetup` to use, visit your device's User Guide for more information.
   * @returns The RTD wire setup
   * @throws {@link PhidgetError}
   */
  getRTDWireSetup(): Enum.RTDWireSetup;
  /**
   * The `RTDWireSetup` must correspond to the wire configuration you are using in your application.
   *
   * *   If you are unsure which `RTDWireSetup` to use, visit your device's User Guide for more information.
   * @throws {@link PhidgetError}
   * @param RTDWireSetup - The RTD wire setup
   */
  setRTDWireSetup(RTDWireSetup: Enum.RTDWireSetup): Promise<void>;
  /**
   * The most recent temperature value that the channel has reported.
   *
   * *   This value will always be between `minTemperature` and `maxTemperature`.
   * @returns The temperature value
   * @throws {@link PhidgetError}
   */
  getTemperature(): number;
  /**
   * The minimum value the `TemperatureChange` event will report.
   * @returns The temperature value
   * @throws {@link PhidgetError}
   */
  getMinTemperature(): number;
  /**
   * The maximum value the `TemperatureChange` event will report.
   * @returns The temperature value
   * @throws {@link PhidgetError}
   */
  getMaxTemperature(): number;
  /**
   * The channel will not issue a `TemperatureChange` event until the temperature value has changed by the amount specified by the `temperatureChangeTrigger`.
   *
   * *   Setting the `temperatureChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getTemperatureChangeTrigger(): number;
  /**
   * The channel will not issue a `TemperatureChange` event until the temperature value has changed by the amount specified by the `temperatureChangeTrigger`.
   *
   * *   Setting the `temperatureChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param temperatureChangeTrigger - The change trigger value
   */
  setTemperatureChangeTrigger(temperatureChangeTrigger: number): Promise<void>;
  /**
   * The minimum value that `temperatureChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMinTemperatureChangeTrigger(): number;
  /**
   * The maximum value that `temperatureChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMaxTemperatureChangeTrigger(): number;
  /**
   * The `thermocoupleType` must correspond to the thermocouple type you are using in your application.
   *
   * *   If you are unsure which `thermocoupleType` to use, visit the [Thermocouple Primer](https://www.phidgets.com/docs/Thermocouple_Primer) for more information.
   * @returns The thermocouple type
   * @throws {@link PhidgetError}
   */
  getThermocoupleType(): Enum.ThermocoupleType;
  /**
   * The `thermocoupleType` must correspond to the thermocouple type you are using in your application.
   *
   * *   If you are unsure which `thermocoupleType` to use, visit the [Thermocouple Primer](https://www.phidgets.com/docs/Thermocouple_Primer) for more information.
   * @throws {@link PhidgetError}
   * @param thermocoupleType - The thermocouple type
   */
  setThermocoupleType(thermocoupleType: Enum.ThermocoupleType): Promise<void>;
}

/**
 * The type of thermocouple being used
 * @public
 */
export declare enum ThermocoupleType {
  /**
   * Configures the thermocouple input as a J-Type thermocouple.
   * @public
   */
  J = 1,
  /**
   * Configures the thermocouple input as a K-Type thermocouple.
   * @public
   */
  K = 2,
  /**
   * Configures the thermocouple input as a E-Type thermocouple.
   * @public
   */
  E = 3,
  /**
   * Configures the thermocouple input as a T-Type thermocouple.
   * @public
   */
  T = 4,
}

/**
 * Analog sensor units. These correspond to the types of quantities that can be measured by Phidget analog sensors.
 * @public
 */
export declare enum Unit {
  /**
   * Unitless
   * @public
   */
  NONE = 0,
  /**
   * Boolean
   * @public
   */
  BOOLEAN = 1,
  /**
   * Percent
   * @public
   */
  PERCENT = 2,
  /**
   * Decibel
   * @public
   */
  DECIBEL = 3,
  /**
   * Millimeter
   * @public
   */
  MILLIMETER = 4,
  /**
   * Centimeter
   * @public
   */
  CENTIMETER = 5,
  /**
   * Meter
   * @public
   */
  METER = 6,
  /**
   * Gram
   * @public
   */
  GRAM = 7,
  /**
   * Kilogram
   * @public
   */
  KILOGRAM = 8,
  /**
   * Milliampere
   * @public
   */
  MILLIAMPERE = 9,
  /**
   * Ampere
   * @public
   */
  AMPERE = 10,
  /**
   * Kilopascal
   * @public
   */
  KILOPASCAL = 11,
  /**
   * Volt
   * @public
   */
  VOLT = 12,
  /**
   * Degree Celcius
   * @public
   */
  DEGREE_CELCIUS = 13,
  /**
   * Lux
   * @public
   */
  LUX = 14,
  /**
   * Gauss
   * @public
   */
  GAUSS = 15,
  /**
   * pH
   * @public
   */
  PH = 16,
  /**
   * Watt
   * @public
   */
  WATT = 17,
}

/**
 * The name, symbol, and Phidgets enumeration of the units of the sensor value calculated from the analog sensor's measurements.
 * @public
 */
declare interface UnitInfo {
  /**
   * Unit
   */
  unit: Enum.Unit;
  /**
   * Name
   */
  name: string;
  /**
   * Symbol
   */
  symbol: string;
}

/**
 * @public
 */
export declare class USBConnection extends USBConnectionBase {
  /**
   * Enables direct USB connection to Phidgets in the browser
   *
   * @throws {@link PhidgetError} Browser must support WebUSB
   */
  constructor(opts?: ConnectionOptions);
  close(): void;
  requestWebUSBDeviceAccess(): Promise<void>;
}

declare abstract class USBConnectionBase extends PhidgetConnection {
  /**
   * Grant access to a USB device in the browser.
   * This function can only be called from a user-interactable object, such as a button.
   */
  abstract requestWebUSBDeviceAccess(): Promise<void>;

  delete(): void;
  /**
   * Stops USB scanning
   */
  close(): void;
  /**
   * Connects the the USB subsystem and starts scanning for USB devices
   */
  connect(): Promise<void>;
}

declare const enum USBConnType {
  Web = 0,
  Node = 1,
}

/** @public */
export declare class VoltageInput extends VoltageInputBase {}

declare abstract class VoltageInputBase extends PhidgetChannel {
  /**
   * **VoltageChange** event
   *  * `voltage` - Measured voltage
   * ---
   * The most recent voltage value the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `voltageChangeTrigger` has been set to a non-zero value, the `VoltageChange` event will not occur until the voltage has changed by at least the `voltageChangeTrigger` value.
   * *   If `sensorType` is supported and set to anything other then `phidget22.VoltageSensorType.VOLTAGE`, this event will not fire.
   */
  onVoltageChange: ((voltage: number) => void) | null;

  /**
     * **SensorChange** event
     *  * `sensorValue` - The sensor value
     *  * `sensorUnit` - The sensor unit information corresponding to the sensor value.

     *   Helps keep track of the type of information being calculated from the voltage input.
     * ---
     * The most recent sensor value the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
     *
     * *   If a `sensorValueChangeTrigger` has been set to a non-zero value, the `SensorChange` event will not occur until the sensor value has changed by at least the `sensorValueChangeTrigger` value.
     * *   This event only fires when `sensorType` is not set to `phidget22.VoltageSensorType.VOLTAGE`
     */
  onSensorChange:
    | ((sensorValue: number, sensorUnit: Struct.UnitInfo) => void)
    | null;

  /**
   * The Voltage Input class measures the voltage across the input of a Phidget with a voltage input. This may be a sensor designed to measure voltage directly, or it could be an input designed to interface with 0-5V sensors.
   *
   * For 0-5V sensors, this class supports conversion to sensor data with units specific to the Phidget sensor being used, to make reading these sensors easy.
   * @public
   */
  constructor();

  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   */
  get powerSupply(): Enum.PowerSupply;
  /**
   * We sell a variety of analog sensors that do not have their own API, they simply output a voltage that can be converted to a digital value using a specific formula. By matching the `sensorType` to your analog sensor, the correct formula will automatically be applied to data when you get the `sensorValue` or subscribe to the `SensorChange` event.
   *
   * *   The `SensorChange` event has its own change trigger associated with it: `sensorValueChangeTrigger`.
   * *   Any data from getting the `sensorValue` or subscribing to the `SensorChange` event will have a `sensorUnit` associated with it.
   *
   * **Note:** Unlike other properties such as `Phidget.deviceSerialNumber` or `Phidget.channel`, `sensorType` is set after the device is opened, not before.
   * @throws {@link PhidgetError}
   */
  get sensorType(): Enum.VoltageSensorType;
  /**
   * The unit of measurement that applies to the sensor values of the `sensorType` that has been selected.
   *
   * *   Helps keep track of the type of information being calculated from the voltage input.
   * @throws {@link PhidgetError}
   */
  get sensorUnit(): Struct.UnitInfo;
  /**
   * The most recent sensor value that the channel has reported.
   *
   * *   Use `sensorUnit` to get the measurement units that are associated with the `sensorValue`
   * @throws {@link PhidgetError}
   */
  get sensorValue(): number;
  /**
   * The channel will not issue a `SensorChange` event until the sensor value has changed by the amount specified by the `sensorValueChangeTrigger`.
   *
   * *   Setting the `sensorValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */
  get sensorValueChangeTrigger(): number;
  /**
   * The most recent voltage value that the channel has reported.
   *
   * *   This value will always be between `minVoltage` and `maxVoltage`.
   * @throws {@link PhidgetError}
   */
  get voltage(): number;
  /**
   * The minimum value the `VoltageChange` event will report.
   * @throws {@link PhidgetError}
   */
  get minVoltage(): number;
  /**
   * The maximum value the `VoltageChange` event will report.
   * @throws {@link PhidgetError}
   */
  get maxVoltage(): number;
  /**
   * The channel will not issue a `VoltageChange` event until the voltage value has changed by the amount specified by the `voltageChangeTrigger`.
   *
   * *   Setting the `voltageChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */
  get voltageChangeTrigger(): number;
  /**
   * The minimum value that `voltageChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get minVoltageChangeTrigger(): number;
  /**
   * The maximum value that `voltageChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxVoltageChangeTrigger(): number;
  /**
   * The voltage range you choose should allow you to measure the full range of your input signal.
   *
   * *   A larger `voltageRange` equates to less resolution.
   * *   If a `Saturation` event occurs, increase the voltage range.
   * @throws {@link PhidgetError}
   */
  get voltageRange(): Enum.VoltageRange;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the change trigger.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval value
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @returns The power supply value
   * @throws {@link PhidgetError}
   */
  getPowerSupply(): Enum.PowerSupply;
  /**
   * Choose the power supply voltage.
   *
   * *   Set this to the voltage specified in the attached sensor's data sheet to power it.
   *
   * *   Set to `phidget22.PowerSupply.OFF` to turn off the supply to save power.
   * @throws {@link PhidgetError}
   * @param powerSupply - The power supply value
   */
  setPowerSupply(powerSupply: Enum.PowerSupply): Promise<void>;
  /**
   * We sell a variety of analog sensors that do not have their own API, they simply output a voltage that can be converted to a digital value using a specific formula. By matching the `sensorType` to your analog sensor, the correct formula will automatically be applied to data when you get the `sensorValue` or subscribe to the `SensorChange` event.
   *
   * *   The `SensorChange` event has its own change trigger associated with it: `sensorValueChangeTrigger`.
   * *   Any data from getting the `sensorValue` or subscribing to the `SensorChange` event will have a `sensorUnit` associated with it.
   *
   * **Note:** Unlike other properties such as `Phidget.deviceSerialNumber` or `Phidget.channel`, `sensorType` is set after the device is opened, not before.
   * @returns The sensor type value
   * @throws {@link PhidgetError}
   */
  getSensorType(): Enum.VoltageSensorType;
  /**
   * We sell a variety of analog sensors that do not have their own API, they simply output a voltage that can be converted to a digital value using a specific formula. By matching the `sensorType` to your analog sensor, the correct formula will automatically be applied to data when you get the `sensorValue` or subscribe to the `SensorChange` event.
   *
   * *   The `SensorChange` event has its own change trigger associated with it: `sensorValueChangeTrigger`.
   * *   Any data from getting the `sensorValue` or subscribing to the `SensorChange` event will have a `sensorUnit` associated with it.
   *
   * **Note:** Unlike other properties such as `Phidget.deviceSerialNumber` or `Phidget.channel`, `sensorType` is set after the device is opened, not before.
   * @throws {@link PhidgetError}
   * @param sensorType - The sensor type value
   */
  setSensorType(sensorType: Enum.VoltageSensorType): Promise<void>;
  /**
   * The unit of measurement that applies to the sensor values of the `sensorType` that has been selected.
   *
   * *   Helps keep track of the type of information being calculated from the voltage input.
   * @returns The sensor unit information corresponding to the `sensorValue`.
   * @throws {@link PhidgetError}
   */
  getSensorUnit(): Struct.UnitInfo;
  /**
   * The most recent sensor value that the channel has reported.
   *
   * *   Use `sensorUnit` to get the measurement units that are associated with the `sensorValue`
   * @returns The sensor value
   * @throws {@link PhidgetError}
   */
  getSensorValue(): number;
  /**
   * The channel will not issue a `SensorChange` event until the sensor value has changed by the amount specified by the `sensorValueChangeTrigger`.
   *
   * *   Setting the `sensorValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getSensorValueChangeTrigger(): number;
  /**
   * The channel will not issue a `SensorChange` event until the sensor value has changed by the amount specified by the `sensorValueChangeTrigger`.
   *
   * *   Setting the `sensorValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param sensorValueChangeTrigger - The change trigger value
   */
  setSensorValueChangeTrigger(sensorValueChangeTrigger: number): Promise<void>;
  /**
   * The most recent voltage value that the channel has reported.
   *
   * *   This value will always be between `minVoltage` and `maxVoltage`.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */
  getVoltage(): number;
  /**
   * The minimum value the `VoltageChange` event will report.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */
  getMinVoltage(): number;
  /**
   * The maximum value the `VoltageChange` event will report.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */
  getMaxVoltage(): number;
  /**
   * The channel will not issue a `VoltageChange` event until the voltage value has changed by the amount specified by the `voltageChangeTrigger`.
   *
   * *   Setting the `voltageChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getVoltageChangeTrigger(): number;
  /**
   * The channel will not issue a `VoltageChange` event until the voltage value has changed by the amount specified by the `voltageChangeTrigger`.
   *
   * *   Setting the `voltageChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param voltageChangeTrigger - The change trigger value
   */
  setVoltageChangeTrigger(voltageChangeTrigger: number): Promise<void>;
  /**
   * The minimum value that `voltageChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMinVoltageChangeTrigger(): number;
  /**
   * The maximum value that `voltageChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMaxVoltageChangeTrigger(): number;
  /**
   * The voltage range you choose should allow you to measure the full range of your input signal.
   *
   * *   A larger `voltageRange` equates to less resolution.
   * *   If a `Saturation` event occurs, increase the voltage range.
   * @returns The voltage range value
   * @throws {@link PhidgetError}
   */
  getVoltageRange(): Enum.VoltageRange;
  /**
   * The voltage range you choose should allow you to measure the full range of your input signal.
   *
   * *   A larger `voltageRange` equates to less resolution.
   * *   If a `Saturation` event occurs, increase the voltage range.
   * @throws {@link PhidgetError}
   * @param voltageRange - The voltage range value
   */
  setVoltageRange(voltageRange: Enum.VoltageRange): Promise<void>;
}

/** @public */
export declare class VoltageOutput extends VoltageOutputBase {}

declare abstract class VoltageOutputBase extends PhidgetChannel {
  /**
   * The Voltage Output class controls the variable DC voltage output on a Phidget board. This class provides settings for the output voltage as well as various safety controls.
   * @public
   */
  constructor();

  /**
   * Enable the output voltage by setting `enabled` to true.
   *
   * *   Disable the output by seting `enabled` to false to save power.
   * @throws {@link PhidgetError}
   */
  get enabled(): boolean;
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get minFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @throws {@link PhidgetError}
   */
  get maxFailsafeTime(): number;
  /**
   * The voltage value that the channel will output.
   *
   * *   The `voltage` value is bounded by `minVoltage` and `maxVoltage`.
   * *   The voltage value will not be output until `enabled` is set to true.
   * @throws {@link PhidgetError}
   */
  get voltage(): number;
  /**
   * The minimum value that `voltage` can be set to.
   * @throws {@link PhidgetError}
   */
  get minVoltage(): number;
  /**
   * The maximum value that `voltage` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxVoltage(): number;
  /**
   * Choose a `voltageOutputRange` that best suits your application.
   *
   * *   Changing the `voltageOutputRange` will also affect the `minVoltage` and `maxVoltage` values.
   * @throws {@link PhidgetError}
   */
  get voltageOutputRange(): Enum.VoltageOutputRange;
  /**
   * Enable the output voltage by setting `enabled` to true.
   *
   * *   Disable the output by seting `enabled` to false to save power.
   * @throws {@link PhidgetError}
   * @param enabled - The enabled value
   */
  setEnabled(enabled: boolean): Promise<void>;
  /**
   * Enable the output voltage by setting `enabled` to true.
   *
   * *   Disable the output by seting `enabled` to false to save power.
   * @returns The enabled value
   * @throws {@link PhidgetError}
   */
  getEnabled(): boolean;
  /**
   * Enables the **failsafe** feature for the channel, with a given **failsafe time**.
   *
   * The **failsafe** feature is intended for use in applications where it is important for the channel to enter a known _safe state_ if the program controlling it locks up or crashes. If you do not enable the failsafe feature, the channel will carry out whatever instructions it was last given until it is explicitly told to stop.
   *
   * Enabling the failsafe feature starts a recurring **failsafe timer** for the channel. Once the failsafe timer is enabled, it must be reset within the specified time or the channel will enter a **failsafe state**. The failsafe timer may be reset by sending any valid command to the device\*. Resetting the failsafe timer will reload the timer with the specified _failsafe time_, starting when the message to reset the timer is received by the Phidget.
   *
   * _\*(**get** requests do not typically send commands and won't reset the failsafe timer)_
   *
   * For example: if the failsafe is enabled with a **failsafe time** of 1000ms, you will have 1000ms to reset the failsafe timer. Every time the failsafe timer is reset, you will have 1000ms from that time to reset the failsafe again.
   *
   * If the failsafe timer is not reset before it runs out, the channel will enter a **failsafe state**. For Voltage Output channels, this will set the output voltage to 0V. Once the channel enters the **failsafe state**, it will reject any further input until the channel is reopened.
   *
   * To prevent the channel from falsely entering the failsafe state, we recommend resetting the failsafe timer as frequently as is practical for your application. A good rule of thumb is to not let more than a third of the failsafe time pass before resetting the timer.
   *
   * Once the failsafe timer has been set, it cannot be disabled by any means other than closing and reopening the channel.
   * @throws {@link PhidgetError}
   * @param failsafeTime - Failsafe timeout in milliseconds
   */
  enableFailsafe(failsafeTime: number): Promise<void>;
  /**
   * The minimum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMinFailsafeTime(): number;
  /**
   * The maximum value that `failsafeTime` can be set to when calling `enableFailsafe()`.
   * @returns The failsafe time
   * @throws {@link PhidgetError}
   */
  getMaxFailsafeTime(): number;
  /**
   * Resets the failsafe timer, if one has been set. See `enableFailsafe()` for details.
   *
   * This function will fail if no failsafe timer has been set for the channel.
   * @throws {@link PhidgetError}
   */
  resetFailsafe(): Promise<void>;
  /**
   * The voltage value that the channel will output.
   *
   * *   The `voltage` value is bounded by `minVoltage` and `maxVoltage`.
   * *   The voltage value will not be output until `enabled` is set to true.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */
  getVoltage(): number;
  /**
   * The voltage value that the channel will output.
   *
   * *   The `voltage` value is bounded by `minVoltage` and `maxVoltage`.
   * *   The voltage value will not be output until `enabled` is set to true.
   * @throws {@link PhidgetError}
   * @param voltage - The voltage value
   */
  setVoltage(voltage: number): Promise<void>;
  /**
   * The minimum value that `voltage` can be set to.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */
  getMinVoltage(): number;
  /**
   * The maximum value that `voltage` can be set to.
   * @returns The voltage value
   * @throws {@link PhidgetError}
   */
  getMaxVoltage(): number;
  /**
   * Choose a `voltageOutputRange` that best suits your application.
   *
   * *   Changing the `voltageOutputRange` will also affect the `minVoltage` and `maxVoltage` values.
   * @returns The output range value
   * @throws {@link PhidgetError}
   */
  getVoltageOutputRange(): Enum.VoltageOutputRange;
  /**
   * Choose a `voltageOutputRange` that best suits your application.
   *
   * *   Changing the `voltageOutputRange` will also affect the `minVoltage` and `maxVoltage` values.
   * @throws {@link PhidgetError}
   * @param voltageOutputRange - The output range value
   */
  setVoltageOutputRange(
    voltageOutputRange: Enum.VoltageOutputRange
  ): Promise<void>;
}

/**
 * The selected output voltage range
 * @public
 */
export declare enum VoltageOutputRange {
  /**
   * ±10V DC
   * @public
   */
  VOLTS_10 = 1,
  /**
   * 0-5V DC
   * @public
   */
  VOLTS_5 = 2,
}

/**
 * Measurement range of the voltage input. Larger ranges have less resolution.
 * @public
 */
export declare enum VoltageRange {
  /**
   * Range ±10mV DC
   * @public
   */
  MILLIVOLTS_10 = 1,
  /**
   * Range ±40mV DC
   * @public
   */
  MILLIVOLTS_40 = 2,
  /**
   * Range ±200mV DC
   * @public
   */
  MILLIVOLTS_200 = 3,
  /**
   * Range ±312.5mV DC
   * @public
   */
  MILLIVOLTS_312_5 = 4,
  /**
   * Range ±400mV DC
   * @public
   */
  MILLIVOLTS_400 = 5,
  /**
   * Range ±1000mV DC
   * @public
   */
  MILLIVOLTS_1000 = 6,
  /**
   * Range ±2V DC
   * @public
   */
  VOLTS_2 = 7,
  /**
   * Range ±5V DC
   * @public
   */
  VOLTS_5 = 8,
  /**
   * Range ±15V DC
   * @public
   */
  VOLTS_15 = 9,
  /**
   * Range ±40V DC
   * @public
   */
  VOLTS_40 = 10,
  /**
   * Auto-range mode changes based on the present voltage measurements.
   * @public
   */
  AUTO = 11,
}

/** @public */
export declare class VoltageRatioInput extends VoltageRatioInputBase {}

declare abstract class VoltageRatioInputBase extends PhidgetChannel {
  /**
   * **VoltageRatioChange** event
   *  * `voltageRatio` - The voltage ratio
   * ---
   * The most recent voltage ratio value the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
   *
   * *   If a `voltageRatioChangeTrigger` has been set to a non-zero value, the `VoltageRatioChange` event will not occur until the voltage has changed by at least the `voltageRatioChangeTrigger` value.
   * *   If `sensorType` is supported and set to anything other than `phidget22.VoltageRatioSensorType.VOLTAGE_RATIO`, this event will not fire.
   */
  onVoltageRatioChange: ((voltageRatio: number) => void) | null;

  /**
     * **SensorChange** event
     *  * `sensorValue` - The sensor value
     *  * `sensorUnit` - The sensor unit information corresponding to the `sensorValue`.

     *   Helps keep track of the type of information being calculated from the voltage ratio input.
     * ---
     * The most recent sensor value the channel has measured will be reported in this event, which occurs when the `dataInterval` has elapsed.
     *
     * *   If a `sensorValueChangeTrigger` has been set to a non-zero value, the `SensorChange` event will not occur until the sensor value has changed by at least the `sensorValueChangeTrigger` value.
     * *   This event only fires when `sensorType` is not set to `phidget22.VoltageRatioSensorType.VOLTAGE_RATIO`
     */
  onSensorChange:
    | ((sensorValue: number, sensorUnit: Struct.UnitInfo) => void)
    | null;

  /**
   * The Voltage Ratio Input class is used for measuring the ratio between the voltage supplied to and the voltage returned from an attached sensor or device. This is useful for interfacing with ratiometric sensors or wheatstone bridge based sensors.
   *
   * For ratiometric sensors, this class supports conversion to sensor data with units specific to the Phidget sensor being used, to make reading these sensors easy.
   * @public
   */
  constructor();

  /**
   * Enable power to the input and start collecting data by setting `bridgeEnabled` to true.
   * @throws {@link PhidgetError}
   */
  get bridgeEnabled(): boolean;
  /**
   * Choose a `bridgeGain` that best suits your application.
   *
   * *   For more information about the range and accuracy of each `bridgeGain` to decide which best suits your application, see your device's User Guide.
   * @throws {@link PhidgetError}
   */
  get bridgeGain(): Enum.BridgeGain;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataInterval(): number;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   */
  get dataRate(): number;
  /**
   * The minimum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get minDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxDataRate(): number;
  /**
   * We sell a variety of analog sensors that do not have their own API, they simply output a voltage that can be converted to a digital value using a specific formula. By matching the `sensorType` to your analog sensor, the correct formula will automatically be applied to data when you get the `sensorValue` or subscribe to the `SensorChange` event.
   *
   * *   The `SensorChange` event has its own change trigger associated with it: `sensorValueChangeTrigger`.
   * *   Any data from getting the `sensorValue` or subscribing to the `SensorChange` event will have a `sensorUnit` associated with it.
   *
   * **Note:** Unlike other properties such as `Phidget.deviceSerialNumber` or `Phidget.channel`, `sensorType` is set after the device is opened, not before.
   * @throws {@link PhidgetError}
   */
  get sensorType(): Enum.VoltageRatioSensorType;
  /**
   * The unit of measurement that applies to the sensor values of the `sensorType` that has been selected.
   *
   * *   Helps keep track of the type of information being calculated from the voltage ratio input.
   * @throws {@link PhidgetError}
   */
  get sensorUnit(): Struct.UnitInfo;
  /**
   * The most recent sensor value that the channel has reported.
   *
   * *   Use `sensorUnit` to get the measurement units that are associated with the `sensorValue`
   * @throws {@link PhidgetError}
   */
  get sensorValue(): number;
  /**
   * The channel will not issue a `SensorChange` event until the sensor value has changed by the amount specified by the `sensorValueChangeTrigger`.
   *
   * *   Setting the `sensorValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */
  get sensorValueChangeTrigger(): number;
  /**
   * The most recent voltage ratio value that the channel has reported.
   *
   * *   This value will always be between `minVoltageRatio` and `maxVoltageRatio`.
   * @throws {@link PhidgetError}
   */
  get voltageRatio(): number;
  /**
   * The minimum value the `VoltageRatioChange` event will report.
   * @throws {@link PhidgetError}
   */
  get minVoltageRatio(): number;
  /**
   * The maximum value the `VoltageRatioChange` event will report.
   * @throws {@link PhidgetError}
   */
  get maxVoltageRatio(): number;
  /**
   * The channel will not issue a `VoltageRatioChange` event until the voltage ratio value has changed by the amount specified by the `voltageRatioChangeTrigger`.
   *
   * *   Setting the `voltageRatioChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   */
  get voltageRatioChangeTrigger(): number;
  /**
   * The minimum value that `voltageRatioChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get minVoltageRatioChangeTrigger(): number;
  /**
   * The maximum value that `voltageRatioChangeTrigger` can be set to.
   * @throws {@link PhidgetError}
   */
  get maxVoltageRatioChangeTrigger(): number;
  /**
   * Enable power to the input and start collecting data by setting `bridgeEnabled` to true.
   * @returns The enabled value
   * @throws {@link PhidgetError}
   */
  getBridgeEnabled(): boolean;
  /**
   * Enable power to the input and start collecting data by setting `bridgeEnabled` to true.
   * @throws {@link PhidgetError}
   * @param bridgeEnabled - The enabled value
   */
  setBridgeEnabled(bridgeEnabled: boolean): Promise<void>;
  /**
   * Choose a `bridgeGain` that best suits your application.
   *
   * *   For more information about the range and accuracy of each `bridgeGain` to decide which best suits your application, see your device's User Guide.
   * @returns The bridge gain value
   * @throws {@link PhidgetError}
   */
  getBridgeGain(): Enum.BridgeGain;
  /**
   * Choose a `bridgeGain` that best suits your application.
   *
   * *   For more information about the range and accuracy of each `bridgeGain` to decide which best suits your application, see your device's User Guide.
   * @throws {@link PhidgetError}
   * @param bridgeGain - The bridge gain value
   */
  setBridgeGain(bridgeGain: Enum.BridgeGain): Promise<void>;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the change trigger.
   * @returns The data interval for the channel
   * @throws {@link PhidgetError}
   */
  getDataInterval(): number;
  /**
   * The `dataInterval` is the time that must elapse before the channel will fire another event.
   *
   * *   The data interval is bounded by `minDataInterval` and `maxDataInterval`.
   * *   The timing between events can also be affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataInterval - The data interval for the channel
   */
  setDataInterval(dataInterval: number): Promise<void>;
  /**
   * The minimum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMinDataInterval(): number;
  /**
   * The maximum value that `dataInterval` can be set to.
   * @returns The data interval value
   * @throws {@link PhidgetError}
   */
  getMaxDataInterval(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @returns The data rate for the channel
   * @throws {@link PhidgetError}
   */
  getDataRate(): number;
  /**
   * The `dataRate` is the frequency of events from the device.
   *
   * *   The data rate is bounded by `minDataRate` and `maxDataRate`.
   * *   Changing `dataRate` will change the channel's `dataInterval` to a corresponding value, rounded to the nearest integer number of milliseconds.
   * *   The timing between events can also affected by the change trigger.
   * @throws {@link PhidgetError}
   * @param dataRate - The data rate for the channel
   */
  setDataRate(dataRate: number): Promise<void>;
  /**
   * The minimum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMinDataRate(): number;
  /**
   * The maximum value that `dataRate` can be set to.
   * @returns The data rate value
   * @throws {@link PhidgetError}
   */
  getMaxDataRate(): number;
  /**
   * We sell a variety of analog sensors that do not have their own API, they simply output a voltage that can be converted to a digital value using a specific formula. By matching the `sensorType` to your analog sensor, the correct formula will automatically be applied to data when you get the `sensorValue` or subscribe to the `SensorChange` event.
   *
   * *   The `SensorChange` event has its own change trigger associated with it: `sensorValueChangeTrigger`.
   * *   Any data from getting the `sensorValue` or subscribing to the `SensorChange` event will have a `sensorUnit` associated with it.
   *
   * **Note:** Unlike other properties such as `Phidget.deviceSerialNumber` or `Phidget.channel`, `sensorType` is set after the device is opened, not before.
   * @returns The sensor type value
   * @throws {@link PhidgetError}
   */
  getSensorType(): Enum.VoltageRatioSensorType;
  /**
   * We sell a variety of analog sensors that do not have their own API, they simply output a voltage that can be converted to a digital value using a specific formula. By matching the `sensorType` to your analog sensor, the correct formula will automatically be applied to data when you get the `sensorValue` or subscribe to the `SensorChange` event.
   *
   * *   The `SensorChange` event has its own change trigger associated with it: `sensorValueChangeTrigger`.
   * *   Any data from getting the `sensorValue` or subscribing to the `SensorChange` event will have a `sensorUnit` associated with it.
   *
   * **Note:** Unlike other properties such as `Phidget.deviceSerialNumber` or `Phidget.channel`, `sensorType` is set after the device is opened, not before.
   * @throws {@link PhidgetError}
   * @param sensorType - The sensor type value
   */
  setSensorType(sensorType: Enum.VoltageRatioSensorType): Promise<void>;
  /**
   * The unit of measurement that applies to the sensor values of the `sensorType` that has been selected.
   *
   * *   Helps keep track of the type of information being calculated from the voltage ratio input.
   * @returns The sensor unit information corresponding to the `sensorValue`.
   * @throws {@link PhidgetError}
   */
  getSensorUnit(): Struct.UnitInfo;
  /**
   * The most recent sensor value that the channel has reported.
   *
   * *   Use `sensorUnit` to get the measurement units that are associated with the `sensorValue`
   * @returns The sensor value
   * @throws {@link PhidgetError}
   */
  getSensorValue(): number;
  /**
   * The channel will not issue a `SensorChange` event until the sensor value has changed by the amount specified by the `sensorValueChangeTrigger`.
   *
   * *   Setting the `sensorValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getSensorValueChangeTrigger(): number;
  /**
   * The channel will not issue a `SensorChange` event until the sensor value has changed by the amount specified by the `sensorValueChangeTrigger`.
   *
   * *   Setting the `sensorValueChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param sensorValueChangeTrigger - The change trigger value
   */
  setSensorValueChangeTrigger(sensorValueChangeTrigger: number): Promise<void>;
  /**
   * The most recent voltage ratio value that the channel has reported.
   *
   * *   This value will always be between `minVoltageRatio` and `maxVoltageRatio`.
   * @returns The voltage ratio value
   * @throws {@link PhidgetError}
   */
  getVoltageRatio(): number;
  /**
   * The minimum value the `VoltageRatioChange` event will report.
   * @returns The voltage ratio value
   * @throws {@link PhidgetError}
   */
  getMinVoltageRatio(): number;
  /**
   * The maximum value the `VoltageRatioChange` event will report.
   * @returns The voltage ratio value
   * @throws {@link PhidgetError}
   */
  getMaxVoltageRatio(): number;
  /**
   * The channel will not issue a `VoltageRatioChange` event until the voltage ratio value has changed by the amount specified by the `voltageRatioChangeTrigger`.
   *
   * *   Setting the `voltageRatioChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getVoltageRatioChangeTrigger(): number;
  /**
   * The channel will not issue a `VoltageRatioChange` event until the voltage ratio value has changed by the amount specified by the `voltageRatioChangeTrigger`.
   *
   * *   Setting the `voltageRatioChangeTrigger` to 0 will result in the channel firing events every `dataInterval`. This is useful for applications that implement their own data filtering
   * @throws {@link PhidgetError}
   * @param voltageRatioChangeTrigger - The change trigger value
   */
  setVoltageRatioChangeTrigger(
    voltageRatioChangeTrigger: number
  ): Promise<void>;
  /**
   * The minimum value that `voltageRatioChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMinVoltageRatioChangeTrigger(): number;
  /**
   * The maximum value that `voltageRatioChangeTrigger` can be set to.
   * @returns The change trigger value
   * @throws {@link PhidgetError}
   */
  getMaxVoltageRatioChangeTrigger(): number;
}

/**
 * The type of sensor attached to the voltage ratio input
 * @public
 */
export declare enum VoltageRatioSensorType {
  /**
   * Default. Configures the channel to be a generic ratiometric sensor. Unit is volts/volt.
   * @public
   */
  VOLTAGE_RATIO = 0,
  /**
   * 1101 - IR Distance Adapter, with Sharp Distance Sensor 2D120X (4-30cm)
   * @public
   */
  PN_1101_SHARP2D120X = 11011,
  /**
   * 1101 - IR Distance Adapter, with Sharp Distance Sensor 2Y0A21 (10-80cm)
   * @public
   */
  PN_1101_SHARP2Y0A21 = 11012,
  /**
   * 1101 - IR Distance Adapter, with Sharp Distance Sensor 2Y0A02 (20-150cm)
   * @public
   */
  PN_1101_SHARP2Y0A02 = 11013,
  /**
   * 1102 - IR Reflective Sensor 5mm
   * @public
   */
  PN_1102 = 11020,
  /**
   * 1103 - IR Reflective Sensor 10cm
   * @public
   */
  PN_1103 = 11030,
  /**
   * 1104 - Vibration Sensor
   * @public
   */
  PN_1104 = 11040,
  /**
   * 1105 - Light Sensor
   * @public
   */
  PN_1105 = 11050,
  /**
   * 1106 - Force Sensor
   * @public
   */
  PN_1106 = 11060,
  /**
   * 1107 - Humidity Sensor
   * @public
   */
  PN_1107 = 11070,
  /**
   * 1108 - Magnetic Sensor
   * @public
   */
  PN_1108 = 11080,
  /**
   * 1109 - Rotation Sensor
   * @public
   */
  PN_1109 = 11090,
  /**
   * 1110 - Touch Sensor
   * @public
   */
  PN_1110 = 11100,
  /**
   * 1111 - Motion Sensor
   * @public
   */
  PN_1111 = 11110,
  /**
   * 1112 - Slider 60
   * @public
   */
  PN_1112 = 11120,
  /**
   * 1113 - Mini Joy Stick Sensor
   * @public
   */
  PN_1113 = 11130,
  /**
   * 1115 - Pressure Sensor
   * @public
   */
  PN_1115 = 11150,
  /**
   * 1116 - Multi-turn Rotation Sensor
   * @public
   */
  PN_1116 = 11160,
  /**
   * 1118 - 50Amp Current Sensor AC
   * @public
   */
  PN_1118_AC = 11181,
  /**
   * 1118 - 50Amp Current Sensor DC
   * @public
   */
  PN_1118_DC = 11182,
  /**
   * 1119 - 20Amp Current Sensor AC
   * @public
   */
  PN_1119_AC = 11191,
  /**
   * 1119 - 20Amp Current Sensor DC
   * @public
   */
  PN_1119_DC = 11192,
  /**
   * 1120 - FlexiForce Adapter
   * @public
   */
  PN_1120 = 11200,
  /**
   * 1121 - Voltage Divider
   * @public
   */
  PN_1121 = 11210,
  /**
   * 1122 - 30 Amp Current Sensor AC
   * @public
   */
  PN_1122_AC = 11221,
  /**
   * 1122 - 30 Amp Current Sensor DC
   * @public
   */
  PN_1122_DC = 11222,
  /**
   * 1124 - Precision Temperature Sensor
   * @public
   */
  PN_1124 = 11240,
  /**
   * 1125 - Humidity Sensor
   * @public
   */
  PN_1125_HUMIDITY = 11251,
  /**
   * 1125 - Temperature Sensor
   * @public
   */
  PN_1125_TEMPERATURE = 11252,
  /**
   * 1126 - Differential Air Pressure Sensor +- 25kPa
   * @public
   */
  PN_1126 = 11260,
  /**
   * 1128 - MaxBotix EZ-1 Sonar Sensor
   * @public
   */
  PN_1128 = 11280,
  /**
   * 1129 - Touch Sensor
   * @public
   */
  PN_1129 = 11290,
  /**
   * 1131 - Thin Force Sensor
   * @public
   */
  PN_1131 = 11310,
  /**
   * 1134 - Switchable Voltage Divider
   * @public
   */
  PN_1134 = 11340,
  /**
   * 1136 - Differential Air Pressure Sensor +-2 kPa
   * @public
   */
  PN_1136 = 11360,
  /**
   * 1137 - Differential Air Pressure Sensor +-7 kPa
   * @public
   */
  PN_1137 = 11370,
  /**
   * 1138 - Differential Air Pressure Sensor 50 kPa
   * @public
   */
  PN_1138 = 11380,
  /**
   * 1139 - Differential Air Pressure Sensor 100 kPa
   * @public
   */
  PN_1139 = 11390,
  /**
   * 1140 - Absolute Air Pressure Sensor 20-400 kPa
   * @public
   */
  PN_1140 = 11400,
  /**
   * 1141 - Absolute Air Pressure Sensor 15-115 kPa
   * @public
   */
  PN_1141 = 11410,
  /**
   * 1146 - IR Reflective Sensor 1-4mm
   * @public
   */
  PN_1146 = 11460,
  /**
   * 3120 - Compression Load Cell (0-4.5 kg)
   * @public
   */
  PN_3120 = 31200,
  /**
   * 3121 - Compression Load Cell (0-11.3 kg)
   * @public
   */
  PN_3121 = 31210,
  /**
   * 3122 - Compression Load Cell (0-22.7 kg)
   * @public
   */
  PN_3122 = 31220,
  /**
   * 3123 - Compression Load Cell (0-45.3 kg)
   * @public
   */
  PN_3123 = 31230,
  /**
   * 3130 - Relative Humidity Sensor
   * @public
   */
  PN_3130 = 31300,
  /**
   * 3520 - Sharp Distance Sensor (4-30cm)
   * @public
   */
  PN_3520 = 35200,
  /**
   * 3521 - Sharp Distance Sensor (10-80cm)
   * @public
   */
  PN_3521 = 35210,
  /**
   * 3522 - Sharp Distance Sensor (20-150cm)
   * @public
   */
  PN_3522 = 35220,
}

/**
 * Type of sensor attached to the voltage input
 * @public
 */
export declare enum VoltageSensorType {
  /**
   * Default. Configures the channel to be a generic voltage sensor. Unit is volts.
   * @public
   */
  VOLTAGE = 0,
  /**
   * 1114 - Temperature Sensor
   * @public
   */
  PN_1114 = 11140,
  /**
   * 1117 - Voltage Sensor
   * @public
   */
  PN_1117 = 11170,
  /**
   * 1123 - Precision Voltage Sensor
   * @public
   */
  PN_1123 = 11230,
  /**
   * 1127 - Precision Light Sensor
   * @public
   */
  PN_1127 = 11270,
  /**
   * 1130 - pH Adapter
   * @public
   */
  PN_1130_PH = 11301,
  /**
   * 1130 - ORP Adapter
   * @public
   */
  PN_1130_ORP = 11302,
  /**
   * 1132 - 4-20mA Adapter
   * @public
   */
  PN_1132 = 11320,
  /**
   * 1133 - Sound Sensor
   * @public
   */
  PN_1133 = 11330,
  /**
   * 1135 - Precision Voltage Sensor
   * @public
   */
  PN_1135 = 11350,
  /**
   * 1142 - Light Sensor 1000 lux
   * @public
   */
  PN_1142 = 11420,
  /**
   * 1143 - Light Sensor 70000 lux
   * @public
   */
  PN_1143 = 11430,
  /**
   * 3500 - AC Current Sensor 10Amp
   * @public
   */
  PN_3500 = 35000,
  /**
   * 3501 - AC Current Sensor 25Amp
   * @public
   */
  PN_3501 = 35010,
  /**
   * 3502 - AC Current Sensor 50Amp
   * @public
   */
  PN_3502 = 35020,
  /**
   * 3503 - AC Current Sensor 100Amp
   * @public
   */
  PN_3503 = 35030,
  /**
   * 3507 - AC Voltage Sensor 0-250V (50Hz)
   * @public
   */
  PN_3507 = 35070,
  /**
   * 3508 - AC Voltage Sensor 0-250V (60Hz)
   * @public
   */
  PN_3508 = 35080,
  /**
   * 3509 - DC Voltage Sensor 0-200V
   * @public
   */
  PN_3509 = 35090,
  /**
   * 3510 - DC Voltage Sensor 0-75V
   * @public
   */
  PN_3510 = 35100,
  /**
   * 3511 - DC Current Sensor 0-10mA
   * @public
   */
  PN_3511 = 35110,
  /**
   * 3512 - DC Current Sensor 0-100mA
   * @public
   */
  PN_3512 = 35120,
  /**
   * 3513 - DC Current Sensor 0-1A
   * @public
   */
  PN_3513 = 35130,
  /**
   * 3514 - AC Active Power Sensor 0-250V*0-30A (50Hz)
   * @public
   */
  PN_3514 = 35140,
  /**
   * 3515 - AC Active Power Sensor 0-250V*0-30A (60Hz)
   * @public
   */
  PN_3515 = 35150,
  /**
   * 3516 - AC Active Power Sensor 0-250V*0-5A (50Hz)
   * @public
   */
  PN_3516 = 35160,
  /**
   * 3517 - AC Active Power Sensor 0-250V*0-5A (60Hz)
   * @public
   */
  PN_3517 = 35170,
  /**
   * 3518 - AC Active Power Sensor 0-110V*0-5A (60Hz)
   * @public
   */
  PN_3518 = 35180,
  /**
   * 3519 - AC Active Power Sensor 0-110V*0-15A (60Hz)
   * @public
   */
  PN_3519 = 35190,
  /**
   * 3584 - 0-50A DC Current Transducer
   * @public
   */
  PN_3584 = 35840,
  /**
   * 3585 - 0-100A DC Current Transducer
   * @public
   */
  PN_3585 = 35850,
  /**
   * 3586 - 0-250A DC Current Transducer
   * @public
   */
  PN_3586 = 35860,
  /**
   * 3587 - +-50A DC Current Transducer
   * @public
   */
  PN_3587 = 35870,
  /**
   * 3588 - +-100A DC Current Transducer
   * @public
   */
  PN_3588 = 35880,
  /**
   * 3589 - +-250A DC Current Transducer
   * @public
   */
  PN_3589 = 35890,
  /**
   * MOT2002 - Motion Sensor Low Sensitivity
   * @public
   */
  PN_MOT2002_LOW = 20020,
  /**
   * MOT2002 - Motion Sensor Medium Sensitivity
   * @public
   */
  PN_MOT2002_MED = 20021,
  /**
   * MOT2002 - Motion Sensor High Sensitivity
   * @public
   */
  PN_MOT2002_HIGH = 20022,
  /**
   * VCP4114 - +-25A DC Current Transducer
   * @public
   */
  PN_VCP4114 = 41140,
}

export {};

export as namespace phidget22;
