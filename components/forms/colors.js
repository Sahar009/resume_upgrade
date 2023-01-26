import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";

export default function colors() {
  const { colors, setColors } = useContext(AppContext);
  const [color, setColor] = colors;

  const handleColor = (value) => {
    setColor(value);
  };

  return (
    <div className="colors">
      <button
        className="btn__color yellow"
        onClick={() => handleColor("#fff66d")}
      ></button>
      <button
        className="btn__color green"
        onClick={() => handleColor("#4bfbba")}
      ></button>
      <button
        className="btn__color blue"
        onClick={() => handleColor("#9aebfe")}
      ></button>
      <button
        className="btn__color gold"
        onClick={() => handleColor("#fed78c")}
      ></button>
      <button
        className="btn__color gray"
        onClick={() => handleColor("#e4e4e4")}
      ></button>
    </div>
  );
}
