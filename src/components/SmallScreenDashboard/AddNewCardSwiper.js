import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import Card from '../../UI/Card';
import { EffectCards } from 'swiper/modules';

const AddNewCardSwiper = ({setCardType, setIsActive, isActive}) => {
    return (
        <Swiper
            effect={'cards'}
            modules={[EffectCards]}
            className="h-[13rem] w-full "
        >
            <SwiperSlide className='text-white'>
                <div className='flex flex-col-reverse justify-center items-center gap-3 '>
                    <Card
                        styles={`small-phone:w-[14rem] small-phone:h-[10rem] small-phone:text-sm large-phone:w-[17rem] large-phone:h-[11rem] large-phone:text-lg cursor-pointer bg-gradient-to-tr from-red-950 from-1% via-red-500 via-70% to-red-200 to-90% cursor-pointer ${isActive === 'saving' && 'border-2 border-yellow-200'}`}
                        props={{
                            onClick: () => {
                                setCardType('saving');
                                setIsActive('saving');
                            }
                        }}
                        accountType={'Saving'}
                    />
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='flex flex-col-reverse justify-center items-center gap-3'>
                    <Card
                        styles={`small-phone:w-[14rem] small-phone:h-[10rem] small-phone:text-sm large-phone:w-[17rem] large-phone:h-[11rem] large-phone:text-lg cursor-pointer bg-gradient-to-tr from-orange-950 from-1% via-orange-500 via-70% to-orange-200 to-90% cursor-pointer ${isActive === 'credit' && 'border-2 border-yellow-200'}`}
                        props={{
                            onClick: () => {
                                setCardType('credit');
                                setIsActive('credit');
                            }
                        }}
                        accountType={'Credit'}
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default AddNewCardSwiper