import { Component, OnInit } from '@angular/core';
import { VagaService } from '../vaga.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from '../../ui/confirm-dlg/confirm-dlg.component';

@Component({
  selector: 'app-vaga-list',
  templateUrl: './vaga-list.component.html',
  styleUrls: ['./vaga-list.component.scss']
})
export class VagaListComponent implements OnInit {

  vagas : any = [] // Vetor vazio

  displayedColumns : string[] = ['nome_vaga', 'empresa', 'localDeTrabalho', 'nivelEscolaridade', 'beneficios', 'editar', 'excluir']

  constructor(
    private vagaSrv : VagaService,
    private snackBar : MatSnackBar,
    private dialog : MatDialog
  ) { }

  async ngOnInit() {
    this.vagas = await this.vagaSrv.listar()
    console.log(this.vagas)
  }

  async excluirItem(id: string) {
    const dialogRef = this.dialog.open(ConfirmDlgComponent, {
      width: '50%',
      data: {question: 'Deseja realmente excluir este item?'}
    });

    let result = await dialogRef.afterClosed().toPromise();
    
    //if(confirm('Deseja realmente excluir este item?')) {
    if(result) {
        
      try {
        await this.vagaSrv.excluir(id)
        this.ngOnInit() // Atualizar os dados da tabela
        //alert('Exclusão efetuada com sucesso.')
        this.snackBar.open('Exclusão efetuada com sucesso.', 'Entendi', 
          { duration: 5000 });
      }
      catch(erro) {
        //alert('ERRO: não foi possível excluir este item.')
        this.snackBar.open('ERRO: não foi possível excluir este item.', 
          'Que pena!', { duration: 5000 });
      }
    }
  }

}
