import Counter from "@/components/home/counter";
import AuditBillingProcess from "@/components/services/medical-audit-services/audit-billing-process";
import AuditHeader from "@/components/services/medical-audit-services/audit-header";
import AuditHelpServices from "@/components/services/medical-audit-services/audit-help-services";
import AuditServiceBg from "@/components/services/medical-audit-services/audit-service-bg";
import AuditServiceText from "@/components/services/medical-audit-services/audit-service-text";
import CoreServices from "@/components/services/medical-audit-services/coreServices";
import MedFaq from "@/components/services/medical-audit-services/med-faq";

export default function MedicalAuditServicesRoute() {
  return (
    <>
    <AuditHeader/>
     <Counter/>
    <AuditServiceText/>
    <AuditServiceBg/>
    <AuditBillingProcess/>
    <AuditHelpServices/>
    <MedFaq/>
    <CoreServices/>
    </>
  )
}
