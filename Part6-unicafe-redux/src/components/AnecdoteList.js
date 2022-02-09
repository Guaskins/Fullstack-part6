import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleVotesOf } from '../reducers/anecdoteReducer'
import { voteNotification } from '../reducers/notificationReducer'
import { hideNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  
  const vote = (anecdote) => {
    dispatch(toggleVotesOf(anecdote.id))
    dispatch(voteNotification(anecdote.content))
    setTimeout(() => {
      dispatch(hideNotification(null))
    }, 5000)
  }
  
  const Anecdote = ({ anecdote, handleClick }) => {
    return(
      <div>
        <div>
          {anecdote.content}
        </div>
        <div>
          {anecdote.votes} <button onClick={() => vote(anecdote)}>vote</button>
        </div>
      </div>
    )
  }

  return(
    <div>
      {anecdotes
        .sort((min, max) => max.votes - min.votes)
        .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
        .map(anecdoteFiltered =>
        <Anecdote
            key={anecdoteFiltered.id}
            anecdote={anecdoteFiltered}
        />
      )}
    </div>
  )
}

export default AnecdoteList