import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Typeusers } from '../typeusers';
import { TypeusersService } from '../typeusers.service';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  isModif: boolean = false;
  user: User;
  typeUsers: Typeusers[] = [];
  preUser = new User();
  selectedType: string = "";
  disableButton = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private typeUsersService: TypeusersService
  ) {
    this.user = new User();
    this.route.queryParams.subscribe(params => {
      if (params['id'] != null) {
        this.isModif = true;
        this.userService.findById(params['id']).subscribe( data => {
          this.preUser = data;
          this.selectedType = data.typeUser.id;
          this.disableButton = false;
        });
      }
    });
  }

  ngOnInit(): void {
    this.typeUsersService.findAll().subscribe(result => {
      this.typeUsers = result;
    });
  }

  onSubmit() {
    this.user.id = this.preUser.id;
    this.user.name = this.preUser.name;
    this.user.firstName = this.preUser.firstName;
    this.user.email = this.preUser.email;
    this.typeUsers.forEach(typeUser => {
      console.log(typeUser.id);
      console.log(this.selectedType);
      console.log(this.preUser);
      if (typeUser.id == this.selectedType) this.user.typeUser = typeUser;
      else if (typeUser.id == this.preUser.typeUser.id) this.user.typeUser = typeUser;
    });
    if (this.isModif) {
      this.userService.modify(this.user).subscribe(result => this.goToUserList());
    } else {
      this.userService.add(this.user).subscribe(result => this.goToUserList());
    }
  }

  goToUserList() {
    this.router.navigate(['/users']);
  }
}
