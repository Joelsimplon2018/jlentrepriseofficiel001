import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestatProfilComponent } from './prestat-profil.component';

describe('PrestatProfilComponent', () => {
  let component: PrestatProfilComponent;
  let fixture: ComponentFixture<PrestatProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestatProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestatProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
