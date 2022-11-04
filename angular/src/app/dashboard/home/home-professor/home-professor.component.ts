import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-home-professor',
  templateUrl: './home-professor.component.html',
  styleUrls: ['./home-professor.component.css']
})
export class HomeProfessorComponent implements OnInit {

  @Input() usuario: Usuario = new Usuario();

  constructor() { }

  ngOnInit(): void {
  }

}
