import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    this.reb.getReembolso().subscribe((reembolsos) => {
      this.dados = reembolsos;
      console.log(reembolsos)
    })
  }

  voltar(){
    this.router.navigate(['']);
  }

  onSubmit() {

    if (this.periodo.valid) {
      // Aqui você pode acessar os valores do formulário
      console.log('Valores do formulário:', this.periodo.value);
      // Adicione a lógica para enviar os dados para o servidor aqui
    } else {
      console.log('Formulário inválido. Por favor, verifique os campos.');
    }
  }
}
