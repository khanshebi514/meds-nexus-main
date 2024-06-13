import bgImage from '@/images/calculator/bg-image.webp'
import calculator from '@/images/calculator/calculator.png'

export default function CostCalculator() {
  return (
    <section className="cal-bg p-4" style={{
        backgroundImage:` url(${bgImage.src})`,
        width: '100%',
        height: '90vh',
      }}>
        <div className="flex justify-center gap-2 items-center p-5 flex-wrap w-full h-full">
            <div className="right md:w-[50%] hidden md:block">
                <img src={calculator.src} width='370px' style={{objectFit:'cover'}}/>
            </div>
            <div className="left md:w-[40%]">
                <h1 className='font-bold md:text-4xl text-2xl  text-white'>Experience A New Level Of <span className='text-orange-600'>Medical Billing Cost Calculator</span></h1>
                <p className='mt-7 font-normal text-white'>When it comes to Medical Billing Services, there is no shortage of options. MedsIT Nexus is an industry leader in making saving easier for Healthcare Professionals and Organizations such as yourself. Clients who chose MedsIT Nexus saved up-to 30% on Medical Billing Services. Whether you are transitioning from in-house billing or a third party billing company, see for yourself how much you could save.</p>

                
                <button className='bg-orange-700 px-4 py-1 rounded-md mt-5'>Start Saving</button>
            </div>
        </div>
    </section>
  )
}
