import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent implements OnInit {
  m(){
    this.route.navigate(['./mycart'])
  }
  productt=[

    {
      id:1,
      name:"Nikon D50012 Smart Camera",
     
        image:'../../assets/mainfff.jpg'},

    {id:2,name:"HP smartBook pavilion laptop",
 image:'../../assets/lapif.jpg' },

    {id:3,name:"New MacBook 7s pro Desktop",
    image:'../../assets/compufront.jpg' },

    {id:4,name:"Canon 45EFF New 3S Camera",
    image:'../../assets/camerath.jpg' },

    {id:5,name:"MacBook 3 Pro latest Desktop",
    image:'../../assets/pi.jpg' },

    {id:6,name:"Canon D435",
    image:'../../assets/camerafi.jpg' },

    {id:7,name:"Dell Gaming Laptop",
    image:'../../assets/dellw.jpg' },

    {id:8,name:"MacBook 4S latest Desktop",
    image:'../../assets/makbesti.jpg' },

    {id:9,name:"Dslr Video Camera 9s",
    image:'../../assets/dslrp.jpg' },

    {id:10,name:"MacBook 4D Desktop",
    image:'../../assets/picth.jpg' },

    {id:11,name:"Video Camera",
    image:'../../assets/nik.jpg' },

    {id:12,name:"MacBook Lite Gaming Desktop",
    image:'../../assets/picfo.jpg' }



  ];

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
