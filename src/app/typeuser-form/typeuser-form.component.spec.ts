import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeuserFormComponent } from './typeuser-form.component';

describe('TypeuserFormComponent', () => {
  let component: TypeuserFormComponent;
  let fixture: ComponentFixture<TypeuserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeuserFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeuserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
