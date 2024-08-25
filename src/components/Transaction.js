import React from 'react'
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid'
import { useGetAccountQuery } from '../features/apiSlice'
import useScreenSize from '../features/useScreenSize'

const Transaction = ({ containerStyle }) => {
    const { data: user = [], isLoading } = useGetAccountQuery()

    if (isLoading) return <p>Loading</p>

    const transactions = user.map(account => account.transactions)

    // Add zeros if time is a single digit
    const addZero = (time) => {
        if (time < 10) { time = "0" + time }
        return time
    }

    return (
        <div className={`flex flex-col ${containerStyle}`}>
            <h1 className='text-xl font-display text-white tablet:text-2xl'>Transactions</h1>

            <div className={`flex flex-col items-start gap-2 w-full overflow-y-auto mt-1 ml-3 `}>

                {transactions.map((trans, index) => (

                    transactions[index].map(account => {

                        const newDate = new Date(account.date)
                        const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                        return (
                            <>
                                <p className='text-left w-full text-slate-400 text-xs tablet:text-base laptop:text-sm'>{weekday[newDate.getDay()]},  {newDate.getDate()} {month[newDate.getMonth()]}</p>
                                <div className='flex w-full justify-between text-white mt-2'>
                                    <div className='flex items-center tablet:items-end gap-4'>
                                        <p className='text-gray-400 text-xs tablet:text-base laptop:text-sm'>{`${addZero(newDate.getHours())}:${addZero(newDate.getMinutes())}`}</p>
                                        <span className='flex items-center gap-2'>
                                            <i className='bg-white/25 rounded-full p-1'><ArrowsRightLeftIcon className={`h-3 w-3 tablet:h-4 tablet:w-4`} /></i>
                                            <p className='text-xs w-[100%] tablet:text-base laptop:text-sm'>{account.description}</p>
                                        </span>
                                    </div>
                                    <p className='text-xs tablet:text-base laptop:text-sm'>£ {account.amount}</p>
                                </div>
                            </>
                        )
                    })
                ))}
            </div>
        </div>
    )
}

export default Transaction