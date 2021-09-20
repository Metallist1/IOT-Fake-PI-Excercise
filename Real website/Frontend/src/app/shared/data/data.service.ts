import {Injectable} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private socket: Socket) {}

  setUpAllHumidity(){
    return this.socket.fromEvent('get_all_humidity');
  }

  setUpAllTemperature(){
    return this.socket.fromEvent('get_all_temperature');
  }

  setUpHumidity(){
    return this.socket.fromEvent('new_humidity');
  }

  setUpTemperature(){
    return this.socket.fromEvent('new_temperature');
  }

  setUpSettings(){
    return this.socket.fromEvent('new_settings');
  }
}
