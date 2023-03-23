import React, { useContext, useEffect, useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Tooltip } from "primereact/tooltip";
import { Editor } from "primereact/editor";
import moment from "moment";
import AppContext from "../../context/AppContext";
export default function employmentHistory() {

  const { employment, setEmployment } = useContext(AppContext);
  const [workFields, setWorkFields] = employment

//   Work Buttons

const handleWorkInput = (index, event) => {
    let data = [...workFields];
    console.log(index, event.target.name);
    data[index][event.target.name] = event.target.value;
    setWorkFields(data);
  };

  const addWork = () => {
    let newfield = {
        title: "",
        employer: "",
        city: "",
        startDate: "",
        endDate: "",
        description: "",
    };
    setWorkFields([...workFields, newfield]);
  };

  const removeWork = (index) => {
    let data = [...workFields];
    data.splice(index, 1);
    setWorkFields(data);
  };

//   End of Work Buttons



  
  return   <div className="personal">
  <div className="title">Employment History</div>
  <small className="pb-2">
    Show your relevant experience (last 10 years). Use bullet points
    to note your achievements, if possible - use numbers/facts
    (Achieved X, measured by Y, by doing Z).
  </small>
  {workFields.map((value, index) => (
    <div className="grouped__accordion mt-2" key={index}>
      <Accordion activeIndex={index}>
        <AccordionTab
          header={
            <React.Fragment>
              <div className="main__head">
                <div className="headerTitle">{value.title}</div>
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
                <label htmlFor="">Job Title</label>
                <input
                  type="text"
                  name="title"
                  value={value.title}
                  onChange={(event) =>
                    handleWorkInput(index, event)
                  }
                />
              </div>
              <div className="form__group">
                <label htmlFor="">Employer</label>
                <input
                  type="text"
                  name="employer"
                  value={value.employer}
                  onChange={(event) =>
                    handleWorkInput(index, event)
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
                        handleWorkInput(index, event)
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
                        handleWorkInput(index, event)
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
                    handleWorkInput(index, event)
                  }
                />
              </div>
            </div>
            <div className="full__form pt-3">
              <div className="form__group">
                <label htmlFor="">Description</label>
                <textarea
                  name="description"
                  cols="30"
                  rows="15"
                  value={value.description}
                  onChange={(event) =>
                    handleWorkInput(index, event)
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
        onClick={() => removeWork(index)}
      >
        <i className="pi pi-trash"></i>
      </button>
    </div>
  ))}
  <button className="btn__small mt-2" onClick={() => addWork()}>
  { workFields.length > 0 ? '+ Add one more employment' : '+ Add employment'}
  </button>
</div>;
}
