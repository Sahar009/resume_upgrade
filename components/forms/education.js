import React, { useContext, useEffect, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Tooltip } from "primereact/tooltip";
import moment from "moment";
import AppContext from "../../context/AppContext";


export default function Education() {

  const { education, setEducation } = useContext(AppContext);
  const [eduFields, setEduFields] = education;

  // Education Buttons
  const handleChangeInput = (index, event) => {
    let data = [...eduFields];
    data[index][event.target.name] = event.target.value;
    setEduFields(data);
  };

  const addFields = () => {
    let newfield = {
      school: "",
      degree: "",
      city: "",
      startDate: "",
      endDate: "",
      // description: "",
    };
    setEduFields([...eduFields, newfield]);
  };

  const removeFields = (index) => {
    let data = [...eduFields];
    data.splice(index, 1);
    setEduFields(data);
  };

// End Of Education Buttons

  return  <div className="personal">
  <div className="title">Education</div>
  <small className="pb-2">
    A varied education on your resume sums up the value that your
    learnings and background will bring to job.
  </small>
  {eduFields.map((value, index) => (
    <div className="grouped__accordion mt-2" key={index}>
      <Accordion activeIndex={index}>
        <AccordionTab
          header={
            <React.Fragment>
              <div className="main__head">
                <div className="headerTitle">{value.school}</div>
                <div className="headerDate">
                  {value.startDate && value.endDate ? (
                    <>
                      {moment(value.startDate).format(
                        "MMMM YYYY"
                      )}
                      - {moment(value.endDate).format("MMMM YYYY")}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </React.Fragment>
          }
        >
          <div className="accordion-tab">
            <div className="main__form ">
              <div className="form__group">
                <label htmlFor="">School</label>
                <input
                  type="text"
                  name="school"
                  value={value.school}
                  onChange={(event) =>
                    handleChangeInput(index, event)
                  }
                />
              </div>
              <div className="form__group">
                <label htmlFor="">Degree</label>
                <input
                  type="text"
                  name="degree"
                  value={value.degree}
                  onChange={(event) =>
                    handleChangeInput(index, event)
                  }
                />
              </div>
              <div className="main__form">
                <div className="form__group">
                  <label htmlFor="">Start Date</label>
                  <input
                    type="date"
                    name="startDate"
                    id=""
                    value={value.startDate}
                    onChange={(event) =>
                      handleChangeInput(index, event)
                    }
                  />
                  {/* <Calendar
                    value={value.startDate}
                    view="month"
                    dateFormat="mm/yy"
                    onChange={event => handleChangeInput(index, event)}
                  ></Calendar> */}
                </div>
                <div className="form__group">
                  <label htmlFor="">End Date</label>
                  <input
                    type="date"
                    name="endDate"
                    value={value.endDate}
                    id=""
                    onChange={(event) =>
                      handleChangeInput(index, event)
                    }
                  />
                </div>
              </div>
              <div className="form__group">
                <label htmlFor="">City</label>
                <input
                  type="text"
                  name="city"
                  value={value.city}
                  onChange={(event) =>
                    handleChangeInput(index, event)
                  }
                />
              </div>
            </div>
            {/* <div className="full__form pt-3">
              <div className="form__group">
                <label htmlFor="">Description</label>
                <textarea
                  name="description"
                  cols="30"
                  rows="15"
                  value={value.description}
                  onChange={(event) =>
                    handleChangeInput(index, event)
                  }
                />
              </div>
            </div> */}
          </div>
        </AccordionTab>
      </Accordion>
      <Tooltip target=".deleteBtn" />
      <button
        className="deleteBtn"
        data-pr-tooltip="Delete"
        data-pr-position="top"
        onClick={() => removeFields(index)}
      >
        <i className="pi pi-trash"></i>
      </button>
    </div>
  ))}
  <button className="btn__small mt-2" onClick={() => addFields()}>
    { eduFields.length > 0 ? '+ Add one more education' : '+ Add education '}
  </button>
</div>;
}
