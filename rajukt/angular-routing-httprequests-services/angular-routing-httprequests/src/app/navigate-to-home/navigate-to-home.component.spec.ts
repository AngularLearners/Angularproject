import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateToHomeComponent } from './navigate-to-home.component';

describe('NavigateToHomeComponent', () => {
  let component: NavigateToHomeComponent;
  let fixture: ComponentFixture<NavigateToHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateToHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigateToHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
