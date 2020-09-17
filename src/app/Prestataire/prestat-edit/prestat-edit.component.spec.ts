import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestatEditComponent } from './prestat-edit.component';

describe('PrestatEditComponent', () => {
  let component: PrestatEditComponent;
  let fixture: ComponentFixture<PrestatEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestatEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
