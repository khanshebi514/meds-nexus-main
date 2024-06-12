import Link from "next/link";
import footerBgImage from '@/images/medical-audit-services/billig-audit-thrd.png'
// import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill, RiTwitterXLine, RiFacebookBoxFill, RiPhoneFill } from "react-icons/ri";
import { LinkedinFilled } from "@ant-design/icons";

export default function Footer() {

    const img =footerBgImage;
const stylingBg = {
    backgroundImage: `url('${img.src}')`,
    width:"100%",
    height:"100%",
    backgroundRepeat:'no-repeat',
    objectFit:"cover"
}

  return (
    <footer className="footer-section bg-blue-950 flex flex-col w-full ">
        <div className="py-5 flex justify-around items-center text-white flex-wrap p-2 gap-2">
            <h1>Practice Better When Everything Works Together</h1>
           <div className="subscribe">
           <input type="text" placeholder="abc@mail.com" className="p-2"/>
            <button className="bg-orange-600 py-2 px-3 ml-2">Let's Start</button>
           </div>

        </div>

        <div className="footer-quick-links flex justify-around items-start p-5 gap-3 bg-black text-white flex-wrap py-10" style={stylingBg}>
            <div className="links services flex flex-col gap-2"> 
                <h1 className="font-bold text-xl">Services</h1>
                <Link href='/'>Medical audit Services</Link>
                <Link href='/'>medical Credintial services</Link>
                <Link href='/'>medical Insurance Verification</Link>
                <Link href='/'>Medical Coding Services</Link>
                <Link href='/'>Patient Help Desk</Link>
            </div>
            <div className="links solutions flex flex-col gap-2">
            <h1 className="font-bold text-xl">Solutions</h1>
                <Link href='/'>MedsLab</Link>
                <Link href='/'>MedsTele</Link>
                <Link href='/'>MedsCare</Link>
            </div>
            <div className="links about-medsit flex flex-col gap-2">
            <h1 className="font-bold text-xl">About</h1>
                <Link href='/'>About us</Link>
                <Link href='/'>Why MedsIt</Link>
                <Link href='/'>Specielties</Link>
                <Link href='/'>contact us</Link>
                <Link href='/'>carrier</Link>
            </div>
            <div className="links learn flex flex-col gap-2">
            <h1 className="font-bold text-xl ">Learn</h1>
                <Link href='/'>Blog</Link>
                <Link href='/'>Provider check List</Link>
                <Link href='/'>sitemap</Link>
                <Link href='/'>Privacy Policy</Link>
            </div>
            <div className="links get-in-touch flex flex-col items-center gap-10">
            <h1 className="font-bold text-xl">Get in Touch</h1>
                <div className="flex flex-row gap-5"><span></span>
                <i><RiPhoneFill  style={{fontSize:'25px'}}/></i> <p className="text-lg">+1 (516) 665-1869</p> </div>
                <div className="flex flex-row gap-3">
                <i><RiFacebookBoxFill style={{fontSize:'25px'}}/></i>
                <i><RiInstagramFill style={{fontSize:'25px'}}/></i>
                <i><RiTwitterXLine style={{fontSize:'25px'}}/></i>
                <i><LinkedinFilled style={{fontSize:'25px'}}/></i>
                </div>
            </div>
        </div>

        <p className="text-white text-center p-2">© MedsIT Nexus. All rights reserved 2024. Powered by MeshSq.</p>

    </footer>
  )
}
