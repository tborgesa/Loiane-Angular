import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { DetalheListaCursosComponent } from './detalhe-lista-cursos/detalhe-lista-cursos.component';

@NgModule({
  declarations: [
    ListaCursosComponent,
    DetalheListaCursosComponent
  ],
  imports : [
    CommonModule
  ],
  exports: [
    ListaCursosComponent
  ]
})
export class CursosModule { }
