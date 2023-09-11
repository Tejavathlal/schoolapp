import { Component } from '@angular/core';
import { AllstudentService } from '../allstudent.service';

@Component({
  selector: 'app-allstudent',
  templateUrl: './allstudent.component.html',
  styleUrls: ['./allstudent.component.css']
})
export class AllstudentComponent {

  public students:any=[];
  public term:string= "";

  public column: string = "";
  public order: string = "";

  public limit : string= "";
  public page : string = "";
   
  constructor(private allstudentService: AllstudentService){

    allstudentService.getStudent().subscribe(
      (data:any)=>{
       this.students= data;
      },
      (err:any)=>{
        alert("Internal Service Error")
      }
    )

  }
  getstudentfilter(){
    this.allstudentService.getStudentFilter(this.term).subscribe(
      (data:any)=>{
     this.students= data;
      },
      (err:any)=>{
        ("internal Server Error")
      }
    )
  }
  getstudentSortby(){
    this.allstudentService.getStudentSortBy(this.column,this.order).subscribe(
      (data:any)=>{
        this.students=data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
  getstudentdelete(id:number){
    this.allstudentService.getstudentDelete(id).subscribe(
      (data:any)=>{
        alert("Delete SuccessFully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }

  getstudentpage(){
    this.allstudentService.getstudentpage(this.page, this.limit).subscribe(
      (data:any)=>{
        this.students=data;
  
      },
      (err:any)=>{
        alert("Internal Servre Error");
      }
    )
  }
  
}
