import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartPageInfoComponent } from './start-page-info.component';

describe('StartPageInfoComponent', () => {
  let component: StartPageInfoComponent;
  let fixture: ComponentFixture<StartPageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartPageInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartPageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
