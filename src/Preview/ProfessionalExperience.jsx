import React from "react";

const ProfessionalExperience = ({ ResumeInfo }) => {
  return (
    <div className="my-6">
      <h2
        style={{ color: ResumeInfo?.themeColor }}
        className="font-bold text-center text-sm mb-2"
      >
        Professional Experience
      </h2>
      <hr style={{ borderColor: ResumeInfo?.themeColor }} />
      {ResumeInfo?.experience.map((experience, index) => {
        return (
          <div className="my-5" key={index}>
            <h2
              style={{ color: ResumeInfo?.themeColor }}
              className="text-sm  font-bold"
            >
              {experience?.title}
            </h2>
            <h2 className="text-xs flex justify-between">
              {experience?.companyName},{experience?.city},{experience.state},{" "}
              <span>
                {experience.startDate},{" "}
                {experience?.currentlyWorking
                  ? "Presently Working"
                  : experience.endDate}
              </span>
            </h2>

            {/* the next div is for the data we get from our text editor tools  */}
            <div
              dangerouslySetInnerHTML={{ __html: experience?.workSummery }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProfessionalExperience;
