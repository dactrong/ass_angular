import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/types/auth';

@Component({
  selector: 'app-auth-list',
  templateUrl: './auth-list.component.html',
  styleUrls: ['./auth-list.component.css']
})
export class AuthListComponent implements OnInit {
   user: User[];
  constructor(
    private userService: AuthService,
  ) {
    this.user=[];
   }

  ngOnInit(): void {
    this.userService.getAuth().subscribe((data) =>{
      this.user = data;
     });
  }

}
