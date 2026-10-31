import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceEmpleado } from '../../services/service.empleado';
import { Router } from '@angular/router';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-perfil-component',
  standalone: false,
  styleUrl: './perfil-component.css',
  templateUrl: './perfil-component.html',
})
export class PerfilComponent implements OnInit {
  public empleado!: Empleado;

   constructor(
    private _cdr: ChangeDetectorRef,
    private _service: ServiceEmpleado,
  ){}

  async ngOnInit(): Promise<void> {
    this.empleado = await this._service.getPerfilEmpleado();
    this._cdr.detectChanges();    
  }

}
