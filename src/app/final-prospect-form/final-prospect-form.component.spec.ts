import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalProspectFormComponent } from './final-prospect-form.component';

describe('FinalProspectFormComponent', () => {
  let component: FinalProspectFormComponent;
  let fixture: ComponentFixture<FinalProspectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalProspectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalProspectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
