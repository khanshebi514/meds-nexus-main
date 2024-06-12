import { Col, Row } from "antd";
import Image from "next/image";
import textImg from "@/images/medical-audit-services/complaince-audit.svg"

export default function AuditServiceText() {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <Row gutter={[6,6]} justify={'space-around'} align={'middle'}>
        <Col span={20} md={10}>
          <h1 className="font-[700] text-2xl md:text-4xl text-blue-900 my-5">Medical Billing Audit Services | Compliance Audit</h1>
          <p className="font-normal text-lg text-stone-700">
            MedsIT Nexus medical billing audit services involve the systematic
            assessment of physician practices within a healthcare organization.
            A medical billing audit can be performed on the various components
            within the organization. Still, most commonly audit is performed on
            the elements concerned with the insurer reimbursement process to
            assess whether the billing and coding implications for physician
            practices comply with regulatory authorities’ regulations and
            guidelines. </p>
            <p className="font-normal text-lg text-stone-700 mt-5">
            Although your front office can perform audits manually,
            It is a big challenge for them to understand and recognize the
            thousands of CPT codes for the rendered service. Additionally, your
            front office is partially aware of the physician’s specialties’
            procedural coding complexities; hence their manual and
            self-practices lead them towards typos mistakes. It results in the
            submission of a false claim. Ultimately, medical providers are
            overwhelmed by their practice’s revenue irregularities and losses
            and put their organization at risk of extensive audits by the
            government.
          </p>

        </Col>

        <Col span={20} md={10} justify={'center'}>
         <Image src={textImg} width={470} style={{objectFit:'cover'}}/>
        </Col>
      </Row>
    </div>
  );
}
