import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationComponent } from './formation.component';

describe('FormationComponent', () => {
  let component: FormationComponent;
  let fixture: ComponentFixture<FormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
  });
});
