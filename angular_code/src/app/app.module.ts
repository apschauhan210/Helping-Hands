import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelperRegistrationComponent } from './helper-registration/helper-registration.component';
import { FindHelperComponent } from './find-helper/find-helper.component';
import { MainComponent } from './main/main.component';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { HelperLoginComponent } from './helper-login/helper-login.component';
import { ClientLoginComponent } from './client-login/client-login.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { HelperProfileComponent } from './helper-profile/helper-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HelperRegistrationComponent,
    FindHelperComponent,
    MainComponent,
    ClientRegistrationComponent,
    HelperLoginComponent,
    ClientLoginComponent,
    ClientProfileComponent,
    HelperProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'helpingHands', component: MainComponent},
      { path: 'addhelper', component: HelperRegistrationComponent},
      { path: 'findhelper', component: FindHelperComponent},
      { path: 'addclient', component: ClientRegistrationComponent},
      { path: 'helperlogin', component: HelperLoginComponent},
      { path: 'clientlogin', component: ClientLoginComponent},
      { path: 'helperprofile', component: HelperProfileComponent},
      { path: 'clientprofile', component: ClientProfileComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
