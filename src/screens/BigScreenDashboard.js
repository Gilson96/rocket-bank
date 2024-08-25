import React from 'react'
import Panel from '../components/BigScreenDashboard/Panel'
import Transaction from '../components/Transaction'
import { useGetUserQuery } from '../features/apiSlice'
import Logo from '../UI/logo'

const BigScreenDashboard = () => {
  const { data: account = [], isLoading } = useGetUserQuery()

  if (isLoading) return <p>Loading</p>

  console.log(account)

  return (
    <section className='flex flex-col px-[2%] py-[1%] laptop:h-screen overflow-hidden                                                w-full items-start'>
      <div className='mt-3'>
        <Logo
          iconStyles={'h-7 w-7 tablet:h-[2rem] tablet:w-[2rem]'}
          pStyles={'text-2xl text-white tablet:text-3xl '}
          spanStyles={'text-lg text-white tablet:text-xl'}
        />
      </div>
      <div className='flex w-full h-full justify-between '>

        <div className='flex flex-col gap-3 mt-10'>
          {/* <div className='flex items-end justify-between w-full sm:ml-[2%] sm:mt-[2%]'>
            <h1 className='text-black font-display w-full text-3xl font-bold'>Hi, {account[0].name}</h1>
          </div> */}

          <Panel />
        </div>

        <div className='w-[40%]'>
          <Transaction containerStyle={'items-start gap-2 w-full mt-10 p-2'} />
        </div>

      </div>

    </section>
  )
}

export default BigScreenDashboard