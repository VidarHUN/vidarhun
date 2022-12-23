import React from 'react'

//import navigation data
import {stunnerData} from '../data';

const Stunner = () => {
    const {image, title, subtitle} = stunnerData;
    return (
        <section className='my-[30px] xl:mt-[100px]' id='stunner'>
            <div className='container mx-auto'>
                <div className='bg-accent-secondary/[15%] rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left xl:gap-x-[60px] xl:pb-0'>
                    {/* Image section */}
                    <div className='flex-1'>
                        <img src={image} alt=''></img>
                    </div>

                    {/* Text */}
                    <div className='flex-1 xl:pr-12'>
                    <h2 className='h2 mb-10'>
                            {title}
                        </h2>
                        <p className='max-w-[474px] mx-auto xl:mx-0'>
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stunner;