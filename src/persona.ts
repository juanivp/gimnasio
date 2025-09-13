export default abstract class Persona {
    
    protected nombre: string;

    constructor(){
        this.nombre = "";
    }
    public setNombre(value: string): void {
        this.nombre = value;
    };

    public getNombre (): string {
        return this.nombre;
    }
}