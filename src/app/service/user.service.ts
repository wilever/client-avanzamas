import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../model/user.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  private userUrl = 'https://api-avanzamas.herokuapp.com/api/user';
  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + '?id=' + user.id);
  }

  public createUser(user) {
    return this.http.post(this.userUrl, user);
  }

  public updateUser(user) {
    return this.http.put(this.userUrl + '?id=' + user.id, user);
  }

}
