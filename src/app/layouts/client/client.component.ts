import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor() {
    const a = JSON.parse(localStorage.getItem('user') as string);

   }

  ngOnInit(): void {
  }

}
