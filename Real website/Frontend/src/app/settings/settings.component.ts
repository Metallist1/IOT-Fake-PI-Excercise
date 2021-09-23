import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {Select, Store} from "@ngxs/store";
import {Sensor} from "../shared/data/entities/sensor";
import {ChangeSettings} from "../shared/data/data.action";
import {DataState} from "../shared/data/data.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  // @ts-ignore
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  // @ts-ignore
  @Select(DataState.getSettings) settingsForSensor: Observable<Sensor>;
  settingsSensor: Sensor | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    this.loginForm = this.formBuilder.group({
      sentInterval: ['', Validators.required],
      readInterval: ['', Validators.required],
    });
    // @ts-ignore
    this.settingsForSensor.subscribe((data) => {
      if(data){
        // @ts-ignore
        this.loginForm.patchValue({
          // @ts-ignore
          sentInterval: data[0].sendInterval,
          // @ts-ignore
          readInterval: data[0].readInterval
        });
      }
    });
  }

  ngOnInit() {

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const settings = {
      readInterval:this.loginForm.value.readInterval,
      sendInterval: this.loginForm.value.sentInterval,
      sensorId: '1A'
    } as Sensor;

    this.store.dispatch(new ChangeSettings(settings))
      .pipe(first())
      .subscribe(
        data => {

        },
        error => {
        });
  }

}
