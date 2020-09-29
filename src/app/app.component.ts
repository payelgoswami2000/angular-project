import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router:Router,private sservice:SessionService){}
  title = 'mynewwork';
  onsubmit(){
    this.sservice.removeStroage();
    this.router.navigate(['./login'])


  }
}
