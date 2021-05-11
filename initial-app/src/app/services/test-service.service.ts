import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http:HttpClient) { }
  makeTestServiceCall() {
    return this.http.get('http://localhost:5000/prime')
  }
}
