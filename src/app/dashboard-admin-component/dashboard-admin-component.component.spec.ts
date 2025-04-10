import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdminComponentComponent } from './dashboard-admin-component.component';

describe('DashboardAdminComponentComponent', () => {
  let component: DashboardAdminComponentComponent;
  let fixture: ComponentFixture<DashboardAdminComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardAdminComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAdminComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
