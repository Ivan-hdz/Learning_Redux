import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginActions} from './login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private store: Store, private router: Router) {
    this.form = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }
  submit(): void {
    console.log(this.form.getRawValue())
    this.store.dispatch(LoginActions.login(this.form.getRawValue()));
    this.router.navigate(['/dashboard']);
  }

}
