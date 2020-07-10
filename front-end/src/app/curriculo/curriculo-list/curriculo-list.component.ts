import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../curriculo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDlgComponent } from '../../ui/confirm-dlg/confirm-dlg.component';

@Component({
  selector: 'app-curriculo-list',
  templateUrl: './curriculo-list.component.html',
  styleUrls: ['./curriculo-list.component.scss']
})
export class CurriculoListComponent implements OnInit {

  curriculos : any = [] // Vetor vazio

  displayedColumns : string[] = ['dadosPessoais', 'objetivo', 'formacaoAcademica', 'experienciaProfissional', 'idiomas', 'informacoesAdicionais', 'editar', 'excluir']

  constructor(
    private curriculoSrv : CurriculoService,
    private snackBar : MatSnackBar,
    private dialog : MatDialog
  ) { }

  async ngOnInit() {
    this.curriculos = await this.curriculoSrv.listar()
    console.log(this.curriculos)
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
        await this.curriculoSrv.excluir(id)
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
