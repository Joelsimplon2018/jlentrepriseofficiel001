import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestatDeatilsComponent } from './prestat-deatils.component';

describe('PrestatDeatilsComponent', () => {
  let component: PrestatDeatilsComponent;
  let fixture: ComponentFixture<PrestatDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestatDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestatDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
