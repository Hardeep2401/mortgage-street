import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizeGuard } from 'src/app/guards/authorize.guard';
import { DefaultLayoutComponent } from 'src/app/shared/layout/default-layout/default-layout.component';
import { UserLayoutComponent } from 'src/app/shared/layout/user-layout/user-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [{ path: 'home', component: HomeComponent, title: 'Home' }],
  },
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, title: 'Dashboard' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
