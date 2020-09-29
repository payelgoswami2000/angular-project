import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  o(){
    this.route.navigate(['./orderpage'])
  }


  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
