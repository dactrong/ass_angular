import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  ) {

    this.loginForm = new FormGroup({
      email:new FormControl('',Validators.email),
      password: new FormControl('')
    })
   }

  ngOnInit(): void {
  }
  onSubmit() {
   
    this.authService.login(this.loginForm.value).subscribe(data =>{
      console.log(data);
      
    });
   
  }

}
