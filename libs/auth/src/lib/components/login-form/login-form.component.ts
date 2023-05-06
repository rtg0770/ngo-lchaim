import { Component, EventEmitter, Output } from '@angular/core';
import { Authenticate} from '@lchaim/data-models';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lchaim-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {

  @Output() submitForm = new EventEmitter<Authenticate>();

  loginForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    }
  );
  
  login() {
    const username = this.loginForm.value.username ?? '';
    const password = this.loginForm.value.password ?? '';
    const credentials: Authenticate = { username, password };
    this.submitForm.emit(credentials);
  }  
  
}
