import React from 'react'
import './button.scss'
const Button = ({name}) => {
  return (
    <div className='button'>
        <button>
            {name}
        </button>
    </div>
  )
}

export default Button