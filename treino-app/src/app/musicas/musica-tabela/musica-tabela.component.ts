import { Component, OnInit, Input } from '@angular/core';
import { Musica } from '../musica/musica';
import { MusicaService } from '../musica/musica.service';

@Component({
    selector: 'app-musica-tabela',
    templateUrl: './musica-tabela.component.html',
    styleUrls: ['./musica-tabela.component.css']
})
export class MusicaTabelaComponent {

  @Input() musicas: Musica[] = [];

}
