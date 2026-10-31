import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { HomeComponent } from './components/home-component/home-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { SignalComponent } from './components/signal-component/signal-component';
import { AuthGuard } from './guards/auth-guard';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"home", component: HomeComponent},
 {
    path: "perfil", 
    component: PerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "subordinados", 
    component: SubordinadosComponent,
    canActivate: [AuthGuard]
  },
  {path:"signal", component: SignalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
