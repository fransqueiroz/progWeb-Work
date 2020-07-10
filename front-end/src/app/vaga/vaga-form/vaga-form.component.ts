import { Component, OnInit } from '@angular/core';
import { VagaService } from '../vaga.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmpresaService } from '../../empresa/empresa.service';

@Component({
  selector: 'app-vaga-form',
  templateUrl: './vaga-form.component.html',
  styleUrls: ['./vaga-form.component.scss']
})
export class VagaFormComponent implements OnInit {

  title: string = 'Nova vaga'

  vaga : any = {}   // Objeto vazio

  // Entidades relacionadas
  empresas : any = []   // Vetor vazio


  constructor(
    private vagaSrv : VagaService,
    private empresaSrv : EmpresaService,
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
        this.vaga = await this.vagaSrv.obterUm(params['id'])
        this.title = 'Atualizando vaga'
      }
      catch(erro) {
        this.snackBar.open(erro.message, 'Que pena!', {duration: 5000})
      }
    }

    // Entidades relacionadas
    try {
      this.empresas = await this.empresaSrv.listar()
    }
    catch(erro) {
      this.snackBar.open(erro.message, 'Que pena!', {duration: 5000})  
    }
  
  }

  voltar(x) {
    this.router.navigate(['/dashboard/1'])
  }

  async salvar(form: NgForm) {
    // Só tenta salvar se o form for válido
    if(form.valid) {
      try {
        let msg = 'Vaga atualizada com sucesso.'
        // Se existir o campo _id, é caso de atualização
        if(this.vaga._id) {
          await this.vagaSrv.atualizar(this.vaga)
        }
        // Senão, é caso de criar um nova venda
        else {
          await this.vagaSrv.novo(this.vaga)
          msg = 'Vaga criada com sucesso.'
        }
        // Dá o feedback para o usuário
        this.snackBar.open(msg, 'Entendi', {duration: 5000})
        // Voltar à listagem
        this.router.navigate(['/dashboard/1'])
      }
      catch(erro) {
        this.snackBar.open(erro.message, 'Que pena!', {duration: 5000})
      }
    }
  }

}
