import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumaComponent } from './suma.component';

describe('SumaComponent', () => {
  let component: SumaComponent;
  let fixture: ComponentFixture<SumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SumaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
