import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeConducteurComponentComponent } from './liste-conducteur-component.component';

describe('ListeConducteurComponentComponent', () => {
  let component: ListeConducteurComponentComponent;
  let fixture: ComponentFixture<ListeConducteurComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeConducteurComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeConducteurComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
