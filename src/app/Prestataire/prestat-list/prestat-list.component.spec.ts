import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestatListComponent } from './prestat-list.component';

describe('PrestatListComponent', () => {
  let component: PrestatListComponent;
  let fixture: ComponentFixture<PrestatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestatListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
