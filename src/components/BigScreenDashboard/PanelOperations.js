import React from 'react'

const PanelOperations = ({  setIsActive, isActive, value, text, styles, onOpen, icon }) => {

    return (
        <div>
            <div className={`flex flex-col h-[9rem] w-[14rem] items-start justify-center gap-2 ${styles} rounded-xl px-[5%] cursor-pointer medium-laptop:h-[11rem] medium-laptop:w-[18rem]`} onClick={() => { onOpen(); setIsActive(isActive) }}>
                <i className='bg-white/25 rounded-full p-2'>{icon}</i>
                <p className='text-lg medium-laptop:text-xl'>{text}</p>
            </div>
        </div>
    )
}

export default PanelOperations