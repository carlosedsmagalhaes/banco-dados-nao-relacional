import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb://devAluno:123456@127.0.0.1:27017/biblioteca?authSource=biblioteca";

mongoose.set("debug", true);

mongoose.connection.on("connected", () => {
  console.log("Banco conectado com sucesso");
});

mongoose.connection.on("disconnected", () => {
  console.log("Banco desconectado");
});

mongoose.connection.on("error", (err) => {
  console.error("Erro na conexão:", err);
});

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log("Erro ao conectar ao MongoDB: ", err));
