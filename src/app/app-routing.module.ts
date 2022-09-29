import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: '', component: HomePageComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
