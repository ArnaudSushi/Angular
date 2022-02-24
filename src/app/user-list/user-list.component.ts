import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  dataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = ["type", "name", "firstName", "email", "action"];
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.findAll().subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.sort = this.sort;
    });
  }

  ngOnChange(): void {
  }

  deleteUser(id: string) {
    this.userService.delete(id).subscribe(result => location.reload());
  }
}
