import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@lchaim/shared-services';
import { User } from '@lchaim/data-models';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'lchaim-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
  user$!: Observable<User | null>;
  linksUser = [
    { path: 'accounts', label: 'Accounts', icon: 'manage-accounts' },
  ];
  title = 'L`Chaim';
  links = [
    { path: 'homepage', label: 'Homepage', icon: 'home' },
    { path: 'about-us', label: 'About Us', icon: 'diversity' },
    { path: 'services', label: 'Services', icon: 'heart' },
    { path: 'volunteers', label: 'Volunteers', icon: 'light-bulb' },
    { path: 'donations', label: 'Donations', icon: 'redeem' },
    { path: 'contacts', label: 'Contacts', icon: 'contacts' },
  ];

  constructor(private authService: AuthService) {}
  isMobile(): boolean {
    return window.innerWidth < 776;
  }
  ngOnInit(): void {
    this.user$ = this.authService.user$;

    switch (true) {
      case window.location.href.includes('/auth/login'):
        this.sidenav.close();
        break;
      case window.location.href.includes('/about-us'):
        this.sidenav.close();
        break;
      case window.location.href.includes('/services'):
        this.sidenav.close();
        break;
      default:
        break;
    }
  }
}
