import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesrtsComponent } from './desrts.component';

describe('DesrtsComponent', () => {
  let component: DesrtsComponent;
  let fixture: ComponentFixture<DesrtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesrtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesrtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
