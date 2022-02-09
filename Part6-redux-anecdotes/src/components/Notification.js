import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(state => state.notification)

  const style = {
    border: '3px solid dodgerblue',
    padding: 10
  }
  if (notification === null) {
    return (<div/>)
  }
  else
  {
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }
}


export default Notification