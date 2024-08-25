import React from 'react'
import useScreenSize from '../features/useScreenSize'
import SmallScreenDashboard from './SmallScreenDashboard'
import BigScreenDashboard from './BigScreenDashboard'

const Dashboard = () => {
  const screenSize = useScreenSize()

  return (
    <section className='flex flex-col h-full w-full'>
      {screenSize.width > 1000 ?

        <BigScreenDashboard />
        :
        <SmallScreenDashboard />
      }

    </section>
  )
}

export default Dashboard