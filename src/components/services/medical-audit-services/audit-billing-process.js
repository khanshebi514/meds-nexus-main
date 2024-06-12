import { Col, Row } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import Image from "next/image";
import sideImage from "@/images/medical-audit-services/billing-audit.png";

export default function AuditBillingProcess() {
  return (
    <div className="w-full bg-[#ecf1fd] flex flex-col justify-center items-center gap-2 text-stone-700">
      <Row gutter={[6, 6]} justify={"space-around"} align={"medium"}>
        <Col span={20} md={10}>
          <h1 className="font-bold text-2xl md:text-3xl text-blue-900 ">
            Medical Billing And The Code Compliance Audit Process We Follow At
            MedsIT Nexus.
          </h1>
          <p className="font-normal text-lg">
            MedsIT Nexus CRM department provides free consultation to your
            healthcare organization’s concerned authorities. How in-depth you
            will perform the internal auditing process for the medical claims
            you have prepared to submit is decided. Yet, taking a more
            meticulous approach will result in better (and more actionable)
            solutions. MedsIT Nexus delivers medical billing services to clients
            comprising a detailed audit with the following process.
          </p>
        </Col>
        <Col span={20} md={10}>
          <Image src={sideImage} width={400} />
        </Col>
      </Row>
      <Row gutter={[6, 6]} justify={"space-around"} align={"medium"}>
        <Col span={20} className="my-5 text-stone-700">
          <h1 className="font-bold text-lg text-blue-950 mt-5">
            <span className="mr-2">
              <CheckCircleFilled />
            </span>
            Methodology Planning
          </h1>

          <p className="font-normal text-lg ">
            In the first stage, our auditors conduct internal or external
            reviews of medical records for coding accuracy, policies, and
            procedures to ensure an organization runs efficiently.
          </p>

          <h1 className="font-bold text-lg text-blue-950 mt-5">
            <span className="mr-2">
              <CheckCircleFilled />
            </span>
            Methodology Planning
          </h1>
          <ul className="">
            <li className="flex justify-around items-center gap-2">
              <p className="font-normal text-lg">
                <span className="text-stone-700 font-bold text-lg mr-2">
                  A prospective strategy
                </span>
                In the first stage, our auditors conduct internal or external
                reviews of medical records for coding accuracy, policies, and
                procedures to ensure an organization runs efficiently.
              </p>
            </li>

            <li className="flex justify-around items-center gap-2">
              <p className="font-normal text-lg">
                <span className="text-stone-700 font-bold text-lg mr-2">
                  A prospective strategy
                </span>
                In the first stage, our auditors conduct internal or external
                reviews of medical records for coding accuracy, policies, and
                procedures to ensure an organization runs efficiently.
              </p>
            </li>
          </ul>

          <h1 className="font-bold text-lg text-blue-950 mt-5">
            <span className="mr-2">
              <CheckCircleFilled />
            </span>
            Examine Records In EHR
          </h1>
          <p className="font-normal text-lg">
            At this stage of our company's standard process, our auditors check
            billing reports, charges, codes, and other censorious records to
            maximize cash flow and reduce claim denials. We follow the following
            recommendations at this stage.
          </p>

          <li className="font-normal text-lg mt-2">
            We ensure that your clinic has delivered services as agreed with the
            relevant doctor's treatment plan.
          </li>

          <li className="font-normal text-lg">
            We ensure that your clinic has delivered services as agreed with the
            relevant doctor's treatment plan.
          </li>

          <li className="font-normal text-lg">
            We ensure that your clinic has delivered services as agreed with the
            relevant doctor's treatment plan.
          </li>

          <h1 className="font-bold text-lg text-blue-950 mt-5">
            <span className="mr-2">
              <CheckCircleFilled />
            </span>
            Rectifying Audit Contest
          </h1>

          <p className="font-normal text-lg ">
            In the regulatory compliance practice revenue cycle management
            process, If the detailed report identifies any issue that could
            result in errors and claim denials, our company auditors identify
            areas to correct them within the shortest period. If our client
            disagrees with the audit results, they can challenge the findings
            within 60 days.
          </p>
        </Col>
      </Row>
    </div>
  );
}
