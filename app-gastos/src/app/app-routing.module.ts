import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GastosListComponent} from "./components/gastos-list/gastos-list.component";
import {HomeComponent} from "./components/home/home.component";
import {GastoCreateComponent} from "./components/gasto-create/gasto-create.component";

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch: 'full'},
  {path:'gastos',component:GastosListComponent},
  {path:'home',component:HomeComponent},
  {path:'create',component:GastoCreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
