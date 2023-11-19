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

  public getLoginAdmin(requestLogin: login):Observable<login>{
    return this.httpClient.post<login>(`${environment.api}cadastrarGerente`, requestLogin )
}


public getLoginFunc(requestLogin: login):Observable<login>{
  return this.httpClient.post<login>(`${environment.api}cadastrarFuncionario`, requestLogin )
}

}
