import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material";

import LinkItem from "./LinkItem";

import { useEffect, useState } from "react";
import MedalsGroup from "./MedalsGroup";
import { HashLink } from "react-router-hash-link";

const NavBar = ({ currentSection }: props) => {
    const [scrolled, setScrolled] = useState(false);

    // Effect to make the navbar transparent when scrolling
    useEffect(() => {
        const scrollHandler = () => {
            if (window.scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <Box width="100%">
            <AppBar position="fixed" color={scrolled ? "primary" : "transparent"}>
                <Toolbar sx={{ display: "flex" }}>
                    <Box
                        sx={{
                            width: "100%",
                            flex: 1,
                            display: "flex",
                        }}
                    >
                        <Typography
                            sx={{
                                md: "block",
                                sm: "none",
                                xs: "none",
                                marginRight: "auto",
                                fontWeight: "800",
                                fontFamily: "Poppins",
                            }}
                        >
                            <span style={{ fontSize: "30px" }}>
                                {scrolled ? " Juan Pablo" : "My Portfolio"}
                            </span>
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: "100%",
                            alignItems: "center",
                            flex: 1,
                            display: "flex",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <Box
                            sx={{
                                ml: "5px",
                                mr: "5px",
                                width: "100%",
                                alignItems: "center",
                                flex: 3,
                                display: "flex",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <LinkItem to="/#Home" text="Home" location={currentSection} />
                            <LinkItem to="/#Skills" text="Skills" location={currentSection} />
                            <LinkItem to="/#Projects" text="Projects" location={currentSection} />
                        </Box>
                        <Box
                            sx={{
                                ml: "5px",
                                mr: "5px",
                                display: { xs: "none", sm: "none", md: "flex" },
                                width: "100%",
                                alignItems: "center",
                                flex: 3,
                                justifyContent: "space-evenly",
                            }}
                        >
                            {/* Section with links for linkedin and github */}
                            <MedalsGroup />
                        </Box>
                        <Box
                            sx={{
                                ml: "5px",
                                mr: "5px",
                                width: "100%",
                                flex: 3,
                                display: { xs: "none", sm: "none", md: "flex" },
                                justifyContent: "space-evenly",
                            }}
                        >
                            {/* link to redirect to contact form */}
                            <HashLink to="/#Contact">
                                <Button
                                    sx={{
                                        whiteSpace: "nowrap",
                                        fontSize: "1.2rem",
                                        width: "100%",
                                        pt: "15px",
                                        pb: "15px",
                                        mt: "10px",
                                        mb: "10px",
                                        background: "#2e2e2e",
                                        color: "white",
                                        borderColor: "white",
                                        "&:hover": {
                                            borderColor: "white",
                                            background: "#2e2e2e",
                                        },
                                    }}
                                    variant="outlined"
                                >
                                    Get in touch !
                                </Button>
                            </HashLink>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

type props = { currentSection: string };

export default NavBar;
