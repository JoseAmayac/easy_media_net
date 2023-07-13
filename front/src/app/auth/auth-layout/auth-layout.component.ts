import { Component, OnInit, inject } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit{
  private router: Router = inject(Router);
  currentChild: string = 'register';

  ngOnInit(): void {
    this.setCurrentChild( this.router.url );
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationStart),
        map((event: any) => ( event as NavigationStart).url)
      )
      .subscribe((url: string) => this.setCurrentChild( url ) )

  }

  setCurrentChild(child: string){
    if ( child.includes('login')) {
      this.currentChild = 'login';
    }else{
      this.currentChild = 'register';
    }
  }
}
