import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  addEmployee: {
    code: number;
    name: string;
    gender: string;
    salary: number;
    dob: string;
  }[] = [];

  onSubmitClick(
    codeInput: string,
    nameInput: string,
    gender: string,
    salaryInput: string,
    dobInput: string
  ) {
    if (codeInput && nameInput && gender && salaryInput && dobInput) {
      this.addEmployee.push({
        code: Number(codeInput),
        name: nameInput,
        gender: gender,
        salary: Number(salaryInput),
        dob: dobInput,
      });
    } else {
      alert('please enter the data');
    }
  }
  genderName: string = '';
}
