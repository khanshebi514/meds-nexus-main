
import TrustUs from "@/components/home/TrustUs";
import ContactUs from "@/components/home/contactUs";
import CostCalculator from "@/components/home/costCalculator";
import Counter from "@/components/home/counter";
import Footer from "@/components/footer/footer";
import HeaderHome from "@/components/home/homePageHeader";
import OurProcess from "@/components/home/ourProcess";
import Services from "@/components/home/services";
import WhoWeServe from "@/components/home/whoWeServe";
import WhyChooseUs from "@/components/home/whychooseus";

export default function HomePage() {
 
  return (
    <>
     <HeaderHome/>
     <Counter/>
     <WhoWeServe/>
     <Services/>
     <CostCalculator/>
     <WhyChooseUs/>
     <OurProcess/>
     <TrustUs/>
     <ContactUs/>
    </>
  )
}
