import React from 'react'
import Card from '../../UI/Card'
import { useGetAccountQuery } from '../../features/apiSlice'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { EffectCards } from 'swiper/modules';
import { SkeletonCircle, SkeletonText, Box } from '@chakra-ui/react'
const Panel = () => {
    const { data: user = [], isLoading } = useGetAccountQuery()

    if (isLoading) return <p>Loading</p>

    return (
        <>
            <div className='flex w-full h-full gap-2 flex-col'>
                <div className='w-full h-auto'>
                    <Swiper
                        effect={'cards'}
                        modules={[EffectCards]}
                        className="h-auto small-phone:w-full"
                    >
                        {user.map(account => (
                            <SwiperSlide>
                                <div className='flex items-center p-2 small-phone:justify-center'>
                                    {isLoading ?
                                        <Box
                                            padding='6' boxShadow='lg' bg='black'
                                            border={'1px solid white'}
                                            width={'100%'}
                                        >
                                            <SkeletonCircle size='10' />
                                            <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
                                        </Box>
                                        :
                                        <Card
                                            styles={`${account.color} text-white small-phone:w-[14rem] small-phone:h-[9rem] small-phone:text-sm sm:w-[18rem] sm:h-[10rem] large-phone:h-[11rem] large-phone:w-[19rem] large-phone:text-lg
                                        tablet:h-[12rem] tablet:w-[19rem] tablet:text-xl`}
                                            accountNumber={account.accountNumber}
                                            accountType={account.accountType}
                                            balance={account.balance}
                                        />
                                    }
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </>
    )
}

export default Panel