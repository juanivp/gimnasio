import { Socio } from "./socio";

export default class SocioVip extends Socio{
    
    constructor(nombre: string, id: number, pagaMensuelFija: number, cuotaAlDia: boolean) {
        super(nombre, id, pagaMensuelFija, cuotaAlDia);
    }
}