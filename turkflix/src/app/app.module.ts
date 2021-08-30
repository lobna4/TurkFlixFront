import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './Film/add/add.component';
import { EditComponent } from './Film/edit/edit.component';
import { ListComponent } from './Film/list/list.component';
import { ServiceService } from './Service/service.service';
import { SigninComponent } from './Account/signin/signin.component';
import { LoginComponent } from './Account/login/login.component';
import { FilmsComponent } from './Film/films/films.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavBarComponent } from './Layout/nav-bar/nav-bar.component';
import { LayoutComponent } from './Layout/layout.component';
import { FormComponent } from './form/form.component';
import { InterceptorInterceptor } from './interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    SigninComponent,
    LoginComponent,
    FilmsComponent,
    AccueilComponent,
    NavBarComponent,
    LayoutComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi:true}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
