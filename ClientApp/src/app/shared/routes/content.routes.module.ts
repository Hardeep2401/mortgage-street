import { Routes } from '@angular/router';
export const content: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../../pages/user/user.module').then((c) => c.UserModule),
  },
];
