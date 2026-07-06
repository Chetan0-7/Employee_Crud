import { Component  } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [MatButtonModule,
           MatFormFieldModule,
           MatInputModule,
           MatCardModule,
           MatMenuModule,
           MatTableModule,
           FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  displayedColumns = ['id', 'name', 'salary', 'action'];
  selectedIndex = -1
  employees = [
    { id: 1, name: 'Chetan', salary: 30000 }
  ];

  id = 0;
  name = '';
  salary = 0;

addEmployee(){
  if(!this.id || !this.name ||!this.salary){
    alert ('please fill the fields')
    return;
  }
  this.employees = [
  ...this.employees,
  {
    id:this.id,
    name:this.name,
    salary: this.salary
  }
];
this.id = 0;
this.name = '',
this.salary = 0;
}


deleteEmployee(index: number) {
  if(confirm('Are you sure?')) {
  this.employees = this.employees.filter((_, i) => i !== index);
  }
}
editEmployee(index:number){
  this.selectedIndex = index;

  this.id = this.employees[index].id;
  this.name = this.employees[index].name;
  this.salary= this.employees[index].salary 
}
updateEmployee(){
  this.employees[this.selectedIndex] = {
    id:this.id,
    name:this.name,
    salary:this.salary
  };
  this.employees = [...this.employees];

  this.selectedIndex = -1;
  this.id = 0;
  this.name = '';
  this.salary = 0;
  }
}
