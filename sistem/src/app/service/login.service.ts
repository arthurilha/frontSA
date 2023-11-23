import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpClient: HttpClient) { }

public getLoginAdmin(nome: string, senha: string): Observable<login> {
  const params = { nome, senha };
  
  return this.httpClient.get<login>(`${environment.api}gerente/login`, { params });
}

public getLoginFunc(nome: string, senha: string): Observable<login> {
  const params = { nome, senha };
  
  return this.httpClient.get<login>(`${environment.api}funcionario/login`, { params });
}

}
