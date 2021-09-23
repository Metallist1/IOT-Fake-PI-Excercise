import {Sensor} from './entities/sensor';
import {Update} from './entities/update';

export class ChangeSettings {
  static readonly type = '[Auth] ChangeSettings';
  constructor(
    public settings: Sensor
  ) {}
}


export class SetUpSettings {
  static readonly type = '[Auth] SetUpSettings';
  constructor(
    public settings: Sensor
  ) {}
}

export class SetUpHumidity {
  static readonly type = '[Auth] SetUpHumidity';
  constructor(
    public humidity: Update
  ) {}
}

export class SetUpTemperature {
  static readonly type = '[Auth] SetUpTemperature';
  constructor(
    public temperature: Update
  ) {}
}


export class SetAllUpHumidity {
  static readonly type = '[Auth] SetAllUpHumidity';
  constructor(
    public humidity: Update[]
  ) {}
}

export class SetUpAllTemperature {
  static readonly type = '[Auth] SetUpAllTemperature';
  constructor(
    public temperature: Update[]
  ) {}
}
