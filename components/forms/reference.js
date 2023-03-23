import React, { useEffect, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Tooltip } from "primereact/tooltip";

export default function reference() {
  const [refFields, setRefFields] = useState([]);

  //   Reference Buttons
  const handleRefInput = (index, event) => {
    let data = [...refFields];
    console.log(index, event.target.name);
    data[index][event.target.name] = event.target.value;
    setRefFields(data);
  };

  const addRefs = () => {
    let newfield = {
      name: "",
      comapny: "",
      phone: "",
      email: "",
    };
    setRefFields([...refFields, newfield]);
  };

  const removeRefs = (index) => {
    let data = [...refFields];
    data.splice(index, 1);
    setRefFields(data);
  };
  // End of Reference Buttons


  return (
    <div className="personal">
    <div className="title">References</div>
    <small className="pb-2">
      You can add links to websites you want hiring managers to see!
      Perhaps It will be a link to your portfolio, LinkedIn profile,
      or personal website
    </small>
    {refFields.map((value, index) => (
      <div className="grouped__accordion mt-2" key={index}>
        <Accordion activeIndex={index}>
          <AccordionTab
            header={
              <React.Fragment>
                <div className="main__head">
                  <div className="headerTitle">{value.name}</div>
                  <div className="headerDate">{value.comapny}</div>
                </div>
              </React.Fragment>
            }
          >
            <div className="accordion-tab">
              <div className="main__form ">
                <div className="form__group">
                  <label htmlFor="">Referent's Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={value.name}
                    onChange={(event) =>
                      handleRefInput(index, event)
                    }
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="">Company</label>
                  <input
                    type="text"
                    name="comapny"
                    value={value.comapny}
                    onChange={(event) =>
                      handleRefInput(index, event)
                    }
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={value.phone}
                    onChange={(event) =>
                      handleRefInput(index, event)
                    }
                  />
                </div>
                <div className="form__group">
                  <label htmlFor="">email</label>
                  <input
                    type="email"
                    name="email"
                    value={value.email}
                    onChange={(event) =>
                      handleRefInput(index, event)
                    }
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
          onClick={() => removeRefs(index)}
        >
          <i className="pi pi-trash"></i>
        </button>
      </div>
    ))}
    <button className="btn__small mt-2" onClick={() => addRefs()}> + Add Reference
    </button>
  </div>
  );
}
