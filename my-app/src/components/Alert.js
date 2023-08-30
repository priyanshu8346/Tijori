import React from 'react'

function Alert(props) {
  return (
    <div>
        {props.alert && <div className={`alert alert-${props.alert.color}`} role="alert">
  {props.alert.message}
</div>}
    </div>
  )
}

export default Alert