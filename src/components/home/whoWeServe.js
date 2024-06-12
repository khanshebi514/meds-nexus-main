import ambulance from '@/images/ambulatory-white.png'
import dental from '@/images/dental.png'
import medical from '@/images/medical.png'
import grennHouse from '@/images/gh-white.png'

export default function WhoWeServe() {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
    <div><h1 className="font-normal text-3xl border-b-2 border-orange-600">Who we Serve</h1></div>
          <div className="main-modal flex justify-center gap-5 text-center flex-wrap">

          <div className="modal flex flex-col gap-2 justify-between bg-stone-100 w-[300px] p-2 items-center hover:bg-blue-800 hover:text-white border-b-2 border-blue-900 rounded-md">
            <img src={ambulance.src}  width='100px'/>
            <p>Emergency Room <span className='text-orange-700'>Billing</span></p>
            <a className='mt-2 border-2 border-inherit py-1 px-2 rounded-md'>Read More</a>
          </div>

          <div className="modal flex flex-col gap-2 justify-between bg-stone-100 w-[300px] p-2 items-center hover:bg-blue-800 hover:text-white border-b-2 rounded-md border-blue-900">
          <img src={ambulance.src} width='100px'/>
            <p>Ambulatory <span className='text-orange-700'>Surgery Center</span></p>
            <a className='mt-2 border-2 border-inherit py-1 px-2 rounded-md'>Read More</a>
          </div>

          <div className="modal flex flex-col gap-2 justify-between bg-stone-100 w-[300px] p-2 items-center hover:bg-blue-800 hover:text-white border-b-2 border-blue-800 rounded-md">
          <img src={grennHouse.src} width='100px'/>
            <p>Urgent Care <span className='text-orange-700'>Billing</span></p>
            <a className='mt-2 border-2 border-inherit py-1 px-2 rounded-md hover:border-white'>Read More</a>
          </div>

          <div className="modal flex flex-col gap-2 justify-between bg-stone-100 w-[300px] p-2 items-center hover:bg-blue-800 hover:text-white border-b-2 border-blue-900 rounded-md">
          <img src={dental.src} width='100px'/>
            <p>Dental care <span className='text-green-600'>Services</span></p>
            <a className='mt-2 border-2 border-inherit py-1 px-2 hover:border-white rounded-md'>Read More</a>
          </div>

          </div>
          <div>
            <button className='bg-blue-900 px-5 py-3 text-white font-normal rounded-md hover:bg-orange-700' >
                Veiw all Specilites
            </button>
          </div>
    </div>
  )
}
