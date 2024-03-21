import { useEffect, useState } from "react"
import './css/App.scss'

type TDeck = {
  title:string,
  _id:string
}
function App() {

  const [title,setTitle] = useState('')
  const [decks,setDecks] = useState<TDeck[]>([])

 async function handleCreateDeck(e:React.FormEvent){
    e.preventDefault()
    await fetch('http://localhost:5000/decks',{
      method:'POST',
      body: JSON.stringify({title}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    setTitle('');
    (e.target as HTMLFormElement).reset()
  }

  useEffect(()=>{
    async function fetchDecks() {
      const response = await fetch('http://localhost:5000/decks')
      const newDecks = await response.json()
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
          <li key={deck._id} className="decks-list-item">{deck.title}</li>
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
