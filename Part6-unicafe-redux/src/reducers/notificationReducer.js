const notificationReducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
      case 'ADD':
        return 'you have added a new anecdote: ' + action.text
      case 'VOTE':
        return 'you have voted for: ' + action.text 
      case 'HIDE':
        return null
      default:
        return null
    }
  }
  
  export const addNotification = text => {
    return {
      type: 'ADD',
      text,
    }
  }

  export const voteNotification = text => {
    return {
      type: 'VOTE',
      text,
    }
  }

  export const hideNotification = () => {
    return {
      type: 'HIDE',
    }
  }

  export default notificationReducer