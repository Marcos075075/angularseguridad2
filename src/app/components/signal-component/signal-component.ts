import { Component, inject } from '@angular/core';
import { ServiceSignal } from '../../services/service.signal';

@Component({
  selector: 'app-signal-component',
  standalone: false,
  styleUrl: './signal-component.css',
  templateUrl: './signal-component.html',
})
export class SignalComponent {
  private _serviceSignal: ServiceSignal = inject(ServiceSignal);

  public contador = this._serviceSignal.contador;
  public doble = this._serviceSignal.doble;

  reiniciarContador(): void {
    this._serviceSignal.reiniciarContador();
  }

  incrementarContador(): void {
    this._serviceSignal.incrementarContador();
  }
}
