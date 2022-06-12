import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  //  1. Phải lấy ra được id trên url
  _id: string;

  // 2. Sử dụng để call api lấy chi tiết product

  product: Product;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService
  ) {

    this._id = '';
    this.product = {
      _id: '',
      name: '',
      price: 0,
      quantity: 0,
      images: '',
      category:'',
      sale: 0,
      status: '',
      desc: ''
    };

  }


  ngOnInit(): void {

    this._id = this.activateRoute.snapshot.params['id'];
    
    this.productService.getProduct(this._id).subscribe((data) =>{
      this.product = data;
      
    })
  }

}
