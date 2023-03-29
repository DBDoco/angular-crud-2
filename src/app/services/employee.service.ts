import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  url:string='http://localhost:3000/employees';

  addEmployee(data: any): Observable<any>{
    return this.http.post(this.url, data);
  }

  getEmployee(): Observable<any>{
    return this.http.get(this.url);
  }
}
