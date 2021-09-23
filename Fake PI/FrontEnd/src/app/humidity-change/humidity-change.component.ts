import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FakePIService} from "../shared/fakePI.service";

@Component({
  selector: 'app-humidity-change',
  templateUrl: './humidity-change.component.html',
  styleUrls: ['./humidity-change.component.scss']
})
export class HumidityChangeComponent implements OnInit {
  // @ts-ignore
  humidityForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private fakePIService: FakePIService
  ) {
  }

  ngOnInit() {
    this.humidityForm = this.formBuilder.group({
      humidity: ['', Validators.required]
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.humidityForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.humidityForm.invalid) {
      return;
    }

    this.fakePIService.newHumidity({
      value:this.humidityForm.value.humidity,
      time: Date.now(),
      id: '1A'
    }).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }

  loginUsingGoogle() {

  }
  loginUsingFacebook() {

  }
}
