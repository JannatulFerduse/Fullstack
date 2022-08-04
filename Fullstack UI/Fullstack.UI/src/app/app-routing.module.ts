import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/Employee/add-employee/add-employee.component';
import { EEmployeeListComponent } from './component/Employee/e-employee-list/e-employee-list.component';
import { EditEmployeeComponent } from './component/Employee/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path:'',
    component: EEmployeeListComponent
  },
  {
    path:'employee',
    component: EEmployeeListComponent
  },
  {
    path:'employee/add',
    component: AddEmployeeComponent
  },{
    path:'employee/edit/:id',
    component: EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
