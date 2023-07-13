import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/auth/interfaces/user';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  user?: User;
  menuIsOpen: boolean = false;
  menuCloseIcon = faBars;
  menuOpenIcon = faClose;

  private authService = inject( AuthService );
  private router = inject(Router);

  ngOnInit(): void {
      this.user = this.authService.user;
  }

  toggleMenu(): void{
    this.menuIsOpen = !this.menuIsOpen;
  }

  logout(): void{
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
