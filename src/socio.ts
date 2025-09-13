import Entrenador from "./entrenador";
import Persona from "./persona";
import PlanDeEntrenamiento from "./planEntrenamiento";

export abstract class Socio extends Persona {
  protected id: number;
  protected planDeEntrenamiento: PlanDeEntrenamiento =
    undefined as unknown as PlanDeEntrenamiento;
  protected pagaMensualFija: number;
  protected cuotaAlDia: boolean;
  protected entrenador: Entrenador = undefined as unknown as Entrenador;

  constructor(
    nombre: string,
    id: number,
    pagaMensuelFija: number,
    cuotaAlDia: boolean
  ) {
    super();
    this.nombre = nombre;
    this.id = id;
    this.pagaMensualFija = pagaMensuelFija;
    this.cuotaAlDia = cuotaAlDia;
  }

  public getId(): number {
    return this.id;
  }
  public getPlanDeEntrenamiento(): PlanDeEntrenamiento {
    return this.planDeEntrenamiento;
  }
  public getpagaMensualFija(): number {
    return this.pagaMensualFija;
  }
  public getCuotaAlDia(): boolean {
    return this.cuotaAlDia;
  }
  public getEntrenador(): Entrenador {
    return this.entrenador;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public setPlanDeEntrenamiento(
    planDeEntrenamiento: PlanDeEntrenamiento
  ): void {
    this.planDeEntrenamiento = planDeEntrenamiento;
  }
  public setpagaMensualFija(pagaMensualFija: number): void {
    this.pagaMensualFija = pagaMensualFija;
  }
  public setCuotaAlDia(cuotaAlDia: boolean): void {
    this.cuotaAlDia = cuotaAlDia;
  }
  public setEntrenador(entrenador: Entrenador): void {
    this.entrenador = entrenador;
  }
}
