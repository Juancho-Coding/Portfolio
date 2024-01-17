import { useState } from "react";
import NavBar from "../components/NavBar";
import Presentation from "../components/sections/Presentation";
import Skills from "../components/sections/Skills";
import Projects from "../components/sections/Projects";
import ProjectContainer from "../components/ProjectsContainer";

const Main = () => {
    const [currentSection, setCurrentSection] = useState("Home");

    return (
        <div>
            <NavBar currentSection={currentSection} />
            <Presentation onVisible={setCurrentSection} />
            <Skills onVisible={setCurrentSection} />
            <Projects onVisible={setCurrentSection} />
        </div>
    );
};

export default Main;
