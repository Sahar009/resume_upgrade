import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import DOMPurify from "isomorphic-dompurify";
import moment from "moment";


const templateTwo = React.forwardRef(({ condition }, ref) => {
  const { employment, setEmployment } = useContext(AppContext);
  const { summary, setSummary } = useContext(AppContext);
  const { personal, setPersonal } = useContext(AppContext);
  const { hobbies, setHobbbies } = useContext(AppContext);
  const { website, setWebsite } = useContext(AppContext);
  const { colors, setColors } = useContext(AppContext);
  const { language, setLanguage } = useContext(AppContext);
  const { skill, setSkill } = useContext(AppContext);
  const { education, setEducation } = useContext(AppContext);
  const { reference, setReference } = useContext(AppContext);
  let safeHtml = DOMPurify.sanitize(summary[0]);
  return (
    <div ref={ref} className="container">
      <div className="left_Side">
        {personal[0].map((value, index) => (
          <>
            <div className="profileText">
              <div className="imgBx">
                <img className="photo" src="images/image.jpg" />
              </div>
              <br />
              <h2 className={styles.header}>
                {value.firstName} {value.lastName} <br />
                <span>{value.title}</span>
              </h2>
            </div>
            <div className="contactInfo">
              <h3 className="title">Contact Info</h3>
              <ul>
                <li>
                  <span className="icon">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </span>
                  <span className="text">{value.phone}</span>
                </li>
                <li>
                  <span className="icon">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </span>
                  <span className="text">{value.email}</span>
                </li>
                <li>
                  <span className="icon">
                    <i className="pi pi-globe" aria-hidden="true"></i>
                  </span>
                  <span className="text">www.mywebsite.com</span>
                </li>
                <li>
                  <span className="icon">
                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                  </span>
                  <span className="text">www.linkedin/me</span>
                </li>
                <li>
                  <span className="icon">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  <span className="text">Moscow, Russia</span>
                </li>
              </ul>
            </div>
          </>
        ))}

        <div className="contactInfo language">
          <h3 className="title">Languages</h3>
          <ul>
            {language[0].map((value, index) => (
              <li key={index}>
                <span className="text">{value.language}</span>
                <span className="percent">
                  <div className="englishw50"></div>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right_Side">
        <div className="about">
          <h2 className="title2">Profile</h2>
          <div dangerouslySetInnerHTML={{ __html: safeHtml }} />
        </div>
        <div className="about">
          <h2 className="title2">Education</h2>
          {education[0].map((value, index) => (
            <div className="box" key={index}>
              <div className="year_company">
                <h5>{moment(value.startDate).format(
                        "MMMM YYYY"
                      )}
                      - {moment(value.endDate).format("MMMM YYYY")}</h5>
                <h5 className="small py-1">{value.degree}</h5>
              </div>
              <div className="text">
                <h4>{value.school}</h4>
                <p className="py-1">
                {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="about">
          <h2 className="title2">Experience</h2>
          {employment[0].map((value, index) => (
            <div className="box" key={index}>
              <div className="year_company">
                <h5>{moment(value.startDate).format(
                        "MMMM YYYY"
                      )}
                      - {moment(value.endDate).format("MMMM YYYY")}</h5>
                <h5 className="small py-1">{value.employer}</h5>
              </div>
              <div className="text">
                <h4>{value.title}</h4>
                <p className="py-1">
                {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="about skills">
          <h2 className="title2">Professionals skills</h2>
          <div className="box">
            <h4>HTML</h4>
            <div className="percent">
              <div className="htmlws30"></div>
            </div>
          </div>
          <div className="box">
            <h4>CSS</h4>
            <div className="percent">
              <div className="cssws45"></div>
            </div>
          </div>
          <div className="box">
            <h4>JavaScript</h4>
            <div className="percent">
              <div className="jsws70"></div>
            </div>
          </div>
          <div className="box">
            <h4>Photoshop</h4>
            <div className="percent">
              <div className="phws40"></div>
            </div>
          </div>
          <div className="box">
            <h4>Illustrator</h4>
            <div className="percent">
              <div className="ilws60"></div>
            </div>
          </div>
          <div className="box">
            <h4>Adobe XD</h4>
            <div className="percent">
              <div className="adw70"></div>
            </div>
          </div>
        </div>
        <div className="about interest">
          <h2 className="title2">Interests</h2>
          <ul>
            <li>
              <i className="fa fa-book" aria-hidden="true"></i> Reading
            </li>
            <li>
              <i className="fa fa-gamepad" aria-hidden="true"></i> Gaming
            </li>
            <li>
              <i className="fa fa-cutlery" aria-hidden="true"></i> Cooking
            </li>
            <li>
              <i className="fa fa-microphone" aria-hidden="true"></i> Singing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default templateTwo;
