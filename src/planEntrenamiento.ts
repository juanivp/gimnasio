export default class PlanDeEntrenamiento {
    private descripcion: string

    constructor() {
        this.descripcion = "";
    }
    public getDescripcion (): string {
        return this.descripcion
    }

    public setDescripcion ( value: string):void {
        this.descripcion = value;
    }
}