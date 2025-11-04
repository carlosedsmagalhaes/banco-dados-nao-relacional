import express, {Request, Response} from "express";
import mongoose from "mongoose";
import path from "path";
import Produto from "./models/produtos";

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/rede_games';

app.use(express.static(path.join(__dirname, "../view")));
app.use(express.json());

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB conectado'))
    .catch(err => console.log('Erro ao conectar ao MongoDB: ', err));


app.get("/api/produtos", async (req: Request, res: Response) => {
    try{
        const produtos = await Produto.find({}, {_id: 0, nome: 1, preco: 1}).limit(5);
        res.json(produtos);
    }catch(err){
        res.status(500).json({message: 'Erro ao buscar produtos'});
    }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`API de produtos em http://localhost:${PORT}/api/produtos`);
});
