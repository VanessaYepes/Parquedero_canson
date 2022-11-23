import { model, Schema, Document } from 'mongoose';
import Vehiculo from 'interfaces/vehiculo.interface';
import { TipoVehiculo } from '../enums/tipoVehiculo.enum';

const vehiculoSchema: Schema<Vehiculo> = new Schema({
    marca : {
        type : String,
        required : true
    },
    placa : {
        type : String,
        required : true,
        unique : true
    },
    modelo : {
        type : Number,
        required : true
    },
    nombre : {
        type : String,
        required : true
    },
    tecnomecanica : {
        type : Boolean,
        required : true
    },
    soat : {
        type : Boolean,
    },
    tipoVehiculo : {
        type : String,
        required : true,
        enum : TipoVehiculo
    },

});

const vehiculoModel = model<Vehiculo>('Vehiculo', vehiculoSchema);

export default vehiculoModel;

