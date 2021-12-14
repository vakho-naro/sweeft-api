import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = []
  constructor(private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.usersService.getAllUsers()
      .subscribe(data => this.users = data.list)
  }

  onSelect(user: any) {
    this.router.navigate(["/user", user.id])
  }

}
