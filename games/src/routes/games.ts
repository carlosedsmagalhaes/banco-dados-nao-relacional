import { Router } from 'express';
import Games from '../controllers/games'

const gamesRouter = Router();
const games = new Games();

gamesRouter.get('/jogos', games.getGames);

gamesRouter.post('/jogos', games.insertGames);

gamesRouter.put('/jogos/:id', games.putGame);

gamesRouter.delete('/jogos/:id', games.deleteGame);

export default gamesRouter;