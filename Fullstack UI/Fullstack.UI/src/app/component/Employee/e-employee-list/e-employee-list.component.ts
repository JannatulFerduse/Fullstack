import { Component, OnInit } from '@angular/core';
import { employee } from 'src/app/model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-e-employee-list',
  templateUrl: './e-employee-list.component.html',
  styleUrls: ['./e-employee-list.component.css']
})
export class EEmployeeListComponent implements OnInit {



  employees : employee[] = [];
  constructor(private employeesService: EmployeesService ) { }

  ngOnInit(): void {
    this.employeesService.getAllEmployees()
    .subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error:(response)=> {
        console.log(response);
      }
    })
  }

}
