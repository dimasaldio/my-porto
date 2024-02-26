'use client'

import Image from 'next/image';
import CardComponent from '@/component/card';
import dummyData from '@/dummy/dummy';
import { Button } from 'antd';
import { LinkedinFilled, GithubFilled, PhoneFilled, MailFilled } from '@ant-design/icons';
import MyModal from '@/component/modal';
import { useState } from 'react';

interface Data {
  title: string;
  image: string;
  link?: string;
  tech: string[];
  part?: string;
  description?: string;
  purpose?: string;
  technology?: string;
}

const Home: React.FC = () => {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState<Data>(dummyData[0])
  const onCancel = () => {
    setOpen(false)
  }
  const handleCLick = (d: Data) => {
    setOpen(true)
    setData(d)
  }
  return (
    <main className=" w-full text-[#011f4b] ">
      {/* page 1 */}
      <div className="bg-[#b3cde0] flex flex-col justify-start items-center text-center h-[700px] md:h-[900px] lg:h-screen lg:px-[8rem] relative overflow-hidden ">
        <div className="absolute top-[80%] left-[50%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[450px] lg:h-[450px] bg-[#011f4b] transform -translate-x-[50%] -translate-y-[50%] rotate-[-8deg] opacity-[80%] rounded-full"></div>
        <div className='my-8 md:self-center'>
          <p className="text-[4rem] md:text-[6rem] lg:text-[5rem] font-serif lg:font-extrabold font-bold md:tracking-wide">DIMAS ALDIO</p>
          <div>
            <p className="md:text-[2rem] text-[1.5rem] font-sans z-10">Web Developer</p>
            <p className="md:text-[4rem] text-[3rem] italic font-sans lg:font-semibold z-10">PORTFOLIO</p>
          </div>
        </div>
        <div className="w-[320px] md:w-[500px] lg:w-[450px] h-auto absolute -bottom-20 md:-bottom-40 lg:-bottom-40">
          <Image src="/images/dimas.png" className='w-full' alt="dimas" width={800} height={800} />
        </div>
      </div>
      {/* page 2 */}
      <div className="bg-[#6497b1] w-full h-full lg:h-full md:h-full text-[#011f4b] text-center lg:px-[100px] py-8">
        <div className='md:pb-8'>
          <h1 className="lg:text-[4rem] md:text-[5rem] text-[3rem] font-semibold">Projects</h1>
          <MyModal open={open} onCancel={onCancel} image={data.image} title={data.title} description={data.description} technology={data.technology} purpose={data.purpose} part={data.part} />
          <p className='tracking-wide'>Here are some of the <span className='border-b-4'>projects</span> I worked on</p>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-8 md:gap-8 gap-8 justify-items-center mx-4'>
          {dummyData.map((data, index) => (
            <CardComponent key={index} title={data.title} image={data.image} link={data.link} tech={data.tech} part={data.part} handleClick={() => handleCLick(data)} />
          ))}
        </div>
      </div>
      {/* page 3 */}
      <div className='w-full h-full bg-[#b3cde0] lg:px-[100px] px-8'>
        <div className='md:grid md:grid-cols-2'>
          <div>
            <p className="md:text-[3.5rem] text-[2rem] font-semibold pt-10 border-b-4 border-[#011f4b] pb-8">Reach out if you want to create impactful web together.</p>
            <p className='text-[1.5rem] md:pt-8 pb-4 pt-4'>To see more of my work, please visit my socials:</p>
            <div className='flex justify-start'>
              <Button href='https://linkedin.com/in/dimasaldio' target='_blank' type='primary' size='large' className='mr-4' style={{ backgroundColor: '#03396c' }} icon={<LinkedinFilled />} />
              <Button href='https://github.com/dimasaldio' target='_blank' type='primary' size='large' style={{ backgroundColor: '#03396c' }} icon={<GithubFilled />} />
            </div>
          </div>
        </div>
        <div className='md:grid md:grid-cols-3 py-4'>
          <div className='md:col-start-3'>
            <div className='flex items-center md:w-64 lg:mt-8 my-4'>
              <div className='border-4 md:w-[50px] w-[30px] h-[30px] md:h-[50px] overflow-hidden rounded-full flex items-center justify-center'>
                <PhoneFilled className='md:text-[2rem] text-[1rem] text-center' />
              </div>
              <div className='ml-4 flex flex-col justify-center font-semibold'>
                <p className='text-[1rem]'>Phone</p>
                <p className='text-[1rem]'>+62 821 3677 6781</p>
              </div>
            </div>

            <div className='flex items-center md:w-64'>
              <div className='border-4 md:w-[50px] w-[30px] h-[30px] md:h-[50px] overflow-hidden rounded-full flex items-center justify-center'>
                <MailFilled className='md:text-[2rem] text-[1rem] text-center' />
              </div>
              <div className='ml-4 mb-4 flex flex-col justify-center font-semibold'>
                <p className='text-[1rem]'>Email</p>
                <p className='text-[1rem]'>dimasaldio@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;