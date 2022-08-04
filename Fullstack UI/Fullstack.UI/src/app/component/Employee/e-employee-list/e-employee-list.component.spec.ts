import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEmployeeListComponent } from './e-employee-list.component';

describe('EEmployeeListComponent', () => {
  let component: EEmployeeListComponent;
  let fixture: ComponentFixture<EEmployeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEmployeeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
