import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carregamento',
  templateUrl: './carregamento.component.html',
  styleUrls: ['./carregamento.component.css']
})
export class CarregamentoComponent {

  @Input() exibir: boolean;

}
