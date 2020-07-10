import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html',
  styleUrls: ['./empresa-form.component.scss']
})
export class EmpresaFormComponent implements OnInit {

  title: string = 'Nova empresa'

  empresa : any = {}   // Objeto vazio

  constructor(
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
        this.empresa = await this.empresaSrv.obterUm(params['id'])
        this.title = 'Atualizando empresa'
      }
      catch(erro) {
        this.snackBar.open(erro.message, 'Que pena!', {duration: 5000})
      }
    }
  
  }

  voltar(x) {
    this.router.navigate(['/dashboard/0'])
  }

  async salvar(form: NgForm) {
    // Só tenta salvar se o form for válido
    if(form.valid) {
      try {
        let msg = 'Empresa atualizada com sucesso.'
        // Se existir o campo _id, é caso de atualização
        if(this.empresa._id) {
          await this.empresaSrv.atualizar(this.empresa)
        }
        // Senão, é caso de criar um novo fornecedor
        else {
          await this.empresaSrv.novo(this.empresa)
          msg = 'Empresa criada com sucesso.'
        }
        // Dá o feedback para o usuário
        this.snackBar.open(msg, 'Entendi', {duration: 5000})
        // Voltar à listagem
        this.router.navigate(['/dashboard/0'])
      }
      catch(erro) {
        this.snackBar.open(erro.message, 'Que pena!', {duration: 5000})
      }
    }
  }

}
