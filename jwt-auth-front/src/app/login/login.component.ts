import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

}
