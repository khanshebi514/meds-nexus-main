import Button from "@/ui/button";
import { Col, Row } from "antd";
import billingAudit from '@/images/medical-audit-services/billing-audit.png'
import bg_Header from './hero_bgr.webp'
import Image from "next/image";

export default function AuditHeader() {
  return (
    <div className="bg-header w-full flex justify-evenly items-center gap-3 " style={{backgroundImage:`url(${bg_Header})`,
    
    backgroundPosition:'center'}}>
      <Row gutter={[6,6]} align={'medium'} justify={'space-around'} className="mt-5"> 
        <Col span={20} md={8}>
         <h1 className="font-bold text-2xl md:text-4xl text-blue-900 my-5">MEDICAL BILLING AUDIT SERVICES | <span className="text-[#fc5d61]">COMPLIANCE AUDIT</span></h1>
         <p className="font-normal text-lg mb-5 text-stone-600">MedsIT Nexus offers a fool proof solutions for auditing medical claims by combining verified audit procedures, knowledgeable personnel, and the most reliable analytics technology</p>
         <Button className={`bg-blue-900 text-lg px-3 py-1 rounded-md mt-3`}>
          Learn More
         </Button>
        </Col>
        <Col span={20} md={8}>
        <Image src={billingAudit} style={{width:'470px', objectFit:'cover'}}/>
        </Col>
      </Row>
    </div>
  )
}
