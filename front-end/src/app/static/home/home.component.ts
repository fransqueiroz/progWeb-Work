import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Sistema Banco FATEC de Oportunidades';

  constructor() { }

  ngOnInit(): void {
  }

}
