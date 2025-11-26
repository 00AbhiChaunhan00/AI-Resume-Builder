import { useContext } from "react";
// import { ResumeContext } from './[resumeId]/Edit'
import { ResumeContext } from "/src/ContextProvider.jsx";
import PersonalDetail from "../Preview/PersonalDetail";
import Summary from "../Preview/Summary";
import ProfessionalExperience from "../Preview/ProfessionalExperience";
import Educational from "../Preview/Educational";
import Skills from "../Preview/Skills";
function ResumePreview() {
  const { ResumeInfo } = useContext(ResumeContext);
  return (
    <div
      className="shadow-lg p-14 h-full border-t-[20px]"
      style={{ borderColor: ResumeInfo?.themeColor }}
    >
      <PersonalDetail ResumeInfo={ResumeInfo} />
      <Summary ResumeInfo={ResumeInfo}></Summary>
      <ProfessionalExperience ResumeInfo={ResumeInfo} />
      <Educational ResumeInfo={ResumeInfo} />
      <Skills ResumeInfo={ResumeInfo} />
    </div>
  );
}

export default ResumePreview;
