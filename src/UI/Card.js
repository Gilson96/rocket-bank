import React from 'react'
import visaLogo from '../assets/Logo-visa-icon-PNG.png'

const Card = ({ styles, children, props, accountType, accountNumber, balance }) => {
    return (
        <section className={`flex flex-col ${styles} w-[16rem] h-[10rem]  rounded-lg shadow-md justify-between px-[1rem] py-[1rem] text-lg font-bold ring-1 ring-slate-950 `} {...props}>
            <div className='flex justify-between items-center'>
                <p className='font-display uppercase font-bold'>{accountType} Account</p>
                <p>£ {balance}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p>xxxx xxxx {accountNumber}</p>
                <img src={visaLogo} alt='visa logo' className='h-9 w-14' />
            </div>
        </section>
    )
}

export default Card