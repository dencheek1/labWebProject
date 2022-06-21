import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DierySelectFoodBlockComponent } from './diery-select-food-block.component';

describe('DierySelectFoodBlockComponent', () => {
  let component: DierySelectFoodBlockComponent;
  let fixture: ComponentFixture<DierySelectFoodBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DierySelectFoodBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DierySelectFoodBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
