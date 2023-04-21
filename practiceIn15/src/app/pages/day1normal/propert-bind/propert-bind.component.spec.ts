import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertBindComponent } from './propert-bind.component';

describe('PropertBindComponent', () => {
  let component: PropertBindComponent;
  let fixture: ComponentFixture<PropertBindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertBindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
