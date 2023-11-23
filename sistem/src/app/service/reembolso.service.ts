import { criaReembolso } from './../models/criaReembolso';
import { relatorio } from './../models/relatorio';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReembolsoService {


  constructor(private httpClient: HttpClient) { }

  public getReembolso():Observable<criaReembolso[]>{
    return this.httpClient.get<criaReembolso[]>(`${environment.api}funcionario/reembolso`)
  }
  public getReembolsoTodos():Observable<criaReembolso[]>{
    return this.httpClient.get<criaReembolso[]>(`${environment.api}gerente/reembolso`)
  }
  public getReembolsoId(id : number):Observable<criaReembolso>{
    return this.httpClient.get<criaReembolso>(`${environment.api}funcionario/reembolso/${id}`)
  }
  public getRelatorio(inicio: number, fim: number): Observable<relatorio> {
    const params = { inicio, fim };
    return this.httpClient.get<relatorio>(`${environment.api}gerente/reembolso/relatorio`, {params});
  }
  public postReembolso(newReembolso : criaReembolso ):Observable<criaReembolso>{
    return this.httpClient.post<criaReembolso>(`${environment.api}funcionario/reembolso`, newReembolso)
  }
  public patchReembolsoA(newReembolso : criaReembolso ):Observable<criaReembolso>{
    return this.httpClient.patch<criaReembolso>(`${environment.api}gerente/reembolso/aprovar/${newReembolso.id}`, newReembolso)
  }
  public patchReembolsoR(newReembolso : criaReembolso ):Observable<criaReembolso>{
    return this.httpClient.patch<criaReembolso>(`${environment.api}gerente/reembolso/reprovar/${newReembolso.id}`, newReembolso)
  }
}
