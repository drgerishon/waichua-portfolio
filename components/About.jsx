/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import profie from '../public/assets/profile.png';

const About = () => {
  return (
    <div id='about' className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>
            I build new projects just to tickle my brain. Am personate about web
            development and offer all solutions related to fullstack web
            development
          </p>
          <p className='py-2 text-gray-600'>
            Innovative, task-driven experience in Web design and development in
            identifying web-based user interactions along with designing &
            implementing highly responsive user interfaces. Proficient in
            translating design & wireframes into high-quality code. Creating
            user interfaces and impelementing new features based on users
            feedback. Adept at monitoring & maintaining frontend perfomance,
            troubleshooting & debugging Simple to complex issues. I have 3 years
            of experince building and designing Web Applications, using
            technologies such as React, Tailwind, Next js, Node js and GraphQ
          </p>
          {/* <a href='/#projects' className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</a> */}
          <Link href="/Waichua cv.pdf" download={true}>
            <a target='_blank'>
            <div
              className="group flex items-center justify-center
                my-8 text-white px-6 py-3 font-bold
                uppercase rounded-md tracking-wider cursor-pointer bg-sky-500 hover:bg-sky-700"
            >
              Click to view my CV
            </div>
            </a>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center py-4 hover:scale-105 ease-in duration-300'>
           <Image src={profie} width="144px" height="234px " alt=''/>
        </div>
      </div>
    </div>
  );
};

export default About;
