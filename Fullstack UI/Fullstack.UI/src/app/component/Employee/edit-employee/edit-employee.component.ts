import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from 'src/app/model/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

employeeDetails: employee={
  id:'',
  name:'',
  email:'',
  department:'',
  phone:0,
  salary:0

};

  constructor(private route:ActivatedRoute,
    private employeeService:EmployeesService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('id');
        
        if(id){
          this.employeeService.getEmployee(id)
          .subscribe({
            next:(response) =>{
              this.employeeDetails=response;


            }
          });


        }
      }
    })

  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employeeDetails.id,this.employeeDetails)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['employee']);
      }
    });
  }
  deleteEmployee(id:string){
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['employee']);
      }
    });
  }

}
