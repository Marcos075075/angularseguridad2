import { Component, inject } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';
import { ServiceAuthEmpleado } from '../../services/servicea.auth.empleado';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  private _serviceSignal: ServiceSignal = inject(ServiceSignal);
  private _serviceAuth: ServiceAuthEmpleado = inject(ServiceAuthEmpleado);
  public usuario = this._serviceAuth.user;
  public contador = this._serviceSignal.contador;

  logOutEmpleado(): void {
    this._serviceAuth.logoutEmpleado();
  }
}
