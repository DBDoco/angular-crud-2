import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.css'],
})
export class EmployeeAddEditComponent {
  empForm: FormGroup;

  pozicija: string[] = ['Front-end', 'Back-end', 'Administracija'];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private dialogRef: DialogRef<EmployeeAddEditComponent>
  ) {
    this.empForm = this.fb.group({
      ime: '',
      prezime: '',
      email: '',
      datumZaposlenja: '',
      pozicija: '',
    });
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      this.employeeService.addEmployee(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Radnik je dodan!');
          this.dialogRef.close();
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    }
  }
}
