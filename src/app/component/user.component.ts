import { Component, OnInit} from '@angular/core';
import { Router} from '@angular/router';

import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: '../view/user.view.html'
})
export class UserComponent implements OnInit {

  public showForm: boolean;
  public newData: boolean;
  public user: User = new User;
  public users: User[];
  public loading: boolean;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.showForm = false;
    this.newData = true;
    this.getUsers();
  }

  getUsers(): void {
    this.loading = true;
    this.userService.getUsers()
      .subscribe(
        ok => {
            this.users = ok;
            this.loading = false;
          },
        error => this.showError(error));
  }

  newUser(): void {
    this.showForm = true;
    this.newData = true;
    this.user = new User;
    // this.router.navigate(['add']);
  }

  createUser(user: User): void {
    console.log(user);
    this.userService.createUser(user)
        .subscribe(
          data => this.createOk(data),
          error => this.showError(error));
  }

  createOk(data: any) {
    this.getUsers();
    this.showForm = false;
    alert(data.message);
  }

  updateUser(user: User): void {
    this.userService.updateUser(user)
        .subscribe(
          data => this.updateOk(data),
          error => this.showError(error));
  }

  updateOk(data: any) {
    this.getUsers();
    this.showForm = false;
    alert(data.message);
  }

  update(user: User): void {
    this.showForm = true;
    this.newData = false;
    this.user = user;
  }

  deleteUser(user: User): void {
    if (window.confirm('El registro será borrado')) {
    this.userService.deleteUser(user)
      .subscribe(
        data => this.deleteOk(data),
        error => this.showError(error));
    }
  }

  deleteOk(data: any) {
    this.getUsers();
    alert(data.message);
  }

  showError(data: any) {
    console.log(data);
    alert(data.error.message);
  }
}


