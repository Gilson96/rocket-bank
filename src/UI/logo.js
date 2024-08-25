import React from 'react'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'

const logo = ({iconStyles, pStyles, spanStyles}) => {
  return (
    <div className='flex items-end'>
         <p><RocketLaunchIcon className={` text-lightOrange ${iconStyles}`}/></p>
         <p id='logoFont' className={`${pStyles} italic`}>Rocket<span className={`${spanStyles}`}>Bank</span></p>
    </div>
  )
}

export default logo