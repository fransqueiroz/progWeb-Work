import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  location : string = '0'

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Capturando os parâmetros da rota
    let params = this.actRoute.snapshot.params

    // Existe um parâmetro chamado :location?
    if(params['location']) {
      this.location = params['location']
    } else {
      this.location =  '0'
    }
  }

}
