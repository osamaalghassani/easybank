import React from 'react'
import "./button.css";
function button(props ) {
  return (
    <div>
          <div className='header-btn'>{props.children}</div>
          

    </div>
  )
}

export default button;
