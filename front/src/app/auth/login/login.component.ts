import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isSending: boolean = false;
  error?: string;

  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  onLogin(): void{
    this.isSending = true;
    this.authService.login( this.loginForm.value ).subscribe({
      next: ( resp ) => this.handleCorrectLogin( resp ),
      error: ( err ) => this.handleErrorLogin( err )
    })
  }

  handleCorrectLogin( _: any ){
    this.isSending = false;
  }
  handleErrorLogin( err: HttpErrorResponse ){
    this.isSending = false;
    if ( err.status === 401 ) {
      this.error = err.error.message || 'Invalid email or password';
    }else{
      this.error = 'Server error';
    }
  }
}
