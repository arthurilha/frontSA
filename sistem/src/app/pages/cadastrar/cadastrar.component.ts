
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  cadForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router,  private cad : CadastroService) {
    this.cadForm = this.formBuilder.group({
      id: [1, Validators.required],
      tipoUser: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  ngOnInit() {
  }

  cadastrar() {
    if (this.cadForm.valid) {
      console.log('Valores do formulário:',this.cadForm.value);
      if (this.cadForm.value.tipoUser === "Admin"){
        const dados = this.cadForm.value;
        delete dados.tipoUser;
        this.cad.postCadGerente(dados).subscribe((User)=>{
            this.router.navigate(['']);
        })
      }
      if (this.cadForm.value.tipoUser === "Funcionário"){
        const dados = this.cadForm.value;
        delete dados.tipoUser;
        this.cad.postCadFuncionario(dados).subscribe((User)=>{
            this.router.navigate(['']);
        })
      }
    }
  }

}



