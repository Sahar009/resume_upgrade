import React, { useContext, useEffect, useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { skills } from "../skills";
import AppContext from "../../context/AppContext";

export default function skillComponent() {
  const { skill, setSkill } = useContext(AppContext);
  const [filteredSkill, setFilteredSkill] = useState();
  const [selectedSkill, setSelectedSkill] = skill

  const searchSkill = (event) => {
    let _filteredSkills = [];
    _filteredSkills = skills.filter((skill) => {
      return skill.name.toLowerCase().startsWith(event.query.toLowerCase());
    });
    setFilteredSkill(_filteredSkills);
  };

  return (
    <div className="personal">
      <div className="title">Skills</div>
      <small className="pb-2">
        Choose 5 of the most important skills to show your talents! Make sure
        they match the keywords of the job listing if applying via an online
        system.
      </small>
      <div className="grouped__accordion mt-2">
        <AutoComplete
          value={selectedSkill}
          suggestions={filteredSkill}
          completeMethod={searchSkill}
          field="name"
          multiple
          onChange={(e) => setSelectedSkill(e.value)}
          aria-label="Skills"
          dropdownAriaLabel="Select Skill"
        />
      </div>
    </div>
  );
}
