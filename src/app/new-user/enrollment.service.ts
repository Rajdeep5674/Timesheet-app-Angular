import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';

import {Observable,throwError} from 'rxjs';
import {catchError,retry} from 'rxjs/operators';

@Injectable()
export class EnrollmentService {
  _url='https://myapp.rajdeep5674.repl.co/enroll';
  enroll(user:User)
  {
    return this._http.post<any>(this._url,user);
    console.log("user data"+user);
  }
  constructor(private _http:HttpClient) { }

}