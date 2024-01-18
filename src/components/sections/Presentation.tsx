import { useRef, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import { useIntersection } from "../../hooks/useIntersection";
import coding from "../../assets/test.png";
import classes from "./Presentation.module.css";

const Presentation = ({ onVisible }: props) => {
    const message = `Welcome to the world of coding brilliance! 🚀 I am a passionate software developer with a keen interest in backend development and infrastructure. Armed with a love for coding and an insatiable appetite for self-learning. Coding is not just a job, it's a passion. From algorithms to elegant solutions, every line of code is a brushstroke in a masterpiece. Embracing new languages, frameworks, and methodologies is not a challenge but a thrilling adventure`;

    const ref = useRef<HTMLElement>(null);
    const isVisible = useIntersection(ref, "0px");

    useEffect(() => {
        if (isVisible) onVisible("Home");
    }, [isVisible]);

    return (
        <section
            style={{
                width: "100%",
            }}
            id="Home"
            ref={ref}
        >
            <Box
                sx={{
                    display: "flex",
                    m: "40px",
                    mt: "90px",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center", md: "stretch" },
                }}
            >
                <Box
                    sx={{
                        order: { xs: 1, md: 0 },
                        flex: 1,
                        p: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            p: "10px",
                            border: "1px solid #b8b8b8",
                            background: "linear-gradient(to right bottom, white, 20%, #10103d)",
                            display: { xs: "none", md: "block" },
                        }}
                    >
                        <Typography sx={{ fontSize: "1.2rem", fontWeight: "700" }}>
                            Welcome to my Portfolio
                        </Typography>
                    </Box>
                    <TypeAnimation
                        style={{ whiteSpace: "pre-line" }}
                        className={classes["type-animation"]}
                        sequence={[
                            "Hi! I'm Juan Pablo\n",
                            10,
                            "Hi! I'm Juan Pablo\nBackend Developer 😎",
                            1000,
                            "Hi! I'm Juan Pablo\nReact Developer 🎨",
                            1000,
                            "Hi! I'm Juan Pablo\nLabVIEW Developer 💻",
                            1000,
                            "Hi! I'm Juan Pablo\nElectronics Engineer 🛠️",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                    <Typography
                        sx={{ color: "lightgray", fontSize: "1.2rem", textAlign: "justify" }}
                    >
                        {message}
                    </Typography>
                    <Typography sx={{ color: "lightgray", fontSize: "1.2rem", mt: "10px" }}>
                        {"Look no further, Bring on the challenges! 💻🚀"}
                    </Typography>
                    <a href="#Contact">
                        <Button
                            sx={{
                                color: "white",
                                px: 2,
                                py: 1,
                                mt: 2,
                                ":hover": {
                                    bgcolor: "primary.main",
                                },
                            }}
                            endIcon={<ArrowForwardOutlinedIcon />}
                            variant="text"
                        >
                            Contact me
                        </Button>
                    </a>
                </Box>
                <Box
                    sx={{
                        flex: 1,
                        p: "20px",
                        display: "flex",
                        width: { xs: "200px", md: "100%" },
                    }}
                >
                    <div className={classes["blurred-image-container"]}>
                        <img
                            className={classes["blurred-image"]}
                            src={coding}
                            alt="Coding personal"
                        />
                    </div>
                </Box>
            </Box>
        </section>
    );
};

type props = {
    onVisible: React.Dispatch<React.SetStateAction<string>>;
};

export default Presentation;
