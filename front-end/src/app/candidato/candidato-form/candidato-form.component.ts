import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../candidato.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-candidato-form',
  templateUrl: './candidato-form.component.html',
  styleUrls: ['./candidato-form.component.scss']
})
export class CandidatoFormComponent implements OnInit {

  title: string = 'Novo candidato'

  candidato : any = {}   // Objeto vazio

  constructor(
    private candidatoSrv : CandidatoService,
    private snackBar: MatSnackBar,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    // Capturando os parâmetros da rota
    let params = this.actRoute.snapshot.params

    // Existe um parâmetro chamado :id?
    if(params['id']) {
      // É caso de atualização. É necesário consultar o back-end
      // para recuperar o registro e colocá-lo para edição
      try {
        this.candidato = await this.candidatoSrv.obterUm(params['id'])
        this.title = 'Atualizando candidato'
      }
      catch(erro) {
        this.snackBar.open(erro.message, 'Que pena!', {duration: 5000})
      }
    }
  
  }

  voltar(x) {
    this.router.navigate(['/dashboard/2'])
  }

  async salvar(form: NgForm) {
    // Só tenta salvar se o form for válido
    if(form.valid) {
      try {
        let msg = 'Candidato atualizado com sucesso.'
        // Se existir o campo _id, é caso de atualização
        if(this.candidato._id) {
          await this.candidatoSrv.atualizar(this.candidato)
        }
        // Senão, é caso de criar um novo fornecedor
        else {
          await this.candidatoSrv.novo(this.candidato)
          msg = 'candidato criado com sucesso.'
        }
        // Dá o feedback para o usuário
        this.snackBar.open(msg, 'Entendi', {duration: 5000})
        // Voltar à listagem
        this.router.navigate(['/dashboard/2'])
      }
      catch(erro) {
        this.snackBar.open(erro.message, 'Que pena!', {duration: 5000})
      }
    }
  }

}
