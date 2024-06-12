
import { Col, Row } from "antd";
import Image from "next/image";


export default function RepeatedPage({image, Heading, Text, background, children, width, button ,...props}) {
  return (
    <>
      <Row justify={'space-around'} align={'middle'} className={`text-center md:text-start gap-4 flex items-center justify-around flex-col md:flex-row my-10 ${background}`}>

        <Col span={20} md={10} >
        {children}
        <h1 className="font-bold text-2xl text-blue-900" {...props}>{Heading}</h1>
        <p className="font-normal text-lg text-stone-800" {...props}>{Text}</p>
        {button}
        </Col>

        <Col span={20} md={10} >
           <Image src={image} {...props} width={width}/>
           {button}
        </Col>

      </Row>
    </>
  )
}
