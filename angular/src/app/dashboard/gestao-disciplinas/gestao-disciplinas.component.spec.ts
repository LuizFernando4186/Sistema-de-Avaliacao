import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoDisciplinasComponent } from './gestao-disciplinas.component';

describe('GestaoDisciplinasComponent', () => {
  let component: GestaoDisciplinasComponent;
  let fixture: ComponentFixture<GestaoDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoDisciplinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
