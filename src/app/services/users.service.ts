import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/'

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.url + '1/20')
  }

  getAllUsersLazyly(page: any): Observable<any> {
    return this.http.get<any>(this.url + page + '/20')
  }

  getOneUser(id: any): Observable<any> {
    return this.http.get<any>(this.url + id)
  }

  getUserFriends(id: any): Observable<any> {
    return this.http.get<any>(this.url + id + '/friends/1/20')
  }

  getUserFriendsLazyly(id: any, page: any): Observable<any> {
    return this.http.get<any>(this.url + id + '/friends/' + page + '/20')
  }
}
