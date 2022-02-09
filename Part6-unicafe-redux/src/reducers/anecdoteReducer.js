//import anecdoteService from '../services/anecdotes'
//reducer: creador de acciones

//const getId = () => (100000 * Math.random()).toFixed(0)

export const createAnecdote = (data) => {
  return {
    type: "NEW_ANECDOTE",
    data,
  }
}

export const toggleVotesOf = (id) => {
  return {
    type: 'TOGGLE_VOTE',
    data: { id }
  }
}

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    case 'TOGGLE_VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes + 1 
      }
      /*
      anecdoteService
        .update(changedAnecdote.id, changedAnecdote)
        .then(returnedAnecdote => {
          state.map(anecdote => anecdote.id !== id ? anecdote : returnedAnecdote)
        })
      */
      console.log('changedAnecdote', changedAnecdote)
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote 
      )
    default:
      return state
  }

}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}

export default anecdoteReducer