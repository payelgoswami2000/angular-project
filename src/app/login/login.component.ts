
import { Component, OnInit } from '@angular/core';
import  { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import { TestService } from '../test.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  regisForm:FormGroup;
  logindataB:any;
  // myclick(){
  //   this.router.navigate(['./signup'])
  // }

  constructor(private fb:FormBuilder,private router:Router,private store:TestService,private sservice:SessionService) { }

  loginUser(){
    let logobj=this.regisForm.value;
    this.store.loginData(logobj).subscribe((loginuser)=>{
      this.logindataB=loginuser;
      alert(this.logindataB.message);
      console.log(this.logindataB);
      this.sservice.setLoginResponse(
       
        this.logindataB.data.firstname,
        this.logindataB.data.lastname,
        this.logindataB.data.token,
      )


      this.router.navigate(['/dash']);
    })
    
  }

  ngOnInit(): void {
    this.regisForm=new FormGroup({
      email:new FormControl(null,[Validators.required,Validators.pattern('^([a-zA-Z0-9.-]+)@([a-zA-Z]{5,12}).([a-zA-Z.]{2,20})$')]),
    
      password: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$')])
    })
  }
  

}
