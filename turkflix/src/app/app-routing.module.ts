import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Account/login/login.component';
import { SigninComponent } from './Account/signin/signin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddComponent } from './Film/add/add.component';
import { EditComponent } from './Film/edit/edit.component';
import { FilmsComponent } from './Film/films/films.component';
import { ListComponent } from './Film/list/list.component';
import { FormComponent } from './form/form.component';
import { GuardGuard } from './guard.guard';
import { LayoutComponent } from'./Layout/layout.component';


const routes: Routes = [

  { path:'',redirectTo:'/login', pathMatch:'full'},
  { path:'signin',component:SigninComponent},
  { path:'login',component:LoginComponent},
  { path:'', canActivate:[GuardGuard], component:LayoutComponent, children:[
    { path:'accueil',component:AccueilComponent},
    { path:'film',component:FilmsComponent},
    { path:'list', component:ListComponent},
    { path:'add', component:AddComponent},
    { path:'edit/:filmId',component:EditComponent},
    { path:'form',component:FormComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
