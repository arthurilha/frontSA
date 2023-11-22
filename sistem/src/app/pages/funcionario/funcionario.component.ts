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
  dados2: any;
  id :any;
  constructor(private formBuilder: FormBuilder, private router: Router, private reb : ReembolsoService) {
    this.reembolso = this.formBuilder.group({
      id: [this.id, Validators.required],
      valor: ['', Validators.required],
      motivo: ['', Validators.required],
      data: ['', Validators.required],
      status: ['pendente', Validators.required]
    });
  }


  ngOnInit() {
   this.id = localStorage.getItem('id');
   console.log('meu id '+ this.id)
      this.obterTodos();
      this.obterUm();

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
  obterUm(){
    this.reb.getReembolsoId(this.id).subscribe((reembolsosId) => {
      console.log(reembolsosId)
      this.dados2 = reembolsosId;
    })
  }
  onSubmit() {

    if (this.reembolso.valid) {
      const dados = this.reembolso.value;
      console.log('Valores do formulário:',dados);
      this.reb.postReembolso(dados).subscribe((newReembolso)=>{
        this.router.navigate(['/funcionario']);
        })
    } else {
      console.log('falha ao solicitar reembolso');
    }
  }
}
