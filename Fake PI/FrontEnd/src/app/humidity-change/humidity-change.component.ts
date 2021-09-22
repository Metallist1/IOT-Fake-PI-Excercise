import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

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
  ) {
  }

  ngOnInit() {
    this.humidityForm = this.formBuilder.group({
      temperature: ['', Validators.required]
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
  }

  loginUsingGoogle() {

  }
  loginUsingFacebook() {

  }
}
