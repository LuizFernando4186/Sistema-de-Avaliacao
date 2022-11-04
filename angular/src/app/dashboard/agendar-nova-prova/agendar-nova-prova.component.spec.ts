import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarNovaProvaComponent } from './agendar-nova-prova.component';

describe('AgendarNovaProvaComponent', () => {
  let component: AgendarNovaProvaComponent;
  let fixture: ComponentFixture<AgendarNovaProvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarNovaProvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarNovaProvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
