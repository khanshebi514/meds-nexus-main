"use client";

import logoImg from "@/images/logo.svg";
import Button from "@/ui/button";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

import { Col, Menu, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ handleChange, mobileMenu }) {
  
  return (
    <div className="sticky top-0 z-50">
      <Row
        gutter={[2, 6]}
        className="py-3 bg-[#ffff] flex justify-around items-center flex-wrap"
      >
        <Col md={6} sm={10}>
          <Image src={logoImg} style={{ width: "200px" }} />
        </Col>

        <Col md={12} sm={0} className="hidden md:block">
          {/* <ul className='flex justify-evenly items-center gap-2 cursor-pointer font-bold text-md'>
      <Link className={router.pathname == "/" ? "hover:text-orange-600" : ""} href='/'>Home</Link>

      <Link className={router.pathname == "/services" ? "hover:text-orange-600" : ""} href='/services'>Services</Link>

      <Link className={router.pathname == "/solution" ? "hover:text-orange-600" : ""} href='/solution'>Solutions</Link>

      <Link className={router.pathname == "/specialities" ? "hover:text-orange-600" : ""} href='/specialities'>Specialities</Link>

      <Link className={router.pathname == "/top-provider" ? "hover:text-orange-600" : ""} href='/top-provider'>Top Provider</Link>

      <Link className={router.pathname == "/company" ? "hover:text-orange-600" : ""} href='/company'>Company</Link>
      </ul> */}

          <Menu
            mode="horizontal"
            onClick={(key) => {
              open(window.location.href = key.keyPath[0])
              // <Link href={`${key.keyPath[0]}`}></Link>
             

            }}
            items={[
              {
                label: "Home",
                key: "home" || "/",
              },

              {
                label: "Services",
                key: "services",
                children: [
                  {
                    label: "Medical Audit Services",
                    key: "medical-audit-services",
                  },

                  {
                    label: "medical billing services",
                    key: "medical-billing-services",
                  },
                ],
              },

              {
                label: "solutions",
                key: "solutions",
                children: [
                  { label: "medsLab", key: "medslab" },
                  { label: "MedsDental", key: "medsdental" },
                ],
              },

              {
                label: "Specialities",
                key: "specialities",
                children: [
                  {
                    label: "Emergency Room Billing",
                    key: "emergency-room-billing",
                  },
                  {
                    label: "ASC Billing Srvice",
                    key: "asc-billing-service",
                  },

                  {
                    label: "urgent billing services",
                    key: "urgent-billing-serv",
                  },
                ],
              },

              { label: "Top Provider", key: "top-provider" },
              {
                label: "Company",
                key: "company",
                children: [
                  {
                    label: "About Us",
                    key: "about-us",
                  },
                  {
                    label: "Contact us",
                    key: "contact-us",
                  },
                ],
              },
            ]}
          ></Menu>
        </Col>

        <Col md={0} sm={10} justify={""} align={"medium"}>
          {mobileMenu ? (
            <MenuOutlined
              style={{ fontSize: "25px" }}
              onClick={() => {
                handleChange(false);
              }}
            />
          ) : (
            <CloseOutlined
              style={{ fontSize: "25px" }}
              onClick={() => {
                handleChange(true);
              }}
            />
          )}
        </Col>

        <Col md={4} xs={0} justify={"center"} align={"medium"}>
          <Button
            size="large"
            className="bg-blue-900 text-white px-3 rounded-md"
          >
            Billing Calculator
          </Button>
        </Col>
      </Row>
    </div>
  );
}
