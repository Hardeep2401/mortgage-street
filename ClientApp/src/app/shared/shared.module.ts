import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ApiAuthorizationModule } from '../pages/auth/api-authorization.module';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    UserLayoutComponent,HeaderComponent, FooterComponent
  ], imports: [
    CommonModule,
    RouterModule,
    ApiAuthorizationModule,
    NgbCollapseModule
  ],
})
export class SharedModule { }
