
export default function TrustUs() {
    const url = 'https://medsitnexus.com/images/nexus.mp4'
  return (
    <section className="w-full p-5">
        <div className="w-full p-7 bg-blue-900 flex justify-around items-center">
            <video src={url} autoPlay width='370px' className="hidden md:block"/>
            <div className="text-area md:w-[40%]">
                <h1 className="font-bold text-2xl text-white mb-6">Why Should You Trust Us</h1>
                <p className="text-white">Although many companies in the US offer brilliant billing services, MedsIT Nexus boasts an unparalleled reputation. That is because data secrecy, professionalism, and immaculate auditing, at MedsIT Nexus are second to none.

                Since we understand how tough it can be for the medical practitioner to juggle their work and personal life, our team of dedicated professionals always make sure to assist you in your most complicated tasks.</p>
            </div>
        </div>

    </section>
  )
}
