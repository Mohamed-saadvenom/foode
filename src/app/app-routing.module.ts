import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { CartpageComponent } from './cartpage/cartpage.component';
import { FoodpageComponent } from './foodpage/foodpage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartpageComponent },
  { path: 'food/:id', component: FoodpageComponent },
  { path: 'search/:searchitem', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
