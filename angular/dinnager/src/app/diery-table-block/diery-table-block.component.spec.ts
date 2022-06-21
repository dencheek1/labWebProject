import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieryTableBlockComponent } from './diery-table-block.component';

describe('DieryTableBlockComponent', () => {
  let component: DieryTableBlockComponent;
  let fixture: ComponentFixture<DieryTableBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieryTableBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DieryTableBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
