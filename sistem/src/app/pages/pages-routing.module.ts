import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'cadastrar',
    component:CadastrarComponent,
  },
  {
    path: 'admin',
    component:AdminComponent,
  },
  {
    path: 'funcionario',
    component:FuncionarioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
