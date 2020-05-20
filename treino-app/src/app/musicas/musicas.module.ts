import { MusicaTabelaModule } from './musica-tabela/musica-tabela.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicaTabelaComponent } from './musica-tabela/musica-tabela.component';

@NgModule({
  declarations: [
    MusicaTabelaComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [MusicaTabelaComponent]
})
export class MusicasModule {

}
