import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthChildGuard } from './auth-child.service';
import { AuthGaurd } from './auth-guard.service';
import { DesrtsComponent } from './desrts/desrts.component';
import { HomeComponent } from './home/home.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { VegComponent } from './veg/veg.component';

const routes: Routes = [
  {
    path: 'home-component',
    component: HomeComponent,
    canActivateChild: [AuthChildGuard],
    children: [
      {
        path: 'edit/:category:/:id',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'veg-component/:category',
    canActivate: [AuthGaurd],
    component: VegComponent,
  },
  { path: 'Nonveg-component/:category', component: NonvegComponent },
  { path: 'Desert-component/:category', component: DesrtsComponent },
  { path: '**', redirectTo: '/home-component' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
