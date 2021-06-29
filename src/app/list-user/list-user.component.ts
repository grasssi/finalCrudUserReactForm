import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  registartions = JSON.parse(localStorage.getItem('registration') || '[]');
  constructor() { }

  ngOnInit(): void {
  }
  deleteUser(i: any) {
    this.registartions.splice(i, 1);
    localStorage.setItem('registration', JSON.stringify(this.registartions));
  }
}
