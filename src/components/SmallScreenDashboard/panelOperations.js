import React, { useState } from 'react'

const PanelOperations = ({ icon, text, onOpen, setIsActive, isActive }) => {

    return (
        <div className='flex w-full gap-2 items-center border p-2 rounded-full cursor-pointer medium-phone:justify-evenly' onClick={() => { onOpen(); setIsActive(isActive) }}>
            <div className='bg-white small-phone:h-[1rem] small-phone:w-[1rem] medium-phone:h-[1.5rem] medium-phone:w-[1.5rem] tablet:h-[2rem] tablet:w-[2rem]  rounded-full'>
                <p>{icon}</p>           
            </div>
           <p className='text-white small-phone:text-xs medium-phone:text-sm tablet:text-lg'>{text}</p>
        </div>
    )
}

export default PanelOperations