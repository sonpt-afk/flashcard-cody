import express,{Request,Response} from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck';
import {config} from 'dotenv'
import cors from 'cors'
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

app.get('/decks', async (req: Request, res: Response) => {
    const decks = await Deck.find()
    res.json(decks)
})
app.post('/decks', async (req: Request, res: Response) => {
    const newDeck = new Deck({
        title: req.body.title
    })
    const createdDeck= await newDeck.save();
    res.json(createdDeck)
})

app.delete("/decks/:deckId",async (req: Request, res: Response) => {
    //get deck id from the url
    const deckId = req.params.deckId
    // dekete the deck from mongo
    const deck = await Deck.findByIdAndDelete(deckId)
    //return the deleted deck to user who made the request
    res.json({
        message: "Deck deleted successfully!"
    })
})

mongoose.connect(process.env.MONGO_URL ?? "")
.then(() => {
    console.log('Connected to MongoDB ')
    app.listen(PORT)
})
