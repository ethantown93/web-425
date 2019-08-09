/*
============================================
; Title:  townsend-assignment-4.2
; Author: Ethan Townsend
; Date:   7/31/2019
; Description: web-425
;===========================================
*/


import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  template: `
  <div class="container">
  <div class="row">
    <h2>User Details</h2>
    <table class="table table-hover table-striped">
      <thead class="tbl-header">
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ user.id }}</td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  `,
  styles: [`
  .tbl-header {
    background-color: steelblue;
    color: white; 
  }
`],

providers: [UserService]

})
export class UserComponent implements OnInit {

  user: User;

  constructor(userService: UserService) { 
    this.user = userService.getUser();
   }

  ngOnInit() {
  }

}