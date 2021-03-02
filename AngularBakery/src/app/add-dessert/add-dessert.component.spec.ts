import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDessertComponent } from './add-dessert.component';

describe('AddDessertComponent', () => {
  let component: AddDessertComponent;
  let fixture: ComponentFixture<AddDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDessertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
