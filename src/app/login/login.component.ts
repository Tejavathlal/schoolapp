import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })

  constructor(private loginService: LoginService,private router:Router){}


  login(){
    console.log(this.loginForm.valid);
    this.loginService.loginDo( this.loginForm.value).subscribe(
      (data:any)=>{
        alert("login SuccessFully");
         this.router.navigateByUrl("/dashboard")
         localStorage.setItem('token',data.token)
      },
      (err:any)=>{
        alert("login Failed");
      }
    )
  }
}


