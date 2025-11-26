import React from "react";

function Educational({ ResumeInfo }) {
  return (
    <div className="my-6">
      <h2
        style={{ color: ResumeInfo?.themeColor }}
        className="font-bold text-center text-sm mb-2"
      >
        Education
      </h2>
      <hr style={{ borderColor: ResumeInfo?.themeColor }} />

      {ResumeInfo?.education.map((education, index) => {
        return (
          <div className="my-5" key={index}>
            <h2
              style={{ color: ResumeInfo?.themeColor }}
              className="text-sm font-bold"
            >
              {education.universityName}
            </h2>
            <h2 className="text-xs flex justify-between">
              {education?.degree},{education.major}{" "}
              <span>
                {education.startDate}-{education.endDate}
              </span>
            </h2>
            <p className="text-sm my-2">{education?.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Educational;
