import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Base_url:string="https://angular-employe-server.onrender.com"

  constructor(private http:HttpClient) { }

  addEmployee(data:any){
    return this.http.post(`${this.Base_url}/employees`,data)
  }

  getALLEmployee(){
    return this.http.get(`${this.Base_url}/employees`)
  }

  deleteEmployee(id:any){
    return this.http.delete(`${this.Base_url}/employees/${id}`)
  }

  getSpecificEmployee(id:any){
    return this.http.get(`${this.Base_url}/employees/${id}`)
  }

  updateEmployee(id:any,data:any){
    return this.http.put(`${this.Base_url}/employees/${id}`,data)
  }

}
