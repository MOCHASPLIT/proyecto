import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loading: boolean = false;


  constructor(private toastr: ToastrService,
    private _userService:UserService,
    private router:Router,
    private _errorService:ErrorService){
    
  }
  ngOnInit(): void {
      
  }

  login(){

    if (this.username == '' || this.password == '') {
      this.toastr.error('Todos los campos son obligatorios', 'Error');
      return;
    }

    const user:User ={
      username: this.username,
      password: this.password
    }

    this.loading = true;
    console.log(this.loading);
    

    this._userService.login(user).subscribe({
      next: (token)=>{
        this.loading = false;
        localStorage.setItem('token', token)      
        this.router.navigate(['/dashboard'])
      },
      error: (e: HttpErrorResponse) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
    })
  }
}
