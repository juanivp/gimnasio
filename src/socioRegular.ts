import { Socio } from "./socio";

export default class SocioRegular extends Socio{
    
    protected cantClasesInscriptas: number
    // esto podria ser un array tambien y cada clase un objeto

    constructor(nombre: string, id: number, pagaMensuelFija: number, cuotaAlDia: boolean) {
        super(nombre, id, pagaMensuelFija, cuotaAlDia);
        this.cantClasesInscriptas = 0;
    }

    public setCantClasesInscriptas(cantidad: number) {
        this.cantClasesInscriptas = cantidad;
    }
    
    public getCantClasesInscriptas() : number {
        return this.cantClasesInscriptas;
    }


}