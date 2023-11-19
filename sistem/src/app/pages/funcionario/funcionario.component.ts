import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReembolsoService } from 'src/app/service/reembolso.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  reembolso: FormGroup;
  dados: any[] = [];
  constructor(private formBuilder: FormBuilder, private router: Router, private reb : ReembolsoService) {
    this.reembolso = this.formBuilder.group({
      id: ['5', Validators.required],
      valor: ['', Validators.required],
      motivo: ['', Validators.required],
      data: ['', Validators.required],
      status: ['pendente', Validators.required]
    });
  }


  ngOnInit() {

      this.obterTodos();

  }


  voltar(){
    this.router.navigate(['']);
  }

  obterTodos(){
    this.reb.getReembolso().subscribe((reembolsos) => {
      this.dados = reembolsos;
      console.log(reembolsos)
    })
  }

  onSubmit() {

    if (this.reembolso.valid) {
      const dados = this.reembolso.value;
      console.log('Valores do formulário:',dados);
      this.reb.postReembolso(dados).subscribe((newReembolso)=>{
            console.log("1" + newReembolso)
        })
    } else {
      console.log('Formulário inválido. Por favor, verifique os campos.');
    }
  }
}
