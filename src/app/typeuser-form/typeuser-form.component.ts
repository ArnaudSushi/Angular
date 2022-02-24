import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Typeusers } from '../typeusers';
import { TypeusersService } from '../typeusers.service';

@Component({
  selector: 'app-typeuser-form',
  templateUrl: './typeuser-form.component.html',
  styleUrls: ['./typeuser-form.component.css']
})
export class TypeuserFormComponent implements OnInit {

  typeUsers: Typeusers;
  isModif: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private typeUserService: TypeusersService
  ) {
    this.typeUsers = new Typeusers();
    this.route.queryParams.subscribe(params => {
      if (params['id'] != null) {
        this.isModif = true;
        this.typeUserService.findById(params['id']).subscribe( data => this.typeUsers = data);
      }
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.typeUserService.add(this.typeUsers).subscribe(result => this.goToUserList());
  }

  goToUserList() {
    this.router.navigate(['/typeusers']);
  }

}
