import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticDiogramBlockComponent } from './statistic-diogram-block.component';

describe('StatisticDiogramBlockComponent', () => {
  let component: StatisticDiogramBlockComponent;
  let fixture: ComponentFixture<StatisticDiogramBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticDiogramBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticDiogramBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
