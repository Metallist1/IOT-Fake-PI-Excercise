import { Component, OnInit } from '@angular/core';
import {FakePIService} from "../shared/fakePI.service";

@Component({
  selector: 'app-settings-change',
  templateUrl: './settings-change.component.html',
  styleUrls: ['./settings-change.component.scss']
})
export class SettingsChangeComponent implements OnInit {

  interval = 0;
  readInterval = 0;

  constructor(private fakePIService: FakePIService) {
    this.getSettings();
  }

  ngOnInit(): void {
  }

  getSettings(): void {


    this.fakePIService.getSettings()
      .subscribe(
        response => {
          console.log(response);
          this.interval = response.sendInterval;
          this.readInterval = response.readInterval;
        },
        error => {
          console.log(error);
        });
  }
}
