import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from '../model/employee.model';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiurl :string=environment.baseApiurl;

  constructor(private http: HttpClient) { }

  getAllEmployees():Observable<employee[]>
  {
    return this.http.get<employee[]>(this.baseApiurl+'/api/employees');

  }
  addEmployee(addEmployeeRequest: employee): Observable<employee>{
    
    addEmployeeRequest.id ='00000000-0000-0000-0000-000000000000';
    return this.http.post<employee>(this.baseApiurl+'/api/employees',addEmployeeRequest);
  }
  getEmployee(id : string) : Observable<employee>
  {
    return this.http.get<employee>(this.baseApiurl+'/api/employees/'+id);

  }
  updateEmployee(id : string,updateEmployeeRequest :employee) : Observable<employee>
  {
    return this.http.put<employee>(this.baseApiurl+'/api/employees/'+id,updateEmployeeRequest);

  }
  deleteEmployee(id : string) : Observable<employee>
  {
    return this.http.delete<employee>(this.baseApiurl+'/api/employees/'+id);

  }
}
