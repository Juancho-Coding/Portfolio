import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

import { projects } from "./../assets/information";

import ProjectDetailedCard from "./ProjectDetailedCard";

const ProjectsContainer = (props: props) => {
    const [detailedView, setDetailedView] = useState(false);
    const [detailedItem, setDetailedItem] = useState<number | null>(null);
    const theme = useTheme();
    const matchesMd = useMediaQuery(theme.breakpoints.up("md"));

    const cardClickHandle = (_event: React.MouseEvent<HTMLElement, MouseEvent>, key: string) => {
        setDetailedView(true);
        const clickedItem = projects.findIndex((element) => {
            return element.id === key;
        });
        setDetailedItem(clickedItem);
        props.onSelection();
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                boxSizing: "border-box",
                justifyContent: "center",
            }}
        >
            {(matchesMd || !detailedView) && (
                <Box
                    sx={{
                        margin: "20px",
                        boxSizing: "border-box",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "1.1rem",
                            textAlign: "center",
                            pb: "10px",
                        }}
                    >
                        Here you will find some projects I've done <br />
                        during my career, some about software development, <br />
                        others about electronics, go ahead and click one
                    </Typography>

                    <Box
                        sx={{
                            justifyItems: "center",
                            boxSizing: "border-box",
                            display: "grid",
                            gridTemplateColumns: { sm: "1fr", md: "1fr 1fr" },
                            rowGap: "20px",
                            columnGap: "20px",
                        }}
                    >
                        {projects.map((element) => {
                            return (
                                <ProjectCard
                                    key={element.id}
                                    onClick={cardClickHandle}
                                    element={element}
                                />
                            );
                        })}
                    </Box>
                </Box>
            )}

            {detailedView && (
                <ProjectDetailedCard
                    item={detailedItem !== null ? projects[detailedItem] : null}
                    onClose={() => setDetailedView(false)}
                />
            )}
        </Box>
    );
};

type props = {
    onSelection: () => void;
};

export default ProjectsContainer;
