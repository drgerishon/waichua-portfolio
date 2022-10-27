import React from 'react'
import Image from 'next/image'

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
                            <Image src="/../public/assets/experience/nextjs.png" width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Next.Js</h3>
                        </div>
                    </div>
                </div>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/experience/node.png" width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>Node.js</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/experience/javascript.png" width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/experience/html.png" width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/experience/css.png" width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>SASS</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/experience/github.png" width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>GitHub</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/experience/graphql.png" width="64px" height="64px " alt=''/>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <h3>GraphQl</h3>
                        </div>
                    </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-2 justify-center items-center'>
                        <div className='m-auto'>
                            <Image src="/../public/assets/experience/tailwind.png" width="64px" height="64px " alt=''/>
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