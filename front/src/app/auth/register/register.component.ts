import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { inject } from '@angular/core'
import { AuthService } from '../auth.service';
import { AuthRegister } from '../interfaces/auth-register';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  isSending: boolean = false;
  error?: string;

  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(){
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") ]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required,this.matchPasswordValidator ])
    });
  }

  matchPasswordValidator = (): { [key: string]: boolean } | null => {
    const password = this.registerForm?.get('password');
    const confirmPassword = this.registerForm?.get('confirmPassword');


    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'mismatch': true };
    }
    return null;
  }

  onRegister(): void {
    this.isSending = true;
    const { confirmPassword, ...rest } =  this.registerForm.value;

    this.authService.register( rest ).subscribe({
      next: ( resp ) => this.handleCorrectRegister( resp ),
      error: ( err ) => this.handleRegisterError( err )
    });
  }

  handleCorrectRegister( _: any ){
    this.isSending = false;
    this.router.navigateByUrl('/posts/all-posts');
  }
  handleRegisterError( err: HttpErrorResponse ){
    this.isSending = false;
    if ( err.status === 422) {
      this.error = err.error.message || 'Server error';
    }else{
      this.error = 'Server error';
    }

  }
}
