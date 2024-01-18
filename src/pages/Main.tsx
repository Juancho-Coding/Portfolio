import { useState } from "react";
import NavBar from "../components/NavBar";
import Presentation from "../components/sections/Presentation";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

const Main = () => {
    const [currentSection, setCurrentSection] = useState("Home");

    return (
        <div>
            <NavBar currentSection={currentSection} />
            <Presentation onVisible={setCurrentSection} />
            <Skills onVisible={setCurrentSection} />
            <Projects onVisible={setCurrentSection} />
            <Contact onVisible={setCurrentSection} />
        </div>
    );
};

export default Main;
