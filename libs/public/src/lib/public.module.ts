import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { DonationsComponent } from './donations/donations.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@lchaim/material';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: 'homepage', pathMatch: 'full', component: HomepageComponent },
      { path: 'donations', pathMatch: 'full', component: DonationsComponent },
      { path: 'services', pathMatch: 'full', component: ServicesComponent },
      { path: 'about-us', pathMatch: 'full', component: AboutUsComponent },
      { path: 'volunteers', pathMatch: 'full', component: VolunteersComponent },
      { path: 'contacts', pathMatch: 'full', component: ContactsComponent },
    ]),
  ],
  declarations: [
    HomepageComponent,
    DonationsComponent,
    ServicesComponent,
    AboutUsComponent,
    VolunteersComponent,
    ContactsComponent
  ],
})
export class PublicModule {}
