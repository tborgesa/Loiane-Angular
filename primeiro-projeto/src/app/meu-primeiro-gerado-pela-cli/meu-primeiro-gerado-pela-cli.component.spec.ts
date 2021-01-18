import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroGeradoPelaCliComponent } from './meu-primeiro-gerado-pela-cli.component';

describe('MeuPrimeiroGeradoPelaCliComponent', () => {
  let component: MeuPrimeiroGeradoPelaCliComponent;
  let fixture: ComponentFixture<MeuPrimeiroGeradoPelaCliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeuPrimeiroGeradoPelaCliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuPrimeiroGeradoPelaCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
