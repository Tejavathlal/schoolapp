import { Component } from '@angular/core';
import { AllstudentService } from '../allstudent.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.css']
})
export class CreatestudentComponent {


  public StudentForm: FormGroup = new FormGroup({
    name: new FormControl(),
    class: new FormControl(),
    fatherName: new FormControl(),
    gender: new FormControl(),
    dod: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    address: new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl(),
      state: new FormControl("",[Validators.required]),
      pincode: new FormControl()
    }),
    studentCards: new FormArray([]),
    type: new FormControl(),
    busfee: new FormControl(),
    hostelfee: new FormControl(),
  })
  get studentFormArray(){
   return this.StudentForm.get('studentCards') as FormArray;
  }

  studentadd(){
    this.studentFormArray.push(
      new FormGroup ({
      year: new FormControl(),
      percentage: new FormControl(),
      marks : new FormControl()
      })
    )
  }
  constructor(private allstudentService: AllstudentService) {}
  

  submit(){
    console.log(this.StudentForm.value);
    this.allstudentService.createstudent(this.StudentForm.value).subscribe(
      (data:any)=>{
        alert("Student Created SuccessFully");
      },
      (err:any)=>{
        alert("Student Created Failed");
      }
    )
  }
  deletestudent(i:number){
    this.studentFormArray.removeAt(i);
  }
}
