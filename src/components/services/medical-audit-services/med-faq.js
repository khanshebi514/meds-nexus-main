
import { Collapse, Panel } from "antd";
import { Col, Row } from "antd";
import faqImg from "@/images/medical-audit-services/faqs.png"
import Image from "next/image";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import { RotateLeftOutlined, TruckFilled } from "@ant-design/icons";


export default function MedFaq() {
  // const textFirst = 'Our company maintains security and compliance measures keeping emails and passwords encrypted to protect the content and attachment of the email when it reaches unintended recipients';

  // const textSecond = 'MedsIT Nexus experienced training team keeps medical auditors updated about the changes and updates in existing regulations by conducting training sessions periodically';

  // const textThird = 'OIG, the Centers for Medicare & Medicaid Services, the Department of health & human services, and AAPC are included as the compliance reference resources because these enterprises provide educative articles, auditing software, notifications about upgrades, and compliance concepts';

  // const textFourth = 'The process involves the assessment of the claims ensuring they are submitted in compliance with Local and National Coverage Determination and insurer guidelines..';


  const accordonLabel = [
    'Why do we use encrypted emails and password-protected attachments?',
    'Why is it necessary to record the payer denial code/reason on the patient’s account in the billing system',
    'How often do employees need compliance training?',
    'What resources are used as compliance reference resources?',
    'What is a compliance audit in medical RCM',
  ]
  const accordonText = [
    'Our company maintains security and compliance measures keeping emails and passwords encrypted to protect the content and attachment of the email when it reaches unintended recipients', 

    'MedsIT Nexus experienced training team keeps medical auditors updated about the changes and updates in existing regulations by conducting training sessions periodically',

    'OIG, the Centers for Medicare & Medicaid Services, the Department of health & human services, and AAPC are included as the compliance reference resources because these enterprises provide educative articles, auditing software, notifications about upgrades, and compliance concepts',

    'The process involves the assessment of the claims ensuring they are submitted in compliance with Local and National Coverage Determination and insurer guidelines..',

    'The process involves the assessment of the claims ensuring they are submitted in compliance with Local and National Coverage Determination and insurer guidelines..',
  ]



  const items = [
    {
      key:1,
      label:accordonLabel[0],
      children:<p>{accordonText[0]}</p>
    },

    {
      key:2,
      label:accordonLabel[1],
      children:<p>{accordonText[1]}</p>
    },

    {
      key:3,
      label:accordonLabel[2],
      children:<p>{accordonText[2]}</p>
    },

    {
      key:4,
      label:accordonLabel[3],
      children:<p>{accordonText[3]}</p>
    },
    {
      key:5,
      label:accordonLabel[4],
      children:<p>{accordonText[4]}</p>
    }
  ]


  return (
    <Row justify={'space-around'} align={'middle'} className="md:h-[100vh] my-10 flex justify-center items-center flex-col gap-9 md:flex-row">
        <Col span={20} md={10}>
        <Image src={faqImg} width={400}/>
        </Col>
        
        <Col span={20} md={10} >

        <Collapse items={items} style={{color:'#71797E'}} accordion={true} size="large" >
       
        </Collapse>

        </Col>
    </Row>
  )
}
