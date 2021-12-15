import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: any;
  user: any;
  friends: any;
  page:any = 1

  constructor(private route: ActivatedRoute,
              private router: Router,
              private usersService: UsersService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userId = params.get('id') 
      this.getOne()
      this.getFriends()
      this.page = 1
      window.scroll(0,0)
      window.addEventListener("scroll", ()=> {
        this.scrollEvent()
      })
    });
  }

  getOne() {
    this.usersService.getOneUser(this.userId)
      .subscribe(data => this.user = data)
  }

  getFriends() {
    this.usersService.getUserFriends(this.userId)
      .subscribe(data => this.friends = data.list)
  }

  onSelect(friend: any) {
    this.router.navigate(["/user", friend.id])
  }

  scrollEvent() {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
      this.page+=1
      this.usersService.getUserFriendsLazyly(this.userId, this.page).subscribe(data => this.friends.push(...data.list) )
    }
  }

}
