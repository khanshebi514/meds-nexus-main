'use client'
import AnimateText from "@/ui/animateText";
import Button from "@/ui/button";
import { Col, Row } from "antd";
import Image from "next/image";
import headerImage from '@/images/slider-image-2.png'

export default function HeaderHome() {
  return (
    <>
    <Row gutter={[8,8]} className="flex justify-around items-center p-3 md:p-2 ">
      <Col md={12} align={'center'} className="mt-12">
         <section className="mt-3 text-start flex flex-col items-center md:items-start">
            <h1 className="font-bold text-2xl md:text-4xl mb-3 text-blue-900">MEDSIT-Expert RCM Services For Confident Healthcare Providers To</h1>
            <div className="font-bold text-2xl text-red-600 text-left"><span className=" "></span>{<AnimateText/>}</div>
            <p className="mt-3 font-normal text-xl mb-3 text-center md:text-start">
            Stop settling for mediocre revenue cycle management. Choose MedsIT Nexus – the highest-rated company in the nation! Our exceptional team provides top-notch communication, lightning-fast response times, and expert claims handling. We’re dedicated to maximizing your revenue and streamlining your operations with unparalleled follow-up and denial management. Join our satisfied clients and experience the MedsIT Nexus difference today!
            </p>

            <Button size="large" className='round-md bg-blue-900 px-3 rounded-md text-lg w-[200px]'>Our Specilties</Button>
         </section>
      </Col>
      <Col md={8} justify={'center'} className="p-3">
        
        <Image src={headerImage} width={370}/>

      <h2>What is your Specilites ? </h2>
                <select className='p-2 border-2 border-black'>
                    <option value='selcect'>Select Your Specielty</option>
                    <option value='acupuncature'>Acupuncature</option>
                    <option value='distest'>Dintest</option>
                    <option value='ENT'>Ear nose & throat</option>

                </select>
                <button className='bg-blue-900 text-white ml-5 px-5 py-2 rounded-lg text-lg my-2'>Get a Quote</button>
      </Col>
    </Row>
    </>
  )
}

