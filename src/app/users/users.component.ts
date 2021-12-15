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
  page: any = 1

  constructor(private usersService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.usersService.getAllUsers()
      .subscribe(data => {
        this.users = data.list})

    window.addEventListener("scroll", ()=> {
      this.scrollEvent()
    })

  }

  onSelect(user: any) {
    this.router.navigate(["/user", user.id])
  }

  scrollEvent() {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
      this.page+=1
      this.usersService.getAllUsersLazyly(this.page).subscribe(data => this.users.push(...data.list) )
    }
  }

 
   
}
