import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTrajetComponentComponent } from './liste-trajet-component.component';

describe('ListeTrajetComponentComponent', () => {
  let component: ListeTrajetComponentComponent;
  let fixture: ComponentFixture<ListeTrajetComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeTrajetComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeTrajetComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
