'use client'
import CountUp from "react-countup";


export default function Counter() {
  return (

    <div className="mt-7 mb-7 facts bg-blue-900 rounded-md text-white flex justify-center  gap-4 border-white p-5 text-center flex-wrap">
            <div className="border-r-2 md:w-80  border-white sec-1">
                <h1 className="font-bold text-2xl"><CountUp start={0} end={90}>

                  </CountUp>+</h1>
                <p>Specilites served</p>
            </div>
            <div className="border-r-2 md:w-80  border-white sec-2">
                <h1 className="font-bold text-2xl">
                <CountUp start={0} end={98}>
                  </CountUp>%</h1>
                <p>Net Collection Rate</p>
            </div>
            <div className="border-r-2 md:w-80  border-white sec-3">
                <h1 className="font-bold text-2xl">
                <CountUp start={0} end={30}>

                </CountUp>
                </h1>
                <p>Days in AR</p>
            </div>

            <div className="border-r-2 md:w-80  border-white sec-4">
                <h1 className="font-bold text-2xl">
                <CountUp start={0} end={72}>

                </CountUp>
                </h1>
                <p>Hour Claimed Turn around</p>
            </div>
            <div className=" md:w-80 ">
                <h1 className="font-bold text-2xl"><CountUp start={0} end={10}>
                  </CountUp></h1>
                <p className="text-md">Increase in Cash flow</p>
            </div>

          </div>
  )
}
