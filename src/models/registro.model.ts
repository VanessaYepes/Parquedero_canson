import registro from '../interfaces/registro.interface';
import { model, Schema } from 'mongoose';
import { Estado } from 'enums/estado.enum';


const registroSchema: Schema<registro> = new Schema({
    nombrePropietario : {
        type : String,
        required : true
    },
    idPropietario : {
        type : Number,
        required : true,
        unique : true //no se repite dos veces o mas
    },
    fechaIngreso : {
        type : String,
        required : true
    },
    horaIngreso : {
        type : String,
        required : true
    },
    fechaSalida : {
        type : String,
        required : true
    },
    estado : {
        type : String,
        required : true,
        enum : Estado
    },
    vehiculo : {
        type : {},
        required : true,
    },
    valorServicio : {
        type : Number,
        required : true
    },

});

const registroModel = model<registro>('Registro', registroSchema);

export default registroModel;