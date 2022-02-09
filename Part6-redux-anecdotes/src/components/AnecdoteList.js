import React from 'react'
import { connect } from 'react-redux'
import { toggleVotesOf } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  
  const vote = (anecdote) => {
    props.toggleVotesOf(anecdote.id)
    props.setNotification(`you voted '${anecdote.content}'`, 5)
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
      {props.anecdotes.map(anecdote =>
        <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
        />
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: (
      state.anecdotes
        .sort((min, max) => max.votes - min.votes)
        .filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    )
  }
}

const mapDispatchToProps = {
  toggleVotesOf,
  setNotification
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdotes