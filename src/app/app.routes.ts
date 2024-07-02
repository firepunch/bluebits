import { Routes } from '@angular/router';
import { PackageViewComponent } from './containers/package-view/package-view.component';

export const routes: Routes = [
  { path: '', redirectTo: 'package-view', pathMatch: 'full' },
  { path: 'package-view', component: PackageViewComponent },
];
