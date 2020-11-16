import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {DashboardActions} from './dashboard.actions';
import {Observable, of} from 'rxjs';
import {UserModel} from '../shared/classes/UserModel';
import {AppModel} from '../shared/classes/AppState';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  form: FormGroup;
  nombre: string;
  constructor(private store: Store<AppModel>, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.nombre = '';
  }

  ngOnInit(): void {
    this.store.select('user').subscribe((user) => {
      this.nombre = user?.name;
    });
  }

  cambiarNombre(): void {
    this.store.dispatch(DashboardActions.changeName(this.form.getRawValue()));
  }

  logout(): void {
    this.store.dispatch(DashboardActions.logout());
    this.router.navigate(['/login']);
  }
}
