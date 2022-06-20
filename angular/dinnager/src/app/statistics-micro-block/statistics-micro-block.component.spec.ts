import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsMicroBlockComponent } from './statistics-micro-block.component';

describe('StatisticsMicroBlockComponent', () => {
  let component: StatisticsMicroBlockComponent;
  let fixture: ComponentFixture<StatisticsMicroBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsMicroBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatisticsMicroBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
