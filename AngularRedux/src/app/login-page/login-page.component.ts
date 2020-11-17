import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {AppState} from '../shared/states/AppState';
import * as loginPageActions from './store/action/login-page.actions';
import {Observable} from 'rxjs';
import {CredentialsState} from '../shared/states/CredentialsState';
import {selectCredentialsState, selectUsername} from '../shared/store/selector/CredentialsState.selector';
import {loadCredentialsStates} from '../shared/store/action/credentials-state.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  credentials$: Observable<CredentialsState>;
  username$: Observable<string>;
  constructor(private store: Store) {
    this.form = new FormGroup({
      usuario: new FormControl('', Validators.required),
      contrasena: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.username$ = this.store.pipe(select(selectUsername));
  }
  submit(): void {
    if (this.form.valid) {
      this.store.dispatch(loginPageActions.login(this.form.getRawValue()));
      this.store.dispatch(loadCredentialsStates());
    }
  }

}
