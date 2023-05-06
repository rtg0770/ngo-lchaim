import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@lchaim/material';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import { AccountsPageComponent } from './accounts-page/accounts-page.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AccountsPageComponent },
    ]),],
  declarations: [
    AccountDetailComponent,
    AccountsListComponent,
    AccountsPageComponent,
  ],
})
export class AccountsPageModule {}
