import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestService {
  constructor(private http: HttpClient) { }
  getData(url: string):Observable<Object> {
    return this.http.request('GET', url);
  }
}