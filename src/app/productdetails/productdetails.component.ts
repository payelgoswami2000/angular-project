import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  placeorder(){
    this.rou.navigate(['./orderpage'])

  }
  mycart(){
    this.rou.navigate(['./mycart']);
    alert('Item Added To Cart!!! Go to Cart');

  }
  productData:any;
  productt=[
    {
      id:1,
      name:"Nikon D50012 Smart Camera",
     
    price:'$11000',
        image:'../../assets/mainfff.jpg',reviews:'30',color:'black'},

    {id:2,name:"HP smartBook pavilion laptop",price:'$15000',
 image:'../../assets/lapif.jpg',reviews:'50',color:'white' },

    {id:3,name:"New MacBook 7s pro Desktop",price:'$10000',
    image:'../../assets/compufront.jpg',reviews:'70',color:'Blue' },

    {id:4,name:"Canon 45EFF New 3S Camera", price:'$17000',
    image:'../../assets/camerath.jpg',reviews:'10',color:'Purple' },

    {id:5,name:"MacBook 3 Pro latest Desktop",price:'$111000',
    image:'../../assets/pi.jpg',reviews:'30',color:'black' },

    {id:6,name:"Canon D435",
    image:'../../assets/camerafi.jpg',price:'$11000',reviews:'30',color:'black' },

    {id:7,name:"Dell Gaming Laptop",
    image:'../../assets/dellw.jpg',price:'$76000',reviews:'20',color:'white' },

    {id:8,name:"MacBook 4S latest Desktop",
    image:'../../assets/makbesti.jpg',price:'$11000',reviews:'40',color:'black' },

    {id:9,name:"Dslr Video Camera 9s",
    image:'../../assets/dslrp.jpg',price:'$1100',reviews:'10',color:'black' },

    {id:10,name:"MacBook 4D Desktop",
    image:'../../assets/picth.jpg',price:'$1200',reviews:'30',color:'black' },

    {id:11,name:"Video Camera",
    image:'../../assets/nik.jpg',price:'$11000',reviews:'30',color:'black' },

    {id:12,name:"MacBook Lite Gaming Desktop",
    image:'../../assets/picfo.jpg',price:'$11000',reviews:'30',color:'black' }



  ];
  
  constructor(private route:ActivatedRoute,private rou:Router) { }

  ngOnInit(): void {
    
    this.route.params.subscribe((idValue)=>{
      console.log(idValue);
     this.productData=this.productt.filter((productinfo)=>{
      
       return productinfo.id==idValue.id;

        

     })[0];
     console.log(this.productData);

   })
//  }

  }
}
