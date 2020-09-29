import { Component, OnInit } from '@angular/core';
import  { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginForm:FormGroup;
  signData:any;

  constructor(private fb:FormBuilder,private router:Router,private store:TestService) { }
  
  loginUser():void{
    let formobj=this.loginForm.value;
    this.store.registerData(formobj).subscribe(
      (userinfo)=>{
      this.signData=userinfo;
      alert(this.signData.message);
      console.log(this.signData);
       this.router.navigate(['/login']);
     

      })
    }

  ngOnInit(): void {
    this.loginForm= new FormGroup({
     
       fname:new FormControl(null,[Validators.required,Validators.pattern("^[A-Za-z  ]+$")]),
       lname:new FormControl(null,[Validators.required,Validators.pattern("^[A-Za-z  ]+$")]),
      
      
      
       email:new FormControl(null,[Validators.required,Validators.pattern('^([a-zA-Z0-9.-]+)@([a-zA-Z]{5,12}).([a-zA-Z.]{2,20})$')]),
    
       password: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,12}$')])
     
       
      });
  }
  


}
