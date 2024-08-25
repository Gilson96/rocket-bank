import { useState, useEffect } from 'react'
// import { Button, CircularProgress } from '@chakra-ui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
// Import Swiper React components
import MyButton from '../UI/Button'
import { useCreateAccountMutation } from '../features/apiSlice';
import { useGetUserQuery } from '../features/apiSlice';
import { Button } from '@chakra-ui/react';
import useScreenSize from '../features/useScreenSize';
import AddNewCardSwiper from './SmallScreenDashboard/AddNewCardSwiper';

const Form = ({ children, onClose }) => {
  const [submitted, setSubmitted] = useState(false)
  const [isActive, setIsActive] = useState('')
  const [feedback, setFeedback] = useState(false)
  const [cardType, setCardType] = useState('')
  const [createAccount] = useCreateAccountMutation()
  const { data: user = [] } = useGetUserQuery(1)
  const screenSize = useScreenSize()

  // useEffect(() => {
  //   // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
  //   const timeoutId = setTimeout(() => {
  //     setFeedback(true);
  //     setSubmitted(true)
  //   }, 8000);

  //   // Cleanup function to clear the timeout if the component unmounts
  //   return () => clearTimeout(timeoutId);
  // }, []); // Empty dependency array ensures the effect runs only once

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cardType === 'saving') {
      const newCard = {
        id: Math.floor(Math.random() * 101),
        accountType: cardType,
        accountNumber: Math.floor(Math.random() * 4999) + 4000,
        balance: 0,
        color: "bg-gradient-to-tr from-red-950 from-1% via-red-500 via-70% to-red-200 to-90%",
        transactions: [{
          id: Math.floor(Math.random() * 101),
          description: "Saving account created",
          date: new Date(),
          amount: 0
        }]
      }
      createAccount({ userId: 1, body: newCard })
      setSubmitted(true)
    }

    if (cardType === 'credit') {
      const newCard = {
        id: Math.floor(Math.random() * 101),
        accountType: cardType,
        accountNumber: Math.floor(Math.random() * 4999) + 4000,
        balance: 0,
        color: "bg-gradient-to-tr from-orange-950 from-1% via-orange-500 via-70% to-orange-200 to-90%",
        transactions: [{
          id: Math.floor(Math.random() * 101),
          description: "Credit account created",
          date: new Date(),
          amount: 0
        }]
      }
      createAccount({ userId: 1, body: newCard })
      setSubmitted(true)
    }
  }

  return (
    <form className='flex w-full flex-col justify-center items-center' onSubmit={handleSubmit}>

      {!submitted ?
        <>
          <div>
            <h1>What type of accounts</h1>
            <hr className='w-full h-[px] bg-lightBlue' />
          </div>
          <div className='flex flex-col w-full h-[15rem] mt-[5%] gap-5 justify-center'>
          {screenSize.width < 1000 ? 
            <AddNewCardSwiper
              setCardType={setCardType}
              setIsActive={setIsActive}
              isActive={isActive}
            />
            :
            <AddNewCardSwiper
              setCardType={setCardType}
              setIsActive={setIsActive}
              isActive={isActive}
            />
          }
          </div>
          <div className='flex w-full justify-end gap-2'>
            <Button className='border bg-transparent border-white  text-white rounded-md w-[5rem] ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-200 hover:bg-white/15' onClick={onClose}>Close</Button>
            <MyButton
              styles={'cursor-pointer border-none bg-mediumBlue'}
              text={'Submit'}
              features={{
                disabled: !isActive ? true : false,
              }}
            />
          </div>
        </>
        :
        // <>
        //   {!feedback ? <div className='flex flex-col justify-center items-center h-[10rem] w-full gap-2'>
        //     <p className='font-display font-bold text-xl'>Creating new card...</p>
        //     <CircularProgress isIndeterminate color='green.300' />
        //   </div>
        //     :

        <div className='flex flex-col justify-center items-center h-[10rem] w-full gap-2'>
          <p className='font-display font-bold text-xl'>Successfully created</p>
          <CheckCircleIcon className='h-12 w-12 text-green-300' />
        </div>

      }

    </form>
  )
}
export default Form