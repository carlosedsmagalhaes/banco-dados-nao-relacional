import mongoose, {Document, Schema} from 'mongoose';


export interface IGames extends Document{
    nome: string;
    categoria:string;
    preco: number;
    estoque: number;
}

const GamesSchema: Schema = new Schema({
    nome: { type: String, required: true },
    categoria: { type: String, required: true },
    preco: { type: Number, required: true },
    estoque: { type: Number, required: true },

}, { timestamps: true, collection: 'api_games'});

export default mongoose.model<IGames>('Games', GamesSchema);