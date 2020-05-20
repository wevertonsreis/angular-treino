import { MusicasModule } from './musicas/musicas.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MensagemErroModule } from './shared/components/menssagem-erro/mensagem-erro.module';
import { CarregamentoModule } from './shared/components/carregamento/carregamento.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MensagemErroModule,
    CarregamentoModule,
    MusicasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
