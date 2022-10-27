import React from 'react'
import Image from 'next/image'
import node from '../public/assets/experience/node.png'
import github from '../public/assets/experience/github.png'
import react from '../public/assets/experience/reactImage.png'
import html from '../public/assets/experience/html.png'
import tailwind from '../public/assets/experience/tailwind.png'
import graphql from '../public/assets/experience/graphql.png'
import css from '../public/assets/experience/css.png'
import nextjs from '../public/assets/experience/nextjs.png'
import javascript from '../public/assets/experience/javascipt.png'



const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                skills
            </p>
            <h2 className="py-4">What I can Do?</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={nextjs} width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Next.Js</h3>
                        </div>
                    </div>
                </div>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={node} width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Node.js</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={javascript} width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={html} width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={react} width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>React JS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={css} width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>SASS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={github} width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>GitHub</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={graphql} width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>GraphQl</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src={tailwind} width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills