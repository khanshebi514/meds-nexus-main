import auditBg from '@/images/medical-audit-services/billig-audit-thrd.png';
import auditChart from '@/images/medical-audit-services/audit-chart.webp'
import Image from 'next/image';

export default function AuditServiceBg() {
// const img =auditBg;
// const stylingBg = {
//     backgroundImage: `url('${img.src}')`,
//     width:"100%",
//     height:"100%",
//     backgroundRepeat:'no-repeat',
//     objectFit:"cover"
// }

  return (
    <div className="flex justify-center items-center gap-3 flex-col p-4 w-full" >
    
    <div className="relative w-full md:flex justify-center items-center flex-wrap hidden mb-40">
      <Image src={auditBg}/>
        <div className="absolute w-[60%] h-[60vh] m-auto top-20">
          <Image src={auditChart} />
        </div>
    </div>

    <div className="w-[90%] flex flex-col items-center justify-center gap-3 mt-10">
        <h1 className="font-[700] text-2xl md:text-4xl text-blue-900">Why Should You Consider Outsourcing Medical Claims Audit?</h1>
        <p className="font-normal text-lg leading-9 text-center">
        When you outsource your claims audit to a renowned medical billing company such as MedsIT Nexus, we make the billing process easier by acting as a mediator between your specialties and an insurance company. Before sending claims to the insurance company, it is processed through the software where the automated rule engines are applied to identify mistakes that would lead to the denials. 
        
        But the MedsIT Nexus goes beyond claim scrubbing and uses our clearinghouse partner’s preferred scrubbing tool; this catches errors far better and faster than humans.

        Additionally, our automated claims scrubbing services ensure that medical professionals eliminate the technical complexities of the claims processing and spend maximum time in patient care to adhere to the state of law.
        </p>
    </div>
    </div>
  )
}
