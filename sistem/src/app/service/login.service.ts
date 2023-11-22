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

  public getLoginAdmin():Observable<any>{
    return this.httpClient.get<any>(`${environment.api}cadastrarGerente` )
}


public getLoginFunc():Observable<any>{
  return this.httpClient.get<any>(`${environment.api}cadastrarFuncionario`)
}

}
