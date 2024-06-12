'use client'
import { Cursor, useTypewriter } from "react-simple-typewriter"
export default function AnimateText() {



   const text = useTypewriter({
        words:['STREAM LINE OPERATION', 'BOOST PROFITS', 'INCREASE CASHFLOW'],
        loop:{},
        typeSpeed:120,
        deleteSpeed:50,
    })

   
 

    return (
        <h1>{text[0]}</h1>
    )
}
