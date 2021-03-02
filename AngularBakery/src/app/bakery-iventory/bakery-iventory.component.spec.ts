import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryIventoryComponent } from './bakery-iventory.component';

describe('BakeryIventoryComponent', () => {
  let component: BakeryIventoryComponent;
  let fixture: ComponentFixture<BakeryIventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakeryIventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryIventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
