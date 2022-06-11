import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;
  constructor(
    private toastr: ToastrService ,

    private productService: ProductService, // cung cấp product
    private router: Router, // cung cấp navigate điều hướng
    private activatedRoute: ActivatedRoute// lấy ra các tham số trong url
  ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        // this.onValidateNameHasProduct // tên custom validate
      ]),
      price: new FormControl('', [
        Validators.required,
      ]),
      images: new FormControl('', [
        Validators.required,
      ]),
      quantity: new FormControl('', [
        Validators.required,
      ]),
      desc: new FormControl(''),
    });

    this.productId = '0';
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId) {
      this.productService.getProduct(this.productId).subscribe(data => {
        // Gán giá trị cho form a
        this.productForm.patchValue({
          name: data.name,
          price: data.price,
          images: data.images,
          quantity: data.quantity,
          desc: data.desc
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
    console.log(this.productForm.get('name'));
    //1. lấy dwux liệu từ form
    const submitData = this.productForm.value;

    if (this.productId !== '0' || this.productId !== undefined) {
      this.productService.updateProduct(this.productId, submitData).subscribe(data => {
        this.router.navigateByUrl('/admin/products')
      })
    }
    //2. Call API ( Cần định nghĩa service và router điều hướng)

    return this.productService.createProduct(submitData).subscribe((data) => {
      //  3. Sau khi api call thành công sẽ điều hướng về danh sách 
      // this.router.navigate(['/admin','products']);
      this.toastr.success("Hello, I'm the toastr message.")
      this.router.navigateByUrl('/admin/products/list')
    })
  }
}



