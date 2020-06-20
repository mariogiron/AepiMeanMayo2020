export class Tarea {

    titulo: string;
    descripcion: string;
    fechaCreacion: Date;
    completa: boolean;

    constructor(pTitulo: string, pDescripcion: string) {
        this.titulo = pTitulo;
        this.descripcion = pDescripcion;
        this.fechaCreacion = new Date();
        this.completa = false;
    }

}