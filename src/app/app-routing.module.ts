import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInUpComponent } from './component/sign-in-up/sign-in-up.component';

const routes: Routes = [
  { path: '', component: SignInUpComponent },
  { path: 'browse', loadChildren:()=> import('./feature/feature.module').then(m => m.FeatureModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
