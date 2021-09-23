import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {Action, Selector, State, StateContext, Store} from '@ngxs/store';
import {Sensor} from './entities/sensor';
import {Update} from './entities/update';
import {
  ChangeSettings,
  SetAllUpHumidity,
  SetUpAllTemperature,
  SetUpHumidity,
  SetUpSettings,
  SetUpTemperature
} from "./data.action";

export class DataStateModel {
  settings: Sensor | undefined ;
  humidity: Update[] | undefined ;
  temperature: Update[] | undefined ;
}

@State<DataStateModel>({
  name: 'data',
  defaults: {
    settings: undefined ,
    humidity: [] ,
    temperature: [] ,
  },
})
@Injectable()
export class DataState {
  constructor(private dataService: DataService,
              private store: Store) {

    dataService.setUpAllHumidity().subscribe(
      (data) => {
        this.store.dispatch(new SetAllUpHumidity(data as Update[]));
      });

    dataService.setUpAllTemperature().subscribe(
      (data) => {
        this.store.dispatch(new SetUpAllTemperature(data as Update[]));
      });

    dataService.setUpHumidity().subscribe(
      (data) => {
        this.store.dispatch(new SetUpHumidity(data as Update));
      });

    dataService.setUpTemperature().subscribe(
      (data) => {
        this.store.dispatch(new SetUpTemperature(data as Update));
      });

    dataService.setUpSettings().subscribe(
      (data) => {
        this.store.dispatch(new SetUpSettings(data as Sensor));
      });
  }

  @Selector()
  static getTemperature(state: DataStateModel): any {
    return state.temperature;
  }

  @Selector()
  static getHumidity(state: DataStateModel): any {
    return state.humidity;
  }
  @Selector()
  static getSettings(state: DataStateModel): any {
    return state.settings;
  }

  @Action(ChangeSettings)
  changeSettings({getState, setState}: StateContext<DataStateModel>,
                { settings }: ChangeSettings): any {
    this.dataService.changeSettings(settings);
  }


  @Action(SetAllUpHumidity)
  setUpMessages({getState, setState}: StateContext<DataStateModel>,
                { humidity }: SetAllUpHumidity): any {
    const state = getState();
    setState({
      ...state,
      humidity: humidity,
    });
  }

  @Action(SetUpAllTemperature)
  setUpAllTemperature({getState, setState}: StateContext<DataStateModel>,
                { temperature }: SetUpAllTemperature): any {
    const state = getState();
    setState({
      ...state,
      temperature: temperature,
    });
  }

  @Action(SetUpHumidity)
  setUpHumidity({getState, setState}: StateContext<DataStateModel>,
                     { humidity }: SetUpHumidity): any {
    const state = getState();
    setState({
      ...state,
      // @ts-ignore
      humidity: [...state.humidity, humidity, ],
    });
  }

  @Action(SetUpTemperature)
  setUpTemperature({getState, setState}: StateContext<DataStateModel>,
                { temperature }: SetUpTemperature): any {
    const state = getState();
    setState({
      ...state,
      // @ts-ignore
      temperature: [...state.temperature, temperature, ],
    });
  }

  @Action(SetUpSettings)
  setUpSettings({getState, setState}: StateContext<DataStateModel>,
               { settings }: DataStateModel): any {
    const state = getState();
    setState({
      ...state,
      settings: settings,
    });
  }


}
