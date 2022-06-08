import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/types/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  constructor(private productService : ProductService) {
    this.products =[];
   }
   
  ngOnInit(): void {
   
    this.onGetList();
    
  }

  onGetList(){
    this.productService.getProducts().subscribe((data) =>{
      this.products = data;
     });
  }

  onDelete(_id: string){
    // confirm 
    const confirmDelete = confirm('Bạn có chắc chắn xóa không')
    // Nếu có Id thì xóa
    if(confirmDelete && _id){
      // Nếu có id thì xóa -> thực hiện call API xóa
        this.productService.deleteProduct(_id).subscribe((data)=>{
          console.log(data);
          this.onGetList();
        })      
    }
    // Cập nhật lại dữ liệu
  }

}
