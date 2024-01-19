import { Typography, Card, Box } from "@mui/material";

import classes from "./ProjectCard.module.css";
import { useState } from "react";
import { ProjectInformation } from "../assets/information";
import imageUrl from "../utils/dinamicImport";

const ProjectCard = ({ element, onClick }: props) => {
    const [mouseState, setMouseState] = useState(false);

    return (
        <Card
            style={{
                width: "250px",
                height: "150px",
                overflow: "hidden",
                boxShadow: "0 0 5px 1px white",
            }}
            onMouseEnter={() => setMouseState(true)}
            onMouseLeave={() => setMouseState(false)}
        >
            <Box
                sx={{ bgcolor: "primary.main" }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                className={`${classes["hidden-content"]} ${
                    mouseState ? classes["hidden-content-hover"] : ""
                }`}
                onClick={(e) => {
                    onClick(e, element.id);
                }}
            >
                <Typography
                    sx={{ color: "white", p: "10px", cursor: "pointer" }}
                    variant="h5"
                    align="center"
                >
                    {element.title}
                </Typography>
            </Box>
            <div
                className={classes.content}
                onClick={(e) => {
                    onClick(e, element.id);
                }}
            >
                <img width="100%" src={imageUrl(element.image)} alt="green iguana" />
            </div>
        </Card>
    );
};

type props = {
    onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>, key: string) => void;
    element: ProjectInformation;
};

export default ProjectCard;
