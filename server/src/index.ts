import express,{Request,Response} from 'express';
import mongoose from 'mongoose';
import Deck from './models/Deck';
const app = express();
const PORT = 5000;

app.use(express.json());
app.get('/', (req: Request, res: Response) => {
    res.send('root')
})

app.post('/decks', async (req: Request, res: Response) => {
    const newDeck = new Deck({
        title: req.body.title
    })
    const createdDeck= await newDeck.save();
    res.json(createdDeck)

})


mongoose.connect("mongodb+srv://admin:Gs1O97VDmYYwnztv@cluster0-sonptdev.w89ha6j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-SonptDev")
.then(() => {
    console.log('Connected to MongoDB ')
    app.listen(PORT)
})
app.listen(5000)
