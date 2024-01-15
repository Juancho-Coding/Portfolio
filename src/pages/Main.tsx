import NavBar from "../components/NavBar";
import Presentation from "../components/sections/Presentation";
import Skills from "../components/sections/Skills";

const Main = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <NavBar />
            <Presentation />
            <Skills />
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
