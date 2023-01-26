import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";

export default function hobbies() {
    const { hobbies, setHobbbies } = useContext(AppContext);
    const [hobby, setHobbby] = hobbies

    const handleHobby = (e) => {
        setHobbby(e.target.value)
    }

  return (
    <div className="personal">
      <div className="title">Hobbies</div>
      <small className="pb-1">What do you like?</small>

      <div className="grouped__accordion">
        <div className="accordion-tab">
          <div className="full__form ">
            <textarea value={hobby} onChange={(e) => handleHobby(e)} name="" id="" cols="30" rows="5" />
          </div>
        </div>
      </div>
    </div>
  );
}
