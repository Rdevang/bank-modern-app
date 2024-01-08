import React from 'react'

const Buttons = ({styles}) => {
  return (
    <button type='button' className={`rounded-[10px] hover:scale-[1.1]  py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] outline-none text-primary ${styles}`}>Get
    started</button>
  )
}

export default Buttons