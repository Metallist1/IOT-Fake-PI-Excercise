import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-temperature-change',
  templateUrl: './temperature-change.component.html',
  styleUrls: ['./temperature-change.component.scss']
})
export class TemperatureChangeComponent implements OnInit {

  // @ts-ignore
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      temperature: ['', Validators.required]
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
  }

  loginUsingGoogle() {

  }
  loginUsingFacebook() {

  }

}
