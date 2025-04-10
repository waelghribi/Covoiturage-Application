import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerieComponentComponent } from './messagerie-component.component';

describe('MessagerieComponentComponent', () => {
  let component: MessagerieComponentComponent;
  let fixture: ComponentFixture<MessagerieComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagerieComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagerieComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
