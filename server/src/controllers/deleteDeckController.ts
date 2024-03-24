import { Request, Response } from "express";
import Deck from '../models/Deck';

export async function deleteDeckController(req: Request, res: Response) {
   //get deck id from the url
   const deckId = req.params.deckId
   // dekete the deck from mongo
   const deck = await Deck.findByIdAndDelete(deckId)
   //return the deleted deck to user who made the request
   res.json({
       message: "Deck deleted successfully!"
}
   )
}