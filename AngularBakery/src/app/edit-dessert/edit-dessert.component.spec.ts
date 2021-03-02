import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDessertComponent } from './edit-dessert.component';

describe('EditDessertComponent', () => {
  let component: EditDessertComponent;
  let fixture: ComponentFixture<EditDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDessertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
