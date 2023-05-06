import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MaterialModule } from '@lchaim/material';
import { ReactiveFormsModule } from '@angular/forms';

export const authRoutes: Route[] = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'login', pathMatch: 'full', component: LoginComponent },
    ]),],
  declarations: [LoginComponent, LoginFormComponent]
})
export class AuthModule {}