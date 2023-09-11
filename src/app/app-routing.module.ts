import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxModule } from './inbox/inbox.module';
import { loadmoduleGuard } from './auth/loadmodule.guard';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [
  {
    path: 'inbox',
    canMatch: [loadmoduleGuard],

    loadChildren: () =>
      import('./inbox/inbox.module').then((mod) => mod.InboxModule),
  },

  {
    path: 'inbox',

    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
