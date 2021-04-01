import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { user } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }
  getinfo(){
    return this.http.get<user>('https://jsonplaceholder.typicode.com/posts')
  }
}
