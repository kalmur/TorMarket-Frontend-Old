import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../../model/user';
import { UserServiceService } from '../../services/user-service.service';

import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})

export class UserRegisterComponent implements OnInit {

    registerationForm: FormGroup

    /*Sotring form info*/
    user: IUser;
    userSubmitted: boolean;
    
    constructor(private fb: FormBuilder,
                private userService: UserServiceService,
                private alertify: AlertifyService  ) { }

    ngOnInit() {
      //this.registerationForm = new FormGroup({
      //  userName: new FormControl(null, Validators.required),
      //  userEmail: new FormControl(null, [Validators.required, Validators.email]),
      //  userPassword: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      //  userConfirmPassword: new FormControl(null, [Validators.required]),
      //  userMobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      //}, this.passwordMatchValidator);

      this.createRegisterationForm();
    }

  /* Form builder - new instance is created for us */
  /* Need to insert a JS object - {key : value} */

    createRegisterationForm() {
      this.registerationForm = this.fb.group({
        userName: [null, Validators.required],
        userEmail: [null, [Validators.required, Validators.email]],
        userPassword: [null, [Validators.required, Validators.minLength(8)]],
        userConfirmPassword: [null, [Validators.required]],
        userMobile: [null, [Validators.required, Validators.maxLength(10)]]
      }, { validators: this.passwordMatchValidator });
    }


    /*Validating passwords*/

    passwordMatchValidator(fg: FormGroup): Validators {
      return fg.get('userPassword').value === fg.get('userConfirmPassword').value ? null :
        { notmatched: true };
    }

    onSubmit() {
      console.log(this.registerationForm.value);
      this.userSubmitted = true;

      if (this.registerationForm.valid) {

        //this.user = Object.assign(this.user, this.registerationForm.value);
        //this.userService.addUser(this.user);
        this.userService.addUser(this.userData());
        this.registerationForm.reset();
        this.userSubmitted = false;
        this.alertify.success("Successfully registered!");
      } else {
        this.alertify.error("Error has occured during registration!");
      }
    }

    userData(): IUser {

      return this.user = {

        userName: this.userName.value,
        userEmail: this.email.value,
        userPassword: this.password.value,
        userMobile: this.mobile.value
      }
    }

    /*Getters for all form control*/

    get userName() {
      return this.registerationForm.get('userName') as FormControl;
    }

    get email() {
      return this.registerationForm.get('userEmail') as FormControl;
    }

    get password() {
      return this.registerationForm.get('userPassword') as FormControl;
    }

    get confirmPassword() {
      return this.registerationForm.get('userConfirmPassword') as FormControl;
    }

    get mobile() {
      return this.registerationForm.get('userMobile') as FormControl;
    }
}
