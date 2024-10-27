import React from "react";


function SkillsPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center font-bold text-sm mb-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Skills
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      <div className="grid grid-cols-2 gap-3 my-4">
        {resumeInfo?.skills.map((skill, index) => (
          <div key={index} className="skill-item flex items-center justify-between">
            <h2 className="text-xs skill-name">{skill.name}</h2>
            <div className="skill-level" style={{
              width: '120px',
              height: '8px',
              backgroundColor: '#e0e0e0',
              position: 'relative',
            }}>
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: `${skill.rating * 20}%`,
                  backgroundColor: resumeInfo?.themeColor,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;
