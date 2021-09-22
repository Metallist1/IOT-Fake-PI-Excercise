import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-change',
  templateUrl: './settings-change.component.html',
  styleUrls: ['./settings-change.component.scss']
})
export class SettingsChangeComponent implements OnInit {

  interval = 0;
  readInterval = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
