import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component'
import { UsersComponent } from './users/users.component'
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'users',component: UsersComponent},
  {path: 'about',component: AboutComponent},
  {path: 'portfolio',component: PortfolioComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'products',component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
