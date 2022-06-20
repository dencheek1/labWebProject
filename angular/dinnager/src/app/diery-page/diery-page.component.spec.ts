import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieryPageComponent } from './diery-page.component';

describe('DieryPageComponent', () => {
  let component: DieryPageComponent;
  let fixture: ComponentFixture<DieryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
