import express, { Request, Response } from "express";
import GamesModel, { IGames } from "../models/games";

class Games {
  async getGames(req: Request, res: Response) {
    try {
      const games = await GamesModel.find();
      res.json(games);
    } catch (error) {
      res.status(500).json({ message: "Erro ao buscar jogos", error });
    }
  }

  async insertGames(req: Request, res: Response) {
    try {
      const game: IGames = req.body;
      const newGame = new GamesModel(game);
      await newGame.save();
      res.status(201).json(newGame);
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar jogo", error });
    }
  }

  async putGame(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const game: IGames = req.body;

      const gameUpdate = await GamesModel.findByIdAndUpdate(id, game, { new: true });

      if (!gameUpdate) {
        return res.status(404).json({ message: "Jogo não encontrado" });
      }
      res.status(200).json(gameUpdate);
    } catch (error) {
      res.status(500).json({ message: "Erro ao alterar jogo." });
    }
  }

  async deleteGame(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const delGame = await GamesModel.findByIdAndDelete(id);
      if (!delGame) {
        return res.status(404).json({ message: "Jogo não encontrado" });
      }
      res.json({ message: "Jogo removido com sucesso" });
    } catch (error) {
      res.status(500).json({ message: "Erro ao remover jogo", error });
    }
  }
}


export default Games;