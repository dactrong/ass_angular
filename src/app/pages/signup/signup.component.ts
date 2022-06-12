import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  signupId: string;
  constructor(
    private authService: AuthService, // cung cấp product
    private router: Router, // cung cấp navigate điều hướng
    private activatedRoute: ActivatedRoute// lấy ra các tham số trong url
  ) {
    this.signupForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(32),
        // this.onValidateNameHasProduct // tên custom validate
      ]),
      email: new FormControl('', [
        Validators.required,
      ]),
      phone: new FormControl('', [
        Validators.required,
      ]),
      address: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('',[
        Validators.required,

      ])
    });

    this.signupId = '0';
   }

  ngOnInit(): void {
  
  }
  onSubmit() {
    const submitData = this.signupForm.value;
    this.authService.createUser(submitData).subscribe((data) => {
      //  3. Sau khi api call thành công sẽ điều hướng về danh sách 
      // this.router.navigate(['/admin','products']);
      // this.toastr.success("Hello, I'm the toastr message.")
      this.router.navigateByUrl('/auth/signin')
    })
  }

}
