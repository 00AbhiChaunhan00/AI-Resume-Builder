import React from "react";

function Skills({ ResumeInfo }) {
  return (
    <div className="my-6">
      <h2
        style={{ color: ResumeInfo?.themeColor }}
        className="font-bold text-center text-sm mb-2"
      >
        Skills
      </h2>

      <hr style={{ borderColor: ResumeInfo?.themeColor }} />

      <div className="grid gird-cols-2 gap-3 my-4">
        {ResumeInfo?.skills?.map((skill, index) => (
          <div key={index} className="flex items-center justify-between my-1">
            <h2 className="text-xs">{skill?.name}</h2>

            <div className="h-2 bg-gray-200 w-[70px] rounded">
              <div
                className="h-2 rounded"
                style={{
                  backgroundColor: ResumeInfo?.themeColor,
                  width: `${(skill?.rating / 5) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
