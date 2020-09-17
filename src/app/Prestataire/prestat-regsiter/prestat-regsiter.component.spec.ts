import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestatRegsiterComponent } from './prestat-regsiter.component';

describe('PrestatRegsiterComponent', () => {
  let component: PrestatRegsiterComponent;
  let fixture: ComponentFixture<PrestatRegsiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestatRegsiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestatRegsiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
