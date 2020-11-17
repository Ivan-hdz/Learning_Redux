import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import {StoreModule} from '@ngrx/store';
import {reducer} from './store/reducer/login-page.reducer';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CredentialsStateKey} from '../shared/states/CredentialsState';


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('CredentialsStateKey', reducer),
    FormsModule,
    ReactiveFormsModule,
    LoginPageRoutingModule
  ]
})
export class LoginPageModule { }
