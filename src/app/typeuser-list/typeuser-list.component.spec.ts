import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeuserListComponent } from './typeuser-list.component';

describe('TypeuserListComponent', () => {
  let component: TypeuserListComponent;
  let fixture: ComponentFixture<TypeuserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeuserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeuserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
