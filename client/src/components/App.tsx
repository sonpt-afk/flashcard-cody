import { useEffect, useState } from "react"
import '../css/App.scss'
import { Link } from "react-router-dom"
import { deleteDecks } from "../api/deleteDecks"
import { getDecks,TDeck } from "../api/getDecks"
import { createDecks } from "../api/createDecks"

function App() {

  const [title,setTitle] = useState('')
  const [decks,setDecks] = useState<TDeck[]>([])

 async function handleCreateDeck(e:React.FormEvent){
    e.preventDefault()
    const deck = await createDecks(title)
    setDecks([...decks,deck])
    setTitle('');
    (e.target as HTMLFormElement).reset()
  }

    async function handleDeleteDeck(deckId:string){

      await deleteDecks(deckId)
      setDecks(decks.filter((deck)=>deck._id !== deckId))
    }
  useEffect(()=>{
    async function fetchDecks() {
      const newDecks = await getDecks()
      setDecks(newDecks)
    }
    fetchDecks()
  },[decks])
  return (
    <>
    <div className="decks">
    <div className="decks-list">
      {
        decks.map((deck)=>(
          <li key={deck._id} className="decks-list-item" >
            <button  className="decks-list-item-delBtn" onClick={()=> handleDeleteDeck(deck._id)}>X</button>
            
            <Link to={`decks/${deck._id}`}>{deck.title}</Link>
            </li>
        ))
      }
      </div>
      <div className="decks-input">
      <form action="" onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck title</label>
        <input type="text" id="deck-title" 
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
          //todo: save what they typed
          setTitle(e.target.value)
        }}
        />
        <button>Create Deck</button>
      </form>
      </div>
      </div>
    </>
  )
}

export default App
