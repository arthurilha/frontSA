import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  periodo: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.periodo = this.formBuilder.group({
      dataInicio: ['', Validators.required],
      dataFim: ['', Validators.required]
    });
  }


    ngOnInit() {
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
