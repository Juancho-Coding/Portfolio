import { useState } from "react";
import NavBar from "../components/NavBar";
import Presentation from "../components/sections/Presentation";
import Skills from "../components/sections/Skills";

const Main = () => {
    const [currentSection, setCurrentSection] = useState("Home");

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <NavBar currentSection={currentSection} />
            <Presentation onVisible={setCurrentSection} />
            <Skills onVisible={setCurrentSection} />
            <section style={{ height: "600px" }} id="Projects">
                Projects
            </section>
            <section style={{ height: "600px" }} id="Contact">
                Contact
            </section>
        </div>
    );
};

export default Main;
