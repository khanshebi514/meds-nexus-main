import RepeatedPage from "@/ui/repeatedPage";
import { Button } from "antd";
import coreServiceImage  from '@/images/medical-audit-services/core-services.png'

export default function CoreServices() {


      const heading = 'Medical Billing And Coding Services';
      const text='MedsIT Nexus is a prominent Medical Billing company that offers a full spectrum of Medical;Billing and coding solutions for all sizes of organizations.';
       const background ='white';
       const width = 400;

  return (
    <>
    <RepeatedPage background={background} Heading={heading} Text={text} image={coreServiceImage} width={width} button={<Button className="py-2 px-3 text-lg bg-blue-900 text-white">Learn More</Button>}>
        <h1 className="font-bold text-lg text-stone-800">Core Services</h1>
    </RepeatedPage>
    </>
  )
}
