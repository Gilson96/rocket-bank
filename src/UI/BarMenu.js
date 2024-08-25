import React from 'react'
import Logo from '../UI/logo'
import {  ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline'

const BarMenu = (iconStyles, pStyles, spanStyles) => {
  return (
    <nav className='flex justify-between items-center p-2 w-full'>
        <div>
            <Logo
                iconStyles={iconStyles}
                pStyles={pStyles}
                spanStyles={spanStyles}
            />
        </div>
    </nav>
  )
}

export default BarMenu