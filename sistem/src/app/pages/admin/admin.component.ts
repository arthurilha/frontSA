import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import { criaReembolso } from 'src/app/models/criaReembolso';
import { ReembolsoService } from 'src/app/service/reembolso.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  periodo: FormGroup;
  dados: any[] = [];
  constructor(private formBuilder: FormBuilder, private router: Router, private reb : ReembolsoService) {
    this.periodo = this.formBuilder.group({
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required]
    });
  }


    ngOnInit() {
      this.obterTodos();
  }

  obterTodos(){
    this.reb.getReembolsoTodos().subscribe((reembolsos) => {
      this.dados = reembolsos;
      console.log(reembolsos)
    })
  }

  aprovaReembolso(item: any){
    const attReb : any ={
      id: item,
    }

    this.reb.patchReembolsoA(attReb).subscribe((updateReb) =>{
      location.reload();
      console.log(updateReb)
    })
  }

  reprovaReembolso(item: any){
    const attReb : any ={
      id: item,
    }

    this.reb.patchReembolsoR(attReb).subscribe((updateReb) =>{
      location.reload();
      console.log(updateReb)
    })
  }


  voltar(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  onSubmit() {
    if (this.periodo.valid) {
      // Aqui você pode acessar os valores do formulário
      console.log('Valores do formulário:', this.periodo.value);
      this.reb.getRelatorio(this.periodo.value.dataInicio,this.periodo.value.dataFim).subscribe((relatorio)=>{
        const pdf = new jsPDF();

        const quantidadeAprovados = relatorio.quantidadeAprovados;
        const porcentagemAprovados = relatorio.porcentagemAprovados;
        const totalAprovados = relatorio.totalAprovados;
        const quantidadeReprovados = relatorio.quantidadeReprovados;
        const porcentagemReprovados = relatorio.porcentagemReprovados;
        const totalReprovados = relatorio.totalReprovados;

        // Adiciona o conteúdo ao PDF
        pdf.text(`Relatorio das datas: Inicio: ${this.periodo.value.dataInicio} Fim: ${this.periodo.value.dataFim}`, 10, 10);

        pdf.text(`Quantidade de Aprovados: ${quantidadeAprovados}`, 10, 20);
        pdf.text(`Porcentagem de Aprovados: ${porcentagemAprovados}`, 10, 30);
        pdf.text(`Total de Aprovados: ${totalAprovados}`, 10, 40);
        pdf.text(`Quantidade de Reprovados: ${quantidadeReprovados}`, 10, 50);
        pdf.text(`Porcentagem de Reprovados: ${porcentagemReprovados}`, 10, 60);
        pdf.text(`Total de Reprovados: ${totalReprovados}`, 10, 70);

        // Salva o PDF
        pdf.save('arquivo_pdf.pdf');
      })
      // Adicione a lógica para enviar os dados para o servidor aqui
    } else {
      console.log('Formulário inválido. Por favor, verifique os campos.');
    }
  }
}
