import { useEffect, useState } from "react"
import '../css/App.scss'
import '../css/index.css'
import { createCard } from "../api/createCard"
import { useParams } from 'react-router-dom';
import { getDeck } from "../api/getDeck"
import { TDeck } from "../api/getDecks"
import { deleteDecks } from "../api/deleteDecks"
import {deleteCard} from "../api/deleteCard"
function Deck() {

    const [deck,setDeck] = useState<TDeck | undefined>()
    const [cards, setCards] = useState<string[]>([]);
    const [text,setText] = useState('')
    const {deckId} = useParams()

   async function handleCreateCard(e:React.FormEvent){
      e.preventDefault()
      const {cards: serverCards} = await createCard(deckId!,text)
      setCards([...serverCards])
      setText('');
    }

   async function handleDeleteCard(index:number){
    if(!deckId) return ;
    const newDeck = await deleteCard(deckId,index)
     setCards(newDeck.cards)
    }

   
  useEffect(()=>{
    async function fetchDeck() {
      if(!deckId) return;
      const newDeck = await getDeck(deckId)
      console.log("mewDeck",newDeck)
      setDeck(newDeck)
      setCards(newDeck.cards)

    }
    fetchDeck()
  },[deckId])
  return (
    <>
    <div className="cards">
  <div className="cards-list">
      {
        cards.map((card,index)=>(
          <li key={index} className="cards-list-item" >
            <button onClick={()=> handleDeleteCard(index)} className="cards-list-item-delBtn">X</button>
            {card}
            </li>
        ))
      }
      </div>
      <form action="" onSubmit={handleCreateCard}>
        <label htmlFor="card-text">Card text</label>
        <input type="text" id="card-text" value={text}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
          //todo: save what they typed
          setText(e.target.value)
        }}
        />
        <button>Create card</button>
      </form>
      </div>
    </>
  )
}

export default Deck