import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../curriculo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CandidatoService } from '../../candidato/candidato.service';

@Component({
  selector: 'app-curriculo-form',
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.scss']
})
export class CurriculoFormComponent implements OnInit {

  title: string = 'Novo Currículo'

  curriculo : any = {}   // Objeto vazio

  // Entidades relacionadas
  candidatos : any = []   // Vetor vazio


  constructor(
    private curriculoSrv : CurriculoService,
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
        this.curriculo = await this.curriculoSrv.obterUm(params['id'])
        this.title = 'Atualizando curriculo'
      }
      catch(erro) {
        this.snackBar.open(erro.message, 'Que pena!', {duration: 5000})
      }
    }

    // Entidades relacionadas
    try {
      this.candidatos = await this.candidatoSrv.listar()
    }
    catch(erro) {
      this.snackBar.open(erro.message, 'Que pena!', {duration: 5000})  
    }
  
  }

  voltar(x) {
    this.router.navigate(['/dashboard/3'])
  }

  async salvar(form: NgForm) {
    // Só tenta salvar se o form for válido
    if(form.valid) {
      try {
        let msg = 'Currículo atualizado com sucesso.'
        // Se existir o campo _id, é caso de atualização
        if(this.curriculo._id) {
          await this.curriculoSrv.atualizar(this.curriculo)
        }
        // Senão, é caso de criar um nova venda
        else {
          await this.curriculoSrv.novo(this.curriculo)
          msg = 'Curriculo criado com sucesso.'
        }
        // Dá o feedback para o usuário
        this.snackBar.open(msg, 'Entendi', {duration: 5000})
        // Voltar à listagem
        this.router.navigate(['/dashboard/3'])
      }
      catch(erro) {
        this.snackBar.open(erro.message, 'Que pena!', {duration: 5000})
      }
    }
  }

}
