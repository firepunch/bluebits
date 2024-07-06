import { Routes } from '@angular/router';
import { PackageViewPage } from './containers/package-view/package-view.page';

export const routes: Routes = [
  { path: '', redirectTo: 'package-view', pathMatch: 'full' },
  { path: 'package-view', component: PackageViewPage },
];
