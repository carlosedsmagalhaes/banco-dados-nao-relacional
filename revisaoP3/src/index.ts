import leitura from "./models/leitura";
import express, { Request, Response } from "express";
import axios from "axios";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
const MONGO_URI = "mongodb://localhost:27017/revisaoP3";
const API_KEY = "4284f90b071c7e7f18ff6223e6b3f1dd";

app.use(bodyParser.json());
mongoose.connect(MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

app.post("/leituras", async (req: Request, res: Response) => {
    const { carro, sensor, valor, data_hora } = req.body;
    if (!carro || !sensor || valor === undefined || !data_hora) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    try {
        const novaLeitura = new leitura({ carro, sensor, valor, data_hora });
        await novaLeitura.save();
        return res.status(201).json(novaLeitura);
    } catch (error) {
        return res.status(500).json({ message: "Error saving reading", error });
    }
});

app.get("/climateData", async (req: Request, res: Response) => {
  const { city } = req.query;
  if (!city) {
    return res.status(400).json({ error: "Parâmetro inválido." });
  }
  try {
    const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
    const responseGeo = await axios.get(urlGeo);

    const locationData = responseGeo.data;
    if (locationData.length === 0) {
      return res.status(404).json({ error: "Cidade não encontrada." });
    }

    const { lat, lon } = locationData[0];

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=pt_br&units=metric`;
    const response = await axios.get(url);

    if (!response.data) {
      return res
        .status(404)
        .json({ error: "Dados climáticos não encontrados." });
    }

    const climateData = response.data;
    res.json(climateData);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Erro ao buscar dados climáticos da cidade informada." });
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});