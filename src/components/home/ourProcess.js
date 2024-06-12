import process from '@/images/calculator/process.webp'

export default function OurProcess() {
  return (
    <section className="process-main flex justify-center items-center gap-5 flex-col bg-white p-3">
        <h1 className='font-bold text-2xl mb-3 text-blue-900 mt-7'>Our Process</h1>
        <div className="our-process flex justify-center items-center gap-4 py-2 px-7 text-center flex-wrap">
            

        <div className="left md:w-[30%]">
            <h1 className='font-bold text-2xl mb-3 text-blue-900'>
            Establishing Contact
            </h1>
            <p className='text-gray-800 mb-2'>
            Healthcare organization representatives can contact us through several channels, including Chat, calls Quotation forms and contact us page
            </p>

            <h1 className='font-bold text-2xl mb-3 text-blue-900'>
            Execution Of Project
            </h1>
            <p className='text-gray-800 mb-2'>MedsIT Nexus practice revenue experts work on generating a reimbursement claim, filling it, and establishing an aggressive AR follow-up until payment for your rendered services is posted to your account.</p>
        </div>
        <div className="center md:w-[30%]">
            <img src={process.src} width='380px' className='hidden md:block'/>

            <h1 className='font-bold text-2xl mb-3 text-blue-900'>
            Establishing Contact
            </h1>
            <p className='text-gray-800 mb-2'>
            Healthcare organization representatives can contact us through several channels, including Chat, calls Quotation forms and contact us page
            </p>

        </div>
        <div className="right md:w-[30%]">

        <h1 className='font-bold text-2xl mb-3 text-blue-900'>
            Establishing Contact
            </h1>
            <p className='text-gray-800 mb-2'>
            Healthcare organization representatives can contact us through several channels, including Chat, calls Quotation forms and contact us page
            </p>

            <h1 className='font-bold text-2xl mb-3 text-blue-900'>
            Execution Of Project
            </h1>
            <p className='text-gray-800 mb-2'>MedsIT Nexus practice revenue experts work on generating a reimbursement claim, filling it, and establishing an aggressive AR follow-up until payment for your rendered services is posted to your account.</p>


         </div>


        </div>
    </section>
  )
}
