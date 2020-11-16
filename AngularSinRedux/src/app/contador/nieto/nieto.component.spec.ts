/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NietoComponent } from './nieto.component';

describe('NietoComponent', () => {
  let component: NietoComponent;
  let fixture: ComponentFixture<NietoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NietoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NietoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
