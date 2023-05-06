import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import { AuthService } from '@lchaim/shared-services';
import { Authenticate } from '@lchaim/data-models';
import { Router } from '@angular/router';

@Component({
  selector: 'lchaim-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit() {}

  login(credentials: Authenticate) {
    this.authService.login(credentials).subscribe(
      (user) => {
        // Navigate to accounts page
        this.router.navigate(['/accounts']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
