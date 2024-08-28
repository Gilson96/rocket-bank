import { Select } from '@chakra-ui/react'
import { useState } from 'react'
import { CurrencyPoundIcon } from '@heroicons/react/24/outline';
import { InputGroup, InputLeftElement, NumberDecrementStepper, NumberInputStepper, NumberIncrementStepper, NumberInputField, NumberInput, Button, Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { useGetAccountQuery, useUpdateAccountBalanceMutation, useCreateTransactionMutation } from '../features/apiSlice'
import MyButton from '../UI/Button'

const Transfer = ({ onClose }) => {
    const [submitted, setSubmitted] = useState(false)
    const [fromId, setFromId] = useState()
    const [toId, setToId] = useState()
    const { data: user = [], isLoading } = useGetAccountQuery()
    const [createTransaction] = useCreateTransactionMutation()
    const [editAccountBalance] = useUpdateAccountBalanceMutation()

    if (isLoading) return <p>Loading</p>

    const handleSubmit = async (e) => {
        e.preventDefault();

        // built-in feature that helps
        // retrieving the form values
        const formData = new FormData(e.target)
        const userData = Object.fromEntries(formData.entries()); // {firstName: Gilson}

        // stores amount selected by the user
        const amountToTransfer = userData


        // finds from Account 
        const fromAccount = user.find(account => account.id === parseInt(fromId))

        // finds to Account
        const toAccount = user.find(account => account.id === parseInt(toId))

        // gets from Account's balance and subtract with the amount received from the select 
        const sendAmount = fromAccount.balance - parseInt(amountToTransfer.balance)

        // gets to Account's balance and subtract with the amount received from the select
        const receiveAmount = toAccount.balance + parseInt(amountToTransfer.balance)

        // This block of code does the magic!!
        // It updates the account's balance
        try {
            const newFromAccountBalance = await editAccountBalance({ id: fromId, body: { balance: sendAmount } }).unwrap()

            const newToAccountBalance = await editAccountBalance({ id: toId, body: { balance: receiveAmount } }).unwrap()

            if (newFromAccountBalance && newToAccountBalance) {
                return (
                    setSubmitted(true),
                    await createTransaction({
                        userId: 1,
                        body: {
                            id: Math.floor(Math.random() * 101),
                            description: `Tranfer from ${fromAccount.accountType} to  ${toAccount.accountType}`,
                            date: new Date(),
                            amount: amountToTransfer.balance
                        }
                    }).unwrap()
                )
            }

        } catch (error) {
            console.log(error)
        }

    }


    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 py-[2%] px-[3%]'>
            {!submitted ?
                <>
                    <p className='text-sm italic'>Please set the amount desired to tranfer</p>

                    {isLoading ?

                        <Box
                            padding='6' boxShadow='lg' bg='black'
                            width={'100%'}
                        >
                            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                        </Box>

                        :
                        <>

                            <div>
                                <p>From</p>
                                <Select
                                    placeholder='Select account'
                                    textColor={'grey'}
                                    value={fromId}
                                    onChange={e => { setFromId(e.target.value) }}
                                    required
                                >
                                    {user.map(account => (
                                        <option value={account.id} className='text-black'>{account.accountType} account</option>
                                    ))}
                                </Select>
                            </div>
                            <div>
                                <p>To</p>
                                <Select
                                    placeholder='Select account'
                                    textColor={'grey'}
                                    value={toId}
                                    onChange={e => { setToId(e.target.value) }}
                                    required
                                >
                                    {user.map(account => (
                                        <option value={account.id} className='text-black'>{account.accountType} account</option>
                                    ))}
                                </Select>
                            </div>

                            <InputGroup marginTop={'3%'} >
                                <InputLeftElement pointerEvents='none'>
                                    <CurrencyPoundIcon className='h-6 w-6 text-gray-400' />
                                </InputLeftElement>
                                <NumberInput allowMouseWheel defaultValue={0} min={0} className='w-[27rem]'>
                                    <NumberInputField name='balance' width={'100%'} textAlign={'right'} paddingRight={'15%'} required />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </InputGroup>

                            <div className='flex w-full justify-end gap-2 mt-2'>
                                <Button className='border bg-transparent border-white  text-white rounded-md w-[5rem] ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-200 hover:bg-white/15' onClick={onClose}>Close</Button>
                                <MyButton
                                    styles={'cursor-pointer border-none bg-mediumBlue'}
                                    text={'Submit'}

                                />
                            </div>
                        </>
                    }
                </>
                :
                <>
                    <div className='flex flex-col justify-center items-center h-[10rem] w-full gap-2'>
                        <p className='font-display font-bold text-xl'>Successfully transfered.</p>
                        <p className='italic text-xs'>(Refresh to see the magic)</p>
                        <CheckCircleIcon className='h-12 w-12 text-green-300' />
                    </div>
                </>
            }
        </form>
    )
}

export default Transfer