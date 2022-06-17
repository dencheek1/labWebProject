import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticDataBlockComponent } from './statistic-data-block.component';

describe('StatisticDataBlockComponent', () => {
  let component: StatisticDataBlockComponent;
  let fixture: ComponentFixture<StatisticDataBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticDataBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticDataBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
