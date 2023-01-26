import React, { useContext, useEffect, useState } from 'react'
import { Editor } from "primereact/editor";
import AppContext from '../../context/AppContext';

export default function professioanalSumary() {

  const { summary, setSummary } = useContext(AppContext);
  const [professional, setProfessional] = summary;

  const renderHeader = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
        <button className="ql-link" aria-label="Insert Link"></button>
        <button className="ql-list" aria-label="Unordered List"></button>
      </span>
    );
  };

  const header = renderHeader();

  return (
    <div className="personal">
    <div className="title">Professional Summary</div>
    <div className="full__form">
      <div className="form__group">
        <small className="pb-2">
          Write 2-4 short & energetic sentences to interest the
          reader! Mention your role, experience & most importantly -
          your biggest achievements, best qualities and skills.
        </small>
        <Editor
          headerTemplate={header}
          style={{ height: "320px" }}
          value={professional}
          onTextChange={(e) => setProfessional(e.htmlValue)}
        />
      </div>
    </div>
  </div>
  )
}
