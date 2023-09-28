import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainUserComponent } from './main-user/main-user.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'main-user', component: MainUserComponent },
  { path: 'main-product', component: MainProductComponent },
  { path: 'main-provider', component: MainProviderComponent },
  { path: '**', component: NotFoundPageComponent }, // Catch-all route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
