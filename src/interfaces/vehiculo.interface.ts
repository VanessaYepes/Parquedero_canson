import { TipoVehiculo } from '../enums/tipoVehiculo.enum';


export default interface Vehiculo {
    placa : string
    modelo : number
    marca : string
    nombre : string
    tecnomecanica : boolean
    soat : boolean
    tipoVehiculo : TipoVehiculo
}

