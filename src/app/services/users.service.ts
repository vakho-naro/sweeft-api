import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url: string = 'http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/20'
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  getOne(id: any): Observable<any> {
    return this.http.get<any>('http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/'+id)
  }
}
