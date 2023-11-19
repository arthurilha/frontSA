import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private log: LoginService) {
    this.loginForm = this.formBuilder.group({
      tipoUser: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



  ngOnInit(): void {


  }
  login() {
    if (this.loginForm.valid) {

      console.log('Valores do formulário:',this.loginForm.value);
      if (this.loginForm.value.tipoUser === "Admin"){
        const dados = this.loginForm.value;
        delete dados.tipoUser;
        this.log.getLoginAdmin(dados).subscribe(
          (success) =>{
            console.log(success)
            this.router.navigate(['/admin']);

        },)
      }
      if (this.loginForm.value.tipoUser === "Funcionário"){
        const dados = this.loginForm.value;
        delete dados.tipoUser;
        this.log.getLoginFunc(dados).subscribe(
          (success) =>{
            console.log(success)
            this.router.navigate(['/funcionario']);

        },)
      }
    }
  }

  telaCadastro(){
    this.router.navigate(['/cadastrar']);
  }

}
