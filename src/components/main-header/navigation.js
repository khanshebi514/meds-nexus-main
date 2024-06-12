'use client'

import { Menu } from "antd";
import Navbar from "./navbar";
import SocIcons from "./socIcons";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(true)

  const handleMenu = (option)=>{
    setMobileMenu(option)
  }

  return (
    <>
     <SocIcons/>
     <Navbar handleChange={handleMenu} mobileMenu={mobileMenu}/>
     {/* <Drawer open={mobileMenu} title='Menu' onClose={()=>{setMobileMenu(false)}}>
     <ul className='flex flex-col gap-2 cursor-pointer font-bold text-md '>
      <Link className="hover:text-orange-500" href='/'>Home</Link>

      <Link className="hover:text-orange-500"  href='/services'>Services</Link>

      <Link className="hover:text-orange-500"  href='/solution'>Solutions</Link>

      <Link className="hover:text-orange-500"  href='/specialities'>Specialities</Link>

      <Link className="hover:text-orange-500"  href='/top-provider'>Top Provider</Link>

      <Link className="hover:text-orange-500" href='/company'>Company</Link>
      </ul>
     </Drawer> */}


     <Menu mode="inline"
     style={{position:'sticky',top:'0', zIndex:'10'}}
     hidden={mobileMenu}
     onClick={(key)=>{
      window.location.href = key.keyPath[0]
    }}
     items={[
      {
        label:'Home',
        key:'home',
      },

      {
        label:'Services',
        key:'services',
        pathname:'service/medical-audit-services',
        children:[
          {
            label:'Medical Audit Services',
            key:'medical-audit-services',
          },

          {
            label:'medical billing services',
            key:'medical-billing-services',
          }
        ]
      },

      {
        label:'solutions',
        key:'solutions',
        children:[
          {label:'medsLab',
            key:'medslab',
          },
          {label:'MedsDental',
            key: 'medsdental'
          }
        ]
      },

      {
        label:'Specialities',
        key:'specialities',
        children:[
          {
            label:'Emergency Room Billing',
            key:'emergency-room-billing',
          },
          {
            label:'ASC Billing Srvice',
            key:'asc-billing-service',
          },

          {
            label:'urgent billing services',
            key:'urgent-billing-serv'
          }

        ]
      },

      {label:'Top Provider',
        key:'top-provider'
      },
      {
        label:'Company',
        key:'company',
        children:[
          {
            label:'About Us',
            key:'about-us'
          },
          {
            label:'Contact us',
            key:'contact-us'
          }
        ]
      }
     ]}
     >
      
     </Menu>
    </>
  )
}
