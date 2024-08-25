import React from 'react'

const Button = ({ text, styles, features, onClose }) => {
  return (

    <button  className={`flex justify-center items-center px-[6%] py-[2%] ${styles} border rounded shadow bg-darkBlue text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-200`} {...features}><p className='font-body font-bold '>{text}</p></button>

  )
}

export default Button