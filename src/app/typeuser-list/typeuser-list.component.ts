import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { Typeusers } from '../typeusers';
import { TypeusersService } from '../typeusers.service';

@Component({
  selector: 'app-typeuser-list',
  templateUrl: './typeuser-list.component.html',
  styleUrls: ['./typeuser-list.component.css']
})
export class TypeuserListComponent implements OnInit {

  typeUsers: Typeusers[] = [];
  showErrorDiv = false;
  typeToDelete: Typeusers = new Typeusers();
  dataSource = new MatTableDataSource<Typeusers>();
  displayedColumns: string[] = ["id", "type", "action"];
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private typeUsersService: TypeusersService) { }

  ngOnInit(): void {
    this.typeUsersService.findAll().subscribe(data => {
      this.typeUsers = data;
      this.dataSource = new MatTableDataSource(this.typeUsers);
      this.dataSource.sort = this.sort;
    });
  }

  deleteType(id: string) {
    this.typeUsers.forEach(type => { if (type.id == id) this.typeToDelete = type;});
    this.typeUsersService.delete(id).subscribe(result => {
      if (result == 200) {
        location.reload();
      } else {
        this.showErrorDiv = true;
      }
    });
  }
}
