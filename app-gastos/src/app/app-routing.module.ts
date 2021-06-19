import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GastosListComponent} from "./components/gastos-list/gastos-list.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'gastos-list',component:GastosListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
