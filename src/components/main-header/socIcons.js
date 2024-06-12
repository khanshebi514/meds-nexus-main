import { Col, Row } from "antd";
import {PhoneOutlined , FacebookOutlined, TwitterOutlined, YoutubeOutlined, LinkedinOutlined, InstagramOutlined } from "@ant-design/icons"
import Button from "@/ui/button";

export default function SocIcons() {
  return (
    <>
    <Row gutter={[8,8]} className="pt-2 md:h-[70px] bg-blue-900 text-white flex justify-center items-center h-[100px]">
          <Col md={8} xs={24} justify={'center'} align='middle'>
          <p>Premier Medical Billing & Coding Services</p>

          </Col>
             
          <Col md={8} xs={24}  className="md:flex justify-center items-center gap-3">
                <Col>
                <span className="flex justify-center items-center gap-2"> <PhoneOutlined/> <p> (516) 665-1869</p>
                <p> Contact Us</p>
                </span>
               </Col>        
      

               <Col justify={'center'} align={'middle'} className="mt-2 mb-2 md:mb-0 ">
               <Button size='medium' className='bg-red-700 rounded-lg '>Get Started</Button>
               </Col>
          </Col>

          <Col md={8} sm={0} justify={'center'} align={'middle'} className="md:flex gap-3 justify-center items-center hidden ">
          <FacebookOutlined style={{fontSize:'30px'}}/>
          <TwitterOutlined style={{fontSize:'30px'}}/>
          <InstagramOutlined style={{fontSize:'30px'}}/>
          <LinkedinOutlined style={{fontSize:'30px'}}/>
          <YoutubeOutlined style={{fontSize:'30px'}}/>
          </Col>
          
    </Row>
    
    </>
  )
}
