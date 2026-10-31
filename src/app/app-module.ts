import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu-component/menu-component';
import { Enviroments } from './enviroments/enviroments';
import { LoginComponent } from './components/login-component/login-component';
import { HomeComponent } from './components/home-component/home-component';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';
import { SignalComponent } from './components/signal-component/signal-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ServiceEmpleado } from './services/service.empleado';
import { AuthGuard } from './guards/auth-guard';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    Enviroments,
    LoginComponent,
    HomeComponent,
    PerfilComponent,
    SubordinadosComponent,
    SignalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    AuthGuard,
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServiceEmpleado,],
  bootstrap: [App],
})
export class AppModule {}
