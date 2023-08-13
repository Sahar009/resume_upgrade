import React, { useContext, useEffect, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Tooltip } from "primereact/tooltip";
import { languageLevel } from "../skills";
import AppContext from "../../context/AppContext";

export default function Languages() {
  const { language, setLanguage } = useContext(AppContext);
  const [langFields, setLangFields] = language;

  //   Language Buttons
  const handleLangInput = (index, event) => {
    let data = [...langFields];
    console.log(index, event.target.name);
    data[index][event.target.name] = event.target.value;
    setLangFields(data);
  };

  const addLangs = () => {
    let newfield = {
      language: "",
      level: "",
    };
    setLangFields([...langFields, newfield]);
  };

  const removeLangs = (index) => {
    let data = [...langFields];
    data.splice(index, 1);
    setLangFields(data);
  };
  // End of Language Buttons

  return (
    <div className="personal">
      <div className="title">Languages</div>

      {langFields.map((value, index) => (
        <div className="grouped__accordion mt-2" key={index}>
          <Accordion activeIndex={index}>
            <AccordionTab
              header={
                <React.Fragment>
                  <div className="main__head">
                    <div className="headerTitle">{value.language}</div>
                    <div className="headerDate">{value.level}</div>
                  </div>
                </React.Fragment>
              }
            >
              <div className="accordion-tab">
                <div className="main__form ">
                  <div className="form__group">
                    <label htmlFor="">Language</label>
                    <input
                      type="text"
                      name="language"
                      value={value.language}
                      onChange={(event) => handleLangInput(index, event)}
                    />
                  </div>
                  <div className="form__group">
                    <label htmlFor="">level</label>
                    <select
                      name="level"
                      value={value.level}
                      id=""
                      onChange={(event) => handleLangInput(index, event)}
                    >
                      {languageLevel.map((data) => (
                        <option value={data.level} label={data.level}></option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </AccordionTab>
          </Accordion>
          <Tooltip target=".deleteBtn" />
          <button
            className="deleteBtn"
            data-pr-tooltip="Delete"
            data-pr-position="top"
            onClick={() => removeLangs(index)}
          >
            <i className="pi pi-trash"></i>
          </button>
        </div>
      ))}
      <button className="btn__small mt-2" onClick={() => addLangs()}>
        {" "}
        + Add Language
      </button>
    </div>
  );
}
