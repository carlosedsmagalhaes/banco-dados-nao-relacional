/* API Node.js (Aula 7) 
A equipe precisa registrar uma nova leitura via API 
REST. 
Crie a rota POST /leituras usando Express + Mongoose 
que: 
1. Valida se os campos obrigatórios foram 
enviados 
2. Insere a leitura 
3. Retorna código HTTP 201 */

/* db.leituras.insertMany([
  {
    "carro": "GT-R",
    "sensor": "temperatura_motor",
    "valor": 95.8,
    "data_hora": ISODate("2025-11-30T10:05:00Z")
  },
  {
    "carro": "Mustang",
    "sensor": "pressao_oleo",
    "valor": 65.2,
    "data_hora": ISODate("2025-11-30T10:05:10Z")
  },
  {
    "carro": "GT-R",
    "sensor": "velocidade",
    "valor": 285,
    "data_hora": ISODate("2025-11-30T10:05:25Z")
  }
]) */

import mongoose, { Schema, Document } from 'mongoose';

export interface ILeitura extends Document {
    carro: string;
    sensor: string;
    valor: number;
    data_hora: Date;
}

const LeituraSchema: Schema = new Schema({
    carro: { type: String, required: true },
    sensor: { type: String, required: true },
    valor: { type: Number, required: true },
    data_hora: { type: Date, required: true }
});
export default mongoose.model<ILeitura>('Leitura', LeituraSchema);
