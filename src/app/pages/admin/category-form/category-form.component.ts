import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  categoryForm:FormGroup;
  categoryId:string;
  constructor(
    private toastr: ToastrService,
    private categoryService: CategoryService, // cung cấp product
    private router: Router, // cung cấp navigate điều hướng
    private activatedRoute: ActivatedRoute // lấy ra các tham số trong url
  ) { 
    this.categoryForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
      ])
    });

    this.categoryId = '0';
  }

  ngOnInit(): void {
    this.categoryId = this.activatedRoute.snapshot.params['id'];
    if (this.categoryId) {
      this.categoryService.getCategorys(this.categoryId).subscribe(data => {
        // Gán giá trị cho form a
        this.categoryForm.patchValue({
          name: data.name
        })
      });
    }

  }
  // mỗi kho form controll name được thay đổi thid sẽ goi vào đây
  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {

    // 1. Lấy ra value của FormControll name hiern thị

    const value = control.value;
    //  2. Kiểm tra theo điều kiện chứa từ khóa product
    if (!value.includes('product')) {
      return { hasProductError: true }
    }
    //  3. trả về kết quả nếu không lôiix
    return null;

  }

  onSubmit() {
    console.log(this.categoryForm.get('name'));
    //1. lấy dwux liệu từ form
    const submitData = this.categoryForm.value;

    if (this.categoryId !== '0' || this.categoryId !== undefined) {
      this.categoryService.updateCategory(this.categoryId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin/category')
      })
    }
    //2. Call API ( Cần định nghĩa service và router điều hướng)

    return this.categoryService.createCategory(submitData).subscribe((data) => {
      //  3. Sau khi api call thành công sẽ điều hướng về danh sách 
      // this.router.navigate(['/admin','products']);
      // this.toastr.success("Hello, I'm the toastr message."),

      this.router.navigateByUrl('/admin/category/list')
    })
  }
  
  
   

}





