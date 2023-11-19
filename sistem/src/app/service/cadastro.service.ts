import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { cadastro } from '../models/cadastro';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {


  constructor(private httpClient: HttpClient) { }

  public postCadGerente(newUser : cadastro ):Observable<cadastro>{
    return this.httpClient.post<cadastro>(`${environment.api}cadastrarGerente`, newUser)

  }

  public postCadFuncionario(newUser : cadastro ):Observable<cadastro>{
    return this.httpClient.post<cadastro>(`${environment.api}cadastrarFuncionario`, newUser)

  }
}
