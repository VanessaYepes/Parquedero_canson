import { Estado } from 'enums/estado.enum';
import Vehiculo from './vehiculo.interface';


export default interface registro {
    nombrePropietario : string
    idPropietario : number
    fechaIngreso : string
    horaIngreso : string
    fechaSalida :  string
    horaSalida : string
    estado : Estado
    vehiculo : Vehiculo
    valorServicio : number
}