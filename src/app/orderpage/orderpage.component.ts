import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.css']
})
export class OrderpageComponent implements OnInit {
  po(){
    alert('Thank You !!! Your Order Request is submitted Successfully');
    this.route.navigate(['./home'])
  
  }
  ao(){
    alert(' Your Order Request is cancel');
    this.route.navigate(['./home'])

  }

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
