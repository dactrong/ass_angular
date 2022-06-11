import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm:FormGroup;
  constructor(
    private authService:AuthService,
    private router:Router,
  ) {

    this.loginForm = new FormGroup({
      email:new FormControl('',Validators.email),
      password: new FormControl('')
    })
   }

  ngOnInit(): void {
  }
  onSubmit() {
    //  1.nhận dwuj liệu từ form và call API login
    this.authService.login(this.loginForm.value).subscribe(data =>{
      //2. Lưu thông tin vào localStarage setItem(ten key lưu vào ls, dwux liệu string)
      localStorage.setItem('loggedInUser',JSON.stringify(data));
      // localStorage.getItem('loggedInUser').subscribe
      //3. Di chuyển về màn Admin/products
       this.router.navigateByUrl('/admin/dashboard')
    });
   
  }

}
