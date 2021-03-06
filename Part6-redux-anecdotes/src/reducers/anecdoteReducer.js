import anecdoteService from '../services/anecdotes'

const anecdoteReducer = (state = [], action) => {
  console.log('ANEC state now: ', state)
  console.log('ANEC action', action)

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
      
      anecdoteService
        .update(changedAnecdote.id, changedAnecdote)
        /*.then(returnedAnecdote => {
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

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote,
    })
  }
}

export const toggleVotesOf = (id) => {
  return async dispatch => {
    dispatch({
      type: 'TOGGLE_VOTE',
      data: { id }
    })
  }
}

export default anecdoteReducer