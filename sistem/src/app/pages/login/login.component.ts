import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



  ngOnInit(): void {


  }
  login() {
    if (this.loginForm.valid) {
      if(this.loginForm.value.username === 'Admin' && this.loginForm.value.password === '123456'){
        this.router.navigate(['/admin']);
      }
      else if(this.loginForm.value.username === 'Funcionário' && this.loginForm.value.password === '654321'){
        this.router.navigate(['/funcionario']);
      }
      else{
        console.log('login Inválido')
      }
    }
  }

}
