import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DierySearchBlockComponent } from './diery-search-block.component';

describe('DierySearchBlockComponent', () => {
  let component: DierySearchBlockComponent;
  let fixture: ComponentFixture<DierySearchBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DierySearchBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DierySearchBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
