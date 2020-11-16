import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({},
      {
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        },
      }),
    // StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    StoreDevtoolsModule.instrument({ maxAge: 100, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
