import React, { useState } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import Panel from '../components/SmallScreenDashboard/Panel'
import Logo from '../UI/logo'
import Transaction from '../components/Transaction'
import { useGetUserQuery } from '../features/apiSlice'
import PanelOperations from '../components/SmallScreenDashboard/panelOperations'
import { useDisclosure } from '@chakra-ui/react'
import MyModal from '../components/Modal'
import Form from '../components/Form'
import Transfer from '../components/Transfer'

const SmallScreenDashboard = () => {
  const [isActive, setIsActive] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: user = [] } = useGetUserQuery()

  return (
    <section className='flex flex-col px-[7%] py-[8%] w-full small-phone:h-full tablet:h-full'>

      <div className='flex items-center w-full'>
        <div className='flex h-full w-full items-center justify-between py-[2%] '>
          <Logo
            iconStyles={'h-7 w-7 tablet:h-[2rem] tablet:w-[2rem]'}
            pStyles={'text-2xl text-white tablet:text-3xl '}
            spanStyles={'text-lg text-white tablet:text-xl'}
          />
        </div>
      </div>

      <div className='flex flex-col items-start h-auto w-full py-[4%] gap-4'>
        {/* <p className='font-display uppercase font-bold w-full text-left text-white small-phone:ml-[10%] small-phone:text-xl '>Hi, {user[0].name}</p> */}
        <Panel />

        <div className='w-full flex gap-3'>
          <PanelOperations
            icon={<PlusCircleIcon className='small-phone:h-[1rem] small-phone:w-[1rem] medium-phone:h-[1.5rem] medium-phone:w-[1.5rem] tablet:h-[2rem] tablet:w-[2rem] ' />}
            text='Add New Card'
            setIsActive={setIsActive}
            onOpen={onOpen}
            isActive={'create'}

          />
          {isActive === 'create'
            &&
            <MyModal isOpen={isOpen} onClose={onClose} title={'Add new card'} width={'90%'}>
              <Form onClose={onClose} />
            </MyModal>
          }

          <PanelOperations
            icon={<PlusCircleIcon className='small-phone:h-[1rem] small-phone:w-[1rem] medium-phone:h-[1.5rem] medium-phone:w-[1.5rem] tablet:h-[2rem] tablet:w-[2rem]' />}
            text='Transfer Money'
            setIsActive={setIsActive}
            onOpen={onOpen}
            isActive={'transfer'}

          />
          {isActive === 'transfer' && <MyModal isOpen={isOpen} onClose={onClose} title={'Add new card'} width={'90%'}><Transfer onClose={onClose} /></MyModal>}
        </div>
      </div>
      
      <div className='flex items-center h-auto w-full'>
        <Transaction containerStyle={'w-full tablet:px-3'} />
      </div>

    </section>
  )
}

export default SmallScreenDashboard