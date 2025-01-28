import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardProfPage } from './dashboard-prof.page';

describe('DashboardProfPage', () => {
  let component: DashboardProfPage;
  let fixture: ComponentFixture<DashboardProfPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
