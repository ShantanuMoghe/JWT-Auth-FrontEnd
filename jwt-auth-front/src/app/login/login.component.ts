import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide:boolean=true;
  constructor(private router:Router) { }
  user = new User();

  ngOnInit(): void {
    
  }

  onLoginClick(){
    console.log(this.user.username,this.user.password);
    this.router.navigateByUrl('/home')
  }

}
