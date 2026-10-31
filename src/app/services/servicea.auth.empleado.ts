import { Injectable, signal } from "@angular/core";
import { ServiceEmpleado } from "./service.empleado";
import { Empleado } from "../models/empleado";

@Injectable({providedIn: 'root'})
export class ServiceAuthEmpleado {
    constructor(
        private _service: ServiceEmpleado
    ) {}

    public user = signal<Empleado | null>(null);
    
    async loginEmpleado(token : string): Promise<void> {
        sessionStorage.setItem("token", token);
        let empleado = await this._service.getPerfilEmpleado();
        this.user.set(empleado);
    }

    logoutEmpleado(): void {
        sessionStorage.removeItem("token");
        this.user.set(null);
    }
}