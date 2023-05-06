import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'lchaim-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  title = 'L`Chaim web';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    ) {
    this.matIconRegistry.addSvgIcon(
      'menu',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/menu_FILL0_wght200_GRAD0_opsz24.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'manage-accounts',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/manage_accounts_FILL0_wght200_GRAD0_opsz24 1.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'home',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/home_FILL0_wght200_GRAD0_opsz24 1.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'diversity',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/diversity_1_FILL0_wght200_GRAD0_opsz24.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'heart',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/heart_plus_FILL0_wght200_GRAD0_opsz24.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'light-bulb',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/lightbulb_FILL0_wght200_GRAD0_opsz24.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'contacts',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/call_FILL0_wght200_GRAD0_opsz24.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'redeem',
      this.domSanitizer.bypassSecurityTrustResourceUrl('/assets/icons/redeem_FILL0_wght200_GRAD0_opsz24.svg')
    );
  }
}
