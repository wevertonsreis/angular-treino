import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Musica } from './musica';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  constructor(
    private httpClient: HttpClient
  ) {}

  buscarMusicas(): Observable<Musica[]> {
    return this.httpClient.get<Musica[]>('/assets/musicas.json');
  }

}
