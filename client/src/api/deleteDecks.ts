import { API_URL } from './config'
export async function deleteDecks(deckId:string) {
    const response =  await fetch(`${API_URL}/decks/${deckId}`,{
        method:'DELETE',
      })
    return response.json()
}