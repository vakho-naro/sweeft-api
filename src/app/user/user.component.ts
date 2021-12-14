import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: any;
  user: any;

  constructor(private route: ActivatedRoute,
    private usersService: UsersService) {
      console.log('hiiiiiiii')
     }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params["id"];
    this.getOne()
  }

  getOne() {
    this.usersService.getOne(this.userId)
      .subscribe(data => this.user = data)
  }

}
