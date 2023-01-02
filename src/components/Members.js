import React from 'react'

//import navigation data
import {membersData} from '../data';

const Members = () => {
    return (
        <section className='my-[70px] xl:my-[150px]' id='members'>
            <div className='container mx-auto'>
                <div className='text-center'>
                    <h2 className='h2 mb-6 xl:mb-12'>
                        Founders of L7mp Technologies
                    </h2>
                </div>

                <div className='grid grid-cols-1 gap-[50px] xl:grid-cols-3 md:grid-cols-2'>
                    {membersData.map((member, index) => {
                        const {image, name, title} = member
                        return (
                            <div className='w-full max-w-[530px] h-[260px] relative flex flex-col items-center justify-center xl:flex-row mx-auto' key={index}>
                                <div className='space-y-8 group text-center'>
                                    {/* Image */}
                                    <div className='w-32 h-32 -mt-16 mx-auto rounded-[2rem] overflow-hidden'>
                                        <img src={image} alt=''></img>
                                    </div>

                                    {/* Text */}
                                    <div className='text-center'>
                                        <h5 className='h5 text-xl text-gray-800 font-semibold'>
                                            {name}
                                        </h5>
                                        <span className='text-sm text-gray-500'>
                                            {title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Members;