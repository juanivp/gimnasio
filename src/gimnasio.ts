import ClaseGrupal from "./claseGrupal";
import Entrenador from "./entrenador";
import { Socio } from "./socio";

export default class Gimnasio {
  private socios: Array<Socio>;
  private entrenadores: Array<Entrenador>;
  private clases: Array<ClaseGrupal>;

  constructor(
    socios: Array<Socio>,
    entrenadores: Array<Entrenador>,
    clases: Array<ClaseGrupal>
  ) {
    this.socios = socios;
    this.entrenadores = entrenadores;
    this.clases = clases;
  }

  public agregarSocio(socio: Socio) {
    this.socios.push(socio);
  }
  public eliminarSocio(socio: Socio) {
    this.socios = this.socios.filter((s) => s !== socio);
  }
  public agregarEntrenador(entrenador: Entrenador) {
    this.entrenadores.push(entrenador);
  }
  public eliminarEntrenador(entrenador: Entrenador) {
    this.entrenadores = this.entrenadores.filter((s) => s !== entrenador);
  }

  public inscribirSocioEnClase(socio: Socio, clase: ClaseGrupal): boolean {
    if (!this.socios.includes(socio) || !this.clases.includes(clase)) {
      return false; // socio o clase no existen en el gimnasio
    }

    if (clase.getSociosInscriptos().length >= clase.getCapacidadMax()) {
      return false; // no hay cupo
    }
    if (clase.getSociosInscriptos().includes(socio)) {
      return false; // socio ya inscripto
    }

    // agregar socio a la clase
    clase.getSociosInscriptos().push(socio);
    // ACA TENGO QUE BUSCAR LA MANERA DE SUMAR UNO AL NUMERO DE CLASES EN LAS QUE SE INCRIBIO ESE SOCIO SI ES UN SOCIO REGULAR, NO SI ES UNO VIP
    return true;
  }

  public asignarEntrenadorASocio(
    socio: Socio,
    entrenador: Entrenador
  ): boolean {
    if (
      !this.socios.includes(socio) ||
      !this.entrenadores.includes(entrenador)
    ) {
      return false;
    }
    socio.setEntrenador(entrenador);
    return true;
  }

  public calcularCuotaDeSocio (socio: Socio) {
    
  }

  public calcularTotalIngresosMensuales () {

  }
}
