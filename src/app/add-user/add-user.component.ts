import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmPasswordValidator } from '../validators/confirm-password.validator';
import { matchingPasswords } from '../validators/matchingPasswords';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  //Creation du FormGoupe
  submitted = false;
  profileForm: FormGroup = new FormGroup({});;

  constructor(private route: Router) { }
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      //rePassword: new FormControl(''),

      rePassword: new FormControl('', Validators.required),
      phone: new FormControl(''),

    },
      {

        validators: [matchingPasswords]

      }
    );

  }

  get f() {
    return this.profileForm.controls;
  }


  addUser() {
    console.log(this.profileForm.hasError('mismatchedPasswords'));

    // rePassword: this.rePassword,
    //console.log('repas=',this.rePassword);
    this.submitted = true;
    if (this.profileForm.invalid) {
      //this.route.navigate(['/listUser'])
      return
    };
    const registartions = JSON.parse(localStorage.getItem('registration') || '[]');
    registartions.push(this.profileForm.value);
    localStorage.setItem('registration', JSON.stringify(registartions));
    this.route.navigate(['/listUser'])
    //console.log('users=', registartions)
  }



}
