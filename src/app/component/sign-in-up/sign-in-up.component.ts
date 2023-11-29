import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/authService/auth.service';

@Component({
  selector: 'app-sign-in-up',
  templateUrl: './sign-in-up.component.html',
  styleUrls: ['./sign-in-up.component.scss'],
})
export class SignInUpComponent implements OnInit {
  errorMessage = true;
  signUp: boolean = false;
  credentialForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.credentialForm = this.fb.group({
      fullName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  get gf() {
    return this.credentialForm.controls;
  }

  handleFormSubmition(condition: boolean) {
    if (condition) {
      //sign up

      if (this.credentialForm.valid) {
        this.authService.register(this.credentialForm.value.email, this.credentialForm.value.password);
        // this.authService.checkingLoging.next(true)
      }
    } else {
      //signin
      if (this.credentialForm.valid) {
        this.authService.login(this.credentialForm.value.email, this.credentialForm.value.password);
        // this.authService.checkingLoging.next(true)
      }
    }
  }

  updateFullNameValidators() {
    this.signUp = !this.signUp;
    this.credentialForm.reset();
    const fullNameControl = this.gf['fullName'];

    if (this.signUp) {
      fullNameControl?.setValidators(Validators.required);
    } else {
      fullNameControl?.clearValidators();
    }

    fullNameControl?.updateValueAndValidity()
  }
}
