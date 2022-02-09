const notificationReducer = (state = '', action) => {
    console.log('NOTI state now: ', state)
    console.log('NOTI action', action)
    switch (action.type) {
      case 'SET':
        return action.text 
      case 'HIDE':
        return null
      default:
        return state
    }
  }
  
  export const clearNotification = () => {
    return {
      type: 'HIDE',
    }
  }

  export const setNotification = (text, seconds) => {
    window.clearTimeout(window.timeout)

    return async (dispatch) => {
      dispatch({
        type: 'SET',
        text
      })
  
      window.timeout = setTimeout(() => {
        dispatch(clearNotification())
      }, seconds * 1000)
    }

  }

  export default notificationReducer