import TextArea from "antd/es/input/TextArea";

export default function ContactUs() {
  return (
    <section className="contact-us-page">
        <div className="main-section flex justify-around items-center p-9 bg-gray-100 flex-wrap">

            <div className="left">
            <h1>WE WOULD LOVE TO
                   BE YOUR BILLING PARTNER</h1>
            <h1>YOUR FREE BILLING
                      CONSULTATIOIN</h1>
            <p className="">get inquery here ...</p>
            </div>
            <div className="right md:w-[30%] w-full mt-3">
                <form className="bg-white shadow-md rounded-md w-full p-3 flex flex-col justify-center  gap-3 items-center">
                    <h1 className="font-bold text-3xl">Get in Touch</h1>

                    <input className="w-full p-2 outline-blue-600 border-2 rounded-md" type="text" placeholder="Full Name"/>
                    <input className="w-full p-2 outline-blue-600 border-2 rounded-md" type="email" placeholder="Enter Email"/>
                    <input className="w-full p-2 outline-blue-600 border-2 rounded-md" type="number" placeholder="Enter your Phone"/>
                    <input className="w-full p-2 outline-blue-600 border-2 rounded-md" type="text" placeholder="Job Title"/>

                    <input className="w-full p-2 outline-blue-600 border-2 rounded-md" type="text" placeholder="Message"/>

                    <TextArea className="w-full p-2 outline-blue-600 border-2 rounded-md" placeholder="Type your Message"/>
                    

                    <button type='submit' className="bg-blue-800 text-white px-5 py-2 rounded-md mt-5">Submit</button>

                </form>
            </div>
        

        </div>
        
    </section>
  )
}
