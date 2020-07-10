import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../candidato.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from '../../ui/confirm-dlg/confirm-dlg.component';

@Component({
  selector: 'app-candidato-list',
  templateUrl: './candidato-list.component.html',
  styleUrls: ['./candidato-list.component.scss']
})
export class CandidatoListComponent implements OnInit {

  candidatos : any = [] // Vetor vazio

  displayedColumns : string[] = ['nome', 'cpf', 'endereco', 'telefone', 'email', 'editar', 'excluir']

  constructor(
    private candidatoSrv : CandidatoService,
    private snackBar : MatSnackBar,
    private dialog : MatDialog
  ) { }

  async ngOnInit() {
    this.candidatos = await this.candidatoSrv.listar()
    console.log(this.candidatos)
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
        await this.candidatoSrv.excluir(id)
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
