import React, { createContext, useState } from "react";

// // For initialising the value
export const ThemeContext = createContext();

// // For provide the value to context object
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [projects] = useState([
    {
      name: "Phone-Book List",
      description:
        "It's an open-source website in which users can add a contact of a person and they can also perform updates and delete on the contact. It is hosted online. I have created crud API in node, which I used using React.Js in frontend. I have also use Redux,Reselect, and bootstrap.",
      image: "asset/projects/phonebook.svg",
      projectUrl: "https://phonebook-list.herokuapp.com/",
      githubUrl: "https://github.com/Smishra6422/phonebooklist",
    },
    {
      name: "The Shopper King",
      description:
        "It’s an e-commerce website where users can buy any product from their favorite store through us. This project is done by me and my teammates. My role in this project was to design the front end and then completed the front end and backend work along with database management. I used node.Js for the server-side and MongoDB for the database. I also made an admin interface from where we can add, delete, and edit any product from anywhere",
      image: "asset/projects/theshopperking.svg",
      projectUrl: "http://theshopperking.herokuapp.com/",
      githubUrl: "https://github.com/Smishra6422/theshopperking",
    },
    {
      name: "Covid-19",
      description:
        "It’s an open-source responsive website where users can see live COVID-19 updated data of 12 countries. I have used COVID-19 API for the live data fetching. I have also used Redux, Reselect, and bootstrap.",
      image: "asset/projects/coronavirus.svg",
      projectUrl: "http://corona-help-desk.herokuapp.com/",
      githubUrl: "https://github.com/Smishra6422/corona-help-desk",
    },
    {
      name: "Covid Landing Page",
      description:
        "It's a COVID-19 landing with full responsiveness across all devices. Itis a pure static page. This was actually a Figma design which I converted in UI using react and pure css. For images, I have used SVG.",
      image: "asset/projects/covidlandingpage.png",
      projectUrl: "https://covid19-landing-page.herokuapp.com/",
      githubUrl: "https://github.com/Smishra6422/covid19-landing-page",
    },
    {
      name: "Responsive Page",
      description:
        "It's a random landing home page with full responsiveness across all devices. I got a  design that I converted into UI using HTML,CSS,JavaScript,cycle2.js and lightbox library and pure CSS. there are two sliders on the page that I make using the cycle2.js library.",
      image: "asset/projects/responsivepage.png",
      projectUrl: "",
      githubUrl: "https://github.com/Smishra6422/Responsive_HomePage_Demo",
    },
    {
      name: "Todo List",
      description:
        "It's a simple todo application where users can add, delete, and update their tasks. For data persistence, I have used local storage. SO the next time user will goto the page their data will be there which they added.",
      image: "asset/projects/todoapp.svg",
      projectUrl: "",
      githubUrl: "https://github.com/Smishra6422/Todo_WIth_LocalStorage",
    },
  ]);
  const [certificates] = useState([
    {
      name: "Full Stack",
      image: "asset/certificate/upgrad.svg",
      certficateUrl:
        "https://www.credential.net/c5ffdaa4-e651-4e83-9dce-b0a0792d5360#gs.dx0hek",
    },
    {
      name: "MERN Bootcamp",
      image: "asset/certificate/lco.svg",
      certficateUrl:
        "https://drive.google.com/file/d/1sD-ZdLJEt8fMgYYGXfxEM1Z2Xe5FnBNE/view?usp=sharing",
    },
    {
      name: "Frontend React",
      image: "asset/certificate/coursera.svg",
      certficateUrl:
        "https://coursera.org/share/625b63c34ee905836fe553477ce9f9c8",
    },
    {
      name: "Server Side Node.JS",
      image: "asset/certificate/coursera.svg",
      certficateUrl:
        "https://coursera.org/share/db80d8754c424ca8259c7feb9e76973c",
    },
    {
      name: "Full Stack Microlearning",
      image: "asset/certificate/boradinfinty.svg",
      certficateUrl:
        "https://drive.google.com/file/d/17V7ojxM-dGMwc4csL6Ms0ByV_UDXNU9j/view?usp=sharing",
    },
  ]);

  const toggleTheme = (themeColor) => {
    setTheme(themeColor);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        projects,
        certificates,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
