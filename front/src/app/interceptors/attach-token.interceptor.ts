import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable()
export class AttachTokenInterceptor implements HttpInterceptor {
  private authService = inject( AuthService );

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.authService.getToken();

    if ( token ) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${ token }`
        }
      });
    }

    return next.handle( request );
  }
}
