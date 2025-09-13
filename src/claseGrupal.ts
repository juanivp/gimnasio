import Entrenador from "./entrenador";
import { Socio } from "./socio";

export default class ClaseGrupal {
  private nombre: string;
  private horario: number;
  private entrenador: Entrenador;
  private capacidadMax: number;
  protected sociosInscriptos: Array<Socio>;

constructor( nombre: string, horario: number, entrenador: Entrenador, capacidadMax: number, sociosInscriptos: Array<Socio>) {

    this.nombre = nombre;
    this.horario = horario;
    this.entrenador = entrenador;
    this.capacidadMax = capacidadMax;
    this.sociosInscriptos = sociosInscriptos;
}

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }
  public getNombre(): string {
    return this.nombre;
  }

  public setHorario(horario: number): void {
    this.horario = horario;
  }
  public getHorario(): number {
    return this.horario;
  }

  public setEntrenador(entrenador: Entrenador): void {
    this.entrenador = entrenador;
  }
  public getEntrenador(): Entrenador {
    return this.entrenador;
  }

  public setCapacidadMax(capacidadMax: number): void {
    this.capacidadMax = capacidadMax;
  }
  public getCapacidadMax(): number {
    return this.capacidadMax;
  }
  public setSociosInscriptos(sociosInscriptos: Array<Socio>): void {
    this.sociosInscriptos = sociosInscriptos;
  }
  public getSociosInscriptos(): Array<Socio> {
    return this.sociosInscriptos;
  }
}
