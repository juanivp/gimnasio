import Persona from "./persona";
import PlanDeEntrenamiento from "./planEntrenamiento";
import { Socio } from "./socio";

export default class Entrenador extends Persona {

    protected especialidad: string;

    constructor(especialidad: string) {
        super();
        this.especialidad = especialidad;
    }

    public asignarPlanASocio (planDeEntrenamiento: PlanDeEntrenamiento, socio: Socio) {
        const asignarPlan = socio.setPlanDeEntrenamiento(planDeEntrenamiento);
        return asignarPlan;
    }
}