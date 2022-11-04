import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, Observable, tap } from 'rxjs';

import { AuthService } from './auth.service';
import { Login } from '../model/login';
import { Usuario } from '../model/usuario';
import { ProvasRealizadas } from '../model/provas-realizadas';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private readonly API_PESSOAS = '/assets/pessoas.json';
  private readonly API_POST = '/assets/posts.json';
  private readonly API_CADASTRO = '/assents/cadastro.json';
  private readonly API_LIST_PROVAS = '../assets/provas.json';
  
  LS_CHAVE: string = "usuarioLogado";

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  //efetua o login, buscando no banco
  public login(request: Login): Observable<Usuario> {
    const api = '../../assets/login.json';
    return this.httpClient.get<Usuario>(api).pipe(
      tap((loginResponse) => (this.authService.loginResponse = loginResponse, this.salvarSessionStorage(loginResponse)))
    );


  }

  //retorna o usuario logado
  public get usuarioLogado(): Usuario {
    let usu = sessionStorage.getItem(this.LS_CHAVE);
    return (usu ? JSON.parse(usu) : null);
  }

  public set usuarioLogado(usuario: Usuario) {

    localStorage[this.LS_CHAVE] = JSON.stringify(usuario);
  }

  //remove o usuario do registro
  logout() {
    sessionStorage.clear();
    delete localStorage[this.LS_CHAVE];
  }

  public salvarSessionStorage(usuario: Usuario) {
    sessionStorage.setItem(this.LS_CHAVE, JSON.stringify(usuario));
  }


  //para o rank
  public listPessoas() {
    return this.httpClient.get<any[]>(this.API_PESSOAS).pipe(
      first(),
      delay(1000),
      tap(pessoas => console.log(pessoas))
    );
  }


  //carregar os posts de todos os usuarios
  public listPost() {
    return this.httpClient.get<any[]>(this.API_POST).pipe(
      first(),
      delay(1000),
      tap(diagnosticos => console.log(diagnosticos))
    );
  }


  save(record: Usuario) {
    console.log(record);
    return this.httpClient.post<Usuario>(this.API_CADASTRO, record).pipe(first());
  }


  public listProvasRealizadas() {
    return this.httpClient.get<ProvasRealizadas[]>(this.API_LIST_PROVAS).pipe(
      first(),
      tap(provas => console.log(provas))
    );
  }


}
