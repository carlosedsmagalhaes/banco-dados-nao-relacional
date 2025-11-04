import mongoose, {Document, Schema} from "mongoose";

export interface IProdutos extends Document {
    nome: string;
    categoria: string;
    preco: number;
    estoque: number;
}

const ProdutoSchema: Schema = new Schema({
    nome: { type: String, required: true },
    categoria: { type: String, required: true },
    preco: { type: Number, required: true },
    estoque: { type: Number, required: true }
});

export default mongoose.model<IProdutos>('Produto', ProdutoSchema);