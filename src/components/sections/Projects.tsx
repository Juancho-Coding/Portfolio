import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import "react-circular-progressbar/dist/styles.css";

import { useIntersection } from "../../hooks/useIntersection";
import ProjectsContainer from "../ProjectsContainer";
import imageBackground from "../../assets/back.png";

const Prjects = ({ onVisible }: props) => {
    const [color, setColor] = useState("#adad05");

    const ref = useRef<HTMLElement>(null);
    const isVisible = useIntersection(ref, "0px");

    const selectionHandler = () => {
        setColor("#" + Math.random().toString(16).substr(-6));
    };

    useEffect(() => {
        if (isVisible) onVisible("Projects");
    }, [isVisible]);

    return (
        <section
            style={{
                width: "100%",
                height: "auto",
            }}
            id="Projects"
            ref={ref}
        >
            <Box
                style={{
                    flex: 1,
                    position: "relative",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "auto",
                }}
            >
                <Box
                    style={{
                        backgroundColor: `${color}`,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 0,
                    }}
                >
                    fs
                </Box>
                <img
                    src={imageBackground}
                    alt=""
                    width="100%"
                    height="100%"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        objectFit: "fill",
                        zIndex: 1,
                    }}
                />
                {/* a partir de este punto se ingresa el contenido */}
                <Box style={{ position: "relative", zIndex: 2 }}>
                    <Box
                        sx={{
                            pt: "100px",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                flexDirection: "column",
                                alignItems: "stretch",
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
                                Projects
                            </Typography>

                            <ProjectsContainer onSelection={selectionHandler} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </section>
    );
};

type props = {
    onVisible: React.Dispatch<React.SetStateAction<string>>;
};

export default Prjects;
