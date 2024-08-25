import { useState } from 'react'
import Card from '../../UI/Card'
import { useDisclosure } from '@chakra-ui/react'
import { ArrowPathIcon, ArrowsUpDownIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import MyModal from '../Modal'
import PanelOperations from './PanelOperations'
import Form from '../Form';
import Transfer from '../Transfer';
import { useGetAccountQuery } from '../../features/apiSlice'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, EffectCards } from 'swiper/modules';
import useScreenSize from '../../features/useScreenSize';


const Panel = () => {
    const [isActive, setIsActive] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { data: user = [], isLoading } = useGetAccountQuery()
    const screenSize = useScreenSize()

    if (isLoading) return <p>Loading</p>

    console.log(screenSize)

    return (
        <section className='flex flex-col justify-start items-start w-[100%] ml-[2%]'>
            <Swiper
                effect={'cards'}
                navigation={true}
                modules={[Navigation, EffectCards]}
                className="h-auto w-[30rem] medium-laptop:w-[37rem]"
            >
                {user.map(account => (
                    <SwiperSlide>
                        <div className='flex items-center py-2 px-10 justify-center'>
                            <Card
                                styles={`${account.color} w-[20rem] h-[13rem] text-white ml-[3%] medium-laptop:w-[25rem] medium-laptop:h-[15rem] medium-laptop:text-xl`}
                                accountNumber={account.accountNumber}
                                accountType={account.accountType}
                                balance={account.balance}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='flex justify-between mt-[5%] w-[100%] gap-7'>

                <PanelOperations
                    isActive={'create'}
                    setIsActive={setIsActive}
                    text={'Add New card'}
                    styles={'bg-darkBlue text-white'}
                    icon={<PlusCircleIcon className='h-7 w-7 text-white medium-laptop:h-8 medium-laptop:w-8' />}
                    onOpen={onOpen}
                />
                {isActive === 'create' && <MyModal isOpen={isOpen} onClose={onClose} title={'Add New card'}><Form onClose={onClose} /></MyModal>}

                <PanelOperations
                    isActive={'transfer'}
                    setIsActive={setIsActive}
                    text={'Tranfer Money'}
                    styles={'bg-darkBlue text-white'}
                    icon={<ArrowsUpDownIcon className='h-7 w-7 text-white medium-laptop:h-8 medium-laptop:w-8' />}
                    onOpen={onOpen}
                />
                {isActive === 'transfer' && <MyModal isOpen={isOpen} onClose={onClose} title={'Transfer Money'}><Transfer /></MyModal>}

            </div>

        </section>
    )
}

export default Panel