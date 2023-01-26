import "../styles/globals.css";
import "../components/header.css";
import "../components/footer.css";
import "../components/hero/hero.css";
import "../pages/generator/generator.css";
import "../components/forms/education";
import "../components/forms/employmentHistory";
import "../components/forms/hobbies";
import "../components/forms/languages";
import "../components/forms/personalDetail";
import "../components/forms/professioanalSumary";
import "../components/forms/reference";
import "../components/forms/skillComponent";
import "../components/forms/website";
import "../components/forms/colors";
import "../components/forms/forms.css";
import "../components/cv-templates/templateOne";
import "../components/cv-templates/templateTwo";
import "../components/cv-templates/templateThree";
import "../components/cv-templates/templateFour";
import "../components/cv-templates/templateOne.module.css";
import "../components/cv-templates/templateTwo.module.css";
import "../components/cv-templates/templateThree.css";
import "../components/cv-templates/templateFour.css";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { Inter } from "@next/font/google";
import AppContext from "../context/AppContext";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const [employment, setEmployment] = useState([]);
  const [education, setEducation] = useState([]);
  const [pic, setPic] = useState();
  const [website, setWebsite] = useState([]);
  const [skill, setSkill] = useState([]);
  const [reference, setReference] = useState([]);
  const [summary, setSummary] = useState("");
  const [personal, setPersonal] = useState([
    {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      postalCode: "",
      drivingLicense: "",
      nationality: "",
      placeOfBirth: "",
      dateOfBirth: "",
    },
  ]);
  const [hobbies, setHobbbies] = useState("");
  const [colors, setColors] = useState("");
  const [language, setLanguage] = useState([]);
  return (
    <AppContext.Provider
      value={{
        employment: [employment, setEmployment],
        education: [education, setEducation],
        website: [website, setWebsite],
        skill: [skill, setSkill],
        reference: [reference, setReference],
        summary: [summary, setSummary],
        personal: [personal, setPersonal],
        hobbies: [hobbies, setHobbbies],
        colors: [colors, setColors],
        language: [language, setLanguage],
        pic: [pic, setPic],
      }}
    >
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </AppContext.Provider>
  );
}
