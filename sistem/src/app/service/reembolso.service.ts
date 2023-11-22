import { criaReembolso } from './../models/criaReembolso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReembolsoService {


  constructor(private httpClient: HttpClient) { }

  public getReembolso():Observable<criaReembolso[]>{
    return this.httpClient.get<criaReembolso[]>(`${environment.api}reembolso`)
  }
  public getReembolsoId(id : number):Observable<criaReembolso>{
    return this.httpClient.get<criaReembolso>(`${environment.api}reembolso/${id}`)
  }
  public postReembolso(newReembolso : criaReembolso ):Observable<criaReembolso>{
    return this.httpClient.post<criaReembolso>(`${environment.api}reembolso`, newReembolso)
  }
}
