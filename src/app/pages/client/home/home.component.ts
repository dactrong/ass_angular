import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Product[];
  constructor(private productService : ProductService) {
    this.products =[];
   }
   
  ngOnInit(): void {

    this.productService.getProducts().subscribe((data) =>{
      this.products = data;
     });
  }
}
