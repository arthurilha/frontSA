import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { criaReembolso } from 'src/app/models/criaReembolso';
import { ReembolsoService } from 'src/app/service/reembolso.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  reembolso: FormGroup;
  dados: any[] = [];
  dados2: any;
  id :any;
  nome:any;
  constructor(private formBuilder: FormBuilder, private router: Router, private reb : ReembolsoService) {
    this.reembolso = this.formBuilder.group({
      funcionario:[1, Validators.required],
      valor: ['', Validators.required],
      motivo: ['', Validators.required],
      dataReembolso: ['', Validators.required],
    });
  }


  ngOnInit() {
   this.id = localStorage.getItem('id');
   this.nome = localStorage.getItem('nome');
   console.log('meu id '+ this.id)
   console.log('meu nome '+ this.nome)
      this.obterTodos();
      this.obterUm();

  }


  voltar(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  obterTodos(){
    this.reb.getReembolso().subscribe((reembolsos) => {
      this.dados = reembolsos;
      console.log(reembolsos)
    })
  }
  obterUm(){
    this.reb.getReembolsoId(this.id).subscribe((reembolsosId) => {
      console.log(reembolsosId)
      // this.dados2 = reembolsosId.find((reembolso: criaReembolso) => {
      //   return reembolso;
      // });
      this.dados2 = reembolsosId
    })
  }
  onSubmit() {
    this.reembolso.value.funcionario = this.id
    console.log(this.reembolso.value)
    if (this.reembolso.valid) {
      const dados = this.reembolso.value;
      console.log('Valores do formulário:',dados);
      this.reb.postReembolso(dados).subscribe((newReembolso)=>{
        location.reload();
        })
    } else {
      console.log('falha ao solicitar reembolso');
    }
  }
}
