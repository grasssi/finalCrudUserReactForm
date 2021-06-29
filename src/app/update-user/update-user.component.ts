import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  users = JSON.parse(localStorage.getItem('registration') || '[]');
  constructor(private activatetRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) { }
  index: any;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
  })
  ngOnInit(): void {
    this.index = this.activatetRoute.snapshot.params.index;
    this.profileForm = this.fb.group({
      firstName: [this.users[this.index].firstName],
      lastName: [this.users[this.index].lastName],
      email: [this.users[this.index].email],
      password: [this.users[this.index].password],
      phone: [this.users[this.index].phone]
  })
  // console.log('users=', this.users[this.index].firstName);
  //firstName=this.users[this.index].firstName;
}

updateUser() {
  //remplacer len nouveau object avec lancien objet
  this.users.splice(this.index, 1, this.profileForm.value);
  //mise a jour de localStorage
  localStorage.setItem('registration', JSON.stringify(this.users))
  //console.log('users=', this.users)
  //apres lupdate naviger vers le component listUser
  this.router.navigate(['/listUser'])
}
}
