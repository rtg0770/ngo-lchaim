import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export { AuthService} from './services/auth/auth.service';

@NgModule({
  imports: [CommonModule],
})
export class SharedServicesModule {}
