import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './component/browse/browse.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BrowseComponent },
];


@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Add this
  ]
})
export class FeatureModule { }
