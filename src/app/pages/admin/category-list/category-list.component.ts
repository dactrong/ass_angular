import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/types/category';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
    category: Category[];
  constructor( 
    private categoryService: CategoryService,
    private toastrService: ToastrService,
    ) { 
    this.category =[]
  }

  ngOnInit(): void {
    this.onGetList();
  }

  onGetList(){
    this.categoryService.getCategory().subscribe((data) =>{
      this.category = data;
     });
  }
  onDelete(_id: string){
    // confirm 
    const confirmDelete = confirm('Bạn có chắc chắn xóa không')
    // Nếu có Id thì xóa
    if(confirmDelete && _id){
      // Nếu có id thì xóa -> thực hiện call API xóa
        this.categoryService.deleteCategory(_id).subscribe((data)=>{
          console.log(data);
          this.onGetList();
        })      
       
        this.toastrService.success("Xóa thành công.")

    }

    // Cập nhật lại dữ liệu
  }

}
//---------------------------------------------------




   
  

  
  

// }
