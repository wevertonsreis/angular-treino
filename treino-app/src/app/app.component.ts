import { MusicaService } from './musicas/musica/musica.service';
import { Musica } from './musicas/musica/musica';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  musicas: Musica[] = [];
  exibirCarregamento = true;
  exibirMensagemErro = false;

  constructor(
    private musicaService: MusicaService
  ) {}

  ngOnInit(): void {
    this.carregarMusicas();
  }

  carregarMusicas() {
    this.exibirCarregamento = true;
    this.exibirMensagemErro = false;
    this.musicaService.buscarMusicas()
    .subscribe(musicas => {
      for (let i = 0; i < 5000; i++) {
        console.info(i);
      }

      this.musicas = musicas;
      this.exibirCarregamento = false;
    }, erro => {
      for (let i = 0; i < 5000; i++) {
        console.info(i);
      }
      this.exibirMensagemErro = true;
      this.exibirCarregamento = false;
    });

  }

}
