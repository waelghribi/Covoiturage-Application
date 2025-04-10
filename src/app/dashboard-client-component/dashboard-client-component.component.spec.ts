import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClientComponentComponent } from './dashboard-client-component.component';

describe('DashboardClientComponentComponent', () => {
  let component: DashboardClientComponentComponent;
  let fixture: ComponentFixture<DashboardClientComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardClientComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardClientComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
