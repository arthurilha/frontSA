import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {
  reembolso: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.reembolso = this.formBuilder.group({
      nome: ['', Validators.required],
      valor: ['', Validators.required],
      motivo: ['', Validators.required],
      data: ['', Validators.required]
    });
  }


    ngOnInit() {
  }

}
