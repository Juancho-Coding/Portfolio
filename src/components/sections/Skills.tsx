import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import "react-circular-progressbar/dist/styles.css";

import SkillCard from "../SkillCard";
import SkillCardHor from "../SkillCardHor";
import { useIntersection } from "../../hooks/useIntersection";
import { useEffect, useRef } from "react";

const Skills = ({ onVisible }: props) => {
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.up("md"));

    const ref = useRef<HTMLElement>(null);
    const isVisible = useIntersection(ref, "0px");

    useEffect(() => {
        if (isVisible) onVisible("Skills");
    }, [isVisible]);

    return (
        <section style={{ width: "100%" }} id="Skills" ref={ref}>
            <Box
                sx={{
                    background: "linear-gradient(to bottom right, #32534c, black)",
                    pt: "140px",
                    pb: "140px",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        width: "90%",
                        background: "#3a3453",
                        borderRadius: "30px",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        pb: "50px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "4rem",
                            fontWeight: "800",
                            fontFamily: "Poppins",
                            textAlign: "center",
                            position: "relative",
                            top: "0px",
                        }}
                    >
                        Skills
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "1.1rem",
                            textAlign: "center",
                        }}
                    >
                        I've work and have came across with:
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            m: "10px",
                            flexWrap: "wrap",
                            rowGap: "10px",
                            columnGap: "10px",
                        }}
                    >
                        {skills.map((el) => {
                            return matchesMd ? (
                                <SkillCard
                                    image={el.image}
                                    title={el.title}
                                    body={el.body}
                                    key={el.title}
                                />
                            ) : (
                                <SkillCardHor
                                    image={el.image}
                                    title={el.title}
                                    body={el.body}
                                    key={el.title}
                                />
                            );
                        })}
                    </Box>
                </Box>
            </Box>
        </section>
    );
};

const skills = [
    { title: "NodeJS", body: "", image: "src/assets/nodejs-icon.svg" },
    { title: "ExpressJS", body: "", image: "src/assets/express.svg" },
    { title: "JavaScript", body: "", image: "src/assets/logo-javascript.svg" },
    { title: "TypeScript", body: "", image: "src/assets/typescript-2.svg" },
    { title: "ReactJS", body: "", image: "src/assets/react.svg" },
    { title: "HTML", body: "", image: "src/assets/html-1.svg" },
    { title: "CSS", body: "", image: "src/assets/css-3.svg" },
    { title: "Python", body: "", image: "src/assets/python.svg" },
    { title: "Git", body: "", image: "src/assets/git.svg" },
    { title: "LabVIEW", body: "", image: "src/assets/labview.svg" },
];

type props = {
    onVisible: React.Dispatch<React.SetStateAction<string>>;
};

export default Skills;
