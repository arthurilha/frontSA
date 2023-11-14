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

}
