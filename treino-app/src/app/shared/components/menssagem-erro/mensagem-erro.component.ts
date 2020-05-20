import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-menssagem-erro',
  templateUrl: './mensagem-erro.component.html',
  styleUrls: ['./mensagem-erro.component.css']
})
export class MensagemErroComponent {

  @Input() exibir: boolean;
  @Input() mensagem = 'Ocorreu algum erro';
  @Output() clickLink: EventEmitter<any> = new EventEmitter();

}
