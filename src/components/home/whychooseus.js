
import whyUs from '@/images/why-medsit.png'
export default function WhyChooseUs() {
  return (

    <section className='w-full p-5 bg-gray-200 mt-7 p-5'>
        <div className="section-main flex justify-center items-center gap-3 flex-wrap">
        <div className="section-left md:w-[40%]">
            <img src={whyUs.src} width='370px'/>
        </div>
        <div className="section-right md:w-[50%] text-pretty p-5">

          <h1 className='font-bold md:text-3xl text-2xl mb-5'>Why MedsIT Nexus</h1>
           <p className='mb-5'>The most painful challenge for healthcare organizations is to partner with a healthcare administrative partner who delivers cost-effective solutions with complete transparency.</p>

          <li className='md:text-right ml-5'>
           MedsIT Nexus comprise electronic healthcare resources that include medical billing and coding software that assures us to supervise all your needs with a minimum turnaround time.
          </li>

           <li className='md:text-right ml-5'>
           MedsIT Nexus comprise electronic healthcare resources that include medical billing and coding software that assures us to supervise all your needs with a minimum turnaround time.
           </li>

            <li className='md:text-right ml-5'>
              MedsIT Nexus comprise electronic healthcare resources that include medical billing and coding software that assures us to supervise all your needs with a minimum turnaround time.
            </li>
        </div>
        </div>
    </section>
)
}
