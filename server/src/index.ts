import express,{Request,Response} from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck';
import {config} from 'dotenv'
import cors from 'cors'
import { getDeckController } from './controllers/getDeckController';
import { getDecksController } from './controllers/getDecksController';
import { createDeckController } from './controllers/createDeckController';
import { deleteDeckController } from './controllers/deleteDeckController';
import {createCardForDeckController} from './controllers/createCardForDeckController';
import {deleteCardOnDeckController} from './controllers/deleteCardOnDeckController'
const app = express();
app.use(
    cors({
        origin: "*"
    })
)
config()
const PORT = 5000;
app.use(cors())
app.use(express.json());

app.get('/decks', getDecksController)
app.post('/decks',createDeckController)
app.delete("/decks/:deckId",deleteDeckController)
app.post('/decks/:deckId/cards',createCardForDeckController)
app.get('/decks/:deckId', getDeckController)
app.delete("/decks/:deckId/cards/:index",deleteCardOnDeckController)

mongoose.connect(process.env.MONGO_URL ?? "")
.then(() => {
    console.log('Connected to MongoDB ')
    app.listen(PORT)
})
