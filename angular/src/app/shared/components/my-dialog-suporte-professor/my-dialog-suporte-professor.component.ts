import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Mensagem } from 'src/app/model/mensagem';



@Component({
  selector: 'app-my-dialog-suporte-professor',
  templateUrl: './my-dialog-suporte-professor.component.html',
  styleUrls: ['./my-dialog-suporte-professor.component.css']
})
export class MyDialogSuporteProfessorComponent implements OnInit {

  msg = new Mensagem();

  constructor(
    private snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {}

  public onSucess() {
    this.router.navigate(['login']);
    this.snackBar.open('Saiu com sucesso!', '', {duration: 3000});
  }

  public onError() {
    this.snackBar.open('Erro ao Adicionar Descrição.', '', { duration: 3000 });
  }



}
