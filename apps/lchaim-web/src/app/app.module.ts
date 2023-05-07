import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { authRoutes, AuthModule } from '@lchaim/auth';
import { MaterialModule } from '@lchaim/material';
import { LayoutModule} from '@lchaim/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent ],
  imports: [
    LayoutModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'homepage' },
        { path: 'auth', children: authRoutes },
        {
          path: 'accounts',
          loadChildren: () =>
            import('@lchaim/accounts-page').then(
              (m) => m.AccountsPageModule
            ),
        },
        {
          path: '',
          loadChildren: () =>
            import('@lchaim/public').then(
              (m) => m.PublicModule
            ),
        }
      ]
    ),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
