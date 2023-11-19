import { FuncionarioComponent } from './funcionario/funcionario.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';




@NgModule({
  declarations: [LoginComponent,FuncionarioComponent,AdminComponent,CadastrarComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class PagesModule { }
