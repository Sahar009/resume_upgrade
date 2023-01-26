import React, { useContext, useEffect, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Tooltip } from "primereact/tooltip";
import AppContext from "../../context/AppContext";

export default function website() {
  const { website, setWebsite } = useContext(AppContext);
  const [linksFields, setLinkFields] = website;


//   Links Buttons 
const handleLinksInput = (index, event) => {
    let data = [...linksFields];
    console.log(index, event.target.name);
    data[index][event.target.name] = event.target.value;
    setLinkFields(data);
  };

  const addLinks = () => {
    let newfield = {
      label: "",
      link: "",
    };
    setLinkFields([...linksFields, newfield]);
  };

  const removeLinks = (index) => {
    let data = [...linksFields];
    data.splice(index, 1);
    setLinkFields(data);
  };
// End of Links

  return (
    <div className="personal">
      <div className="title">Websites & Social Links</div>
      <small className="pb-2">
        You can add links to websites you want hiring managers to see! Perhaps
        It will be a link to your portfolio, LinkedIn profile, or personal
        website
      </small>
      {linksFields.map((value, index) => (
        <div className="grouped__accordion mt-2" key={index}>
          <Accordion activeIndex={index}>
            <AccordionTab
              header={
                <React.Fragment>
                  <div className="main__head">
                    <div className="headerTitle">{value.label}</div>
                    <div className="headerDate">{value.link}</div>
                  </div>
                </React.Fragment>
              }
            >
              <div className="accordion-tab">
                <div className="main__form ">
                  <div className="form__group">
                    <label htmlFor="">Label</label>
                    <input
                      type="text"
                      name="label"
                      value={value.label}
                      onChange={(event) => handleLinksInput(index, event)}
                    />
                  </div>
                  <div className="form__group">
                    <label htmlFor="">Link</label>
                    <input
                      type="text"
                      name="link"
                      value={value.link}
                      onChange={(event) => handleLinksInput(index, event)}
                    />
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
            onClick={() => removeLinks(index)}
          >
            <i className="pi pi-trash"></i>
          </button>
        </div>
      ))}
      <button className="btn__small mt-2" onClick={() => addLinks()}>
        {linksFields.length > 1 ? "+ Add one more link" : "+ Add Link"}
      </button>
    </div>
  );
}
