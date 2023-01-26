import React from "react";
import Image from 'next/image'

export default function hero() {
  return (
    <div className="hero">
      <div className="hero__main">
        <div className="hero__subtitle">Online resume builder</div>
        <h1 className="hero__title">
        Only 2% of resumes make it past the first round. Be in the top 2%
        </h1>
        <div className="hero__text">
        Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try now for free!
        </div>
        <button className="btn__primary">
            Create My Resume
        </button>

      </div>
        <div className="resume__img">
           <Image 
            src="/assets/resume.png"
            width={1000}
            height={1000}
           />
        </div>
    </div>
  );
}
