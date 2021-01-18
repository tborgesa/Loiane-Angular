import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheListaCursosComponent } from './detalhe-lista-cursos.component';

describe('DetalheListaCursosComponent', () => {
  let component: DetalheListaCursosComponent;
  let fixture: ComponentFixture<DetalheListaCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheListaCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheListaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
