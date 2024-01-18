import { Box, Button, Card, Fade, Typography } from "@mui/material";
import { ProjectInformation } from "../assets/information";
import { useState } from "react";
import Markdown from "react-markdown";

import GitHubIcon from "@mui/icons-material/GitHub";
import PreviewIcon from "@mui/icons-material/Preview";

const ProjectDetailedCard = ({ onClose, item }: props) => {
    const [visibility, setVisibility] = useState(true);

    return (
        <Fade
            in={visibility}
            appear={true}
            timeout={{ enter: 500, exit: 500 }}
            onExited={() => {
                onClose();
            }}
        >
            <Card
                sx={{
                    boxSizing: "border-box",
                    width: "600px",
                    height: "500px",
                    padding: "10px",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {item && (
                    <>
                        <Box
                            sx={{
                                boxSizing: "border-box",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Box>
                                <Typography sx={{ color: "black" }} variant="h5">
                                    {item.title}
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ color: "black", fontSize: "1rem" }}>
                                    <Markdown>{item.description}</Markdown>
                                </Typography>
                            </Box>
                            <Box display="flex" justifyContent="center">
                                {item.demo.length !== 0 && (
                                    <Button
                                        variant="contained"
                                        disabled
                                        startIcon={<PreviewIcon />}
                                    >
                                        Live Preview
                                    </Button>
                                )}
                                {item.github.length !== 0 && (
                                    <Button
                                        variant="contained"
                                        startIcon={<GitHubIcon />}
                                        sx={{ ml: 2 }}
                                        onClick={() => {
                                            window.open(item.github, "_blank");
                                        }}
                                    >
                                        Code
                                    </Button>
                                )}
                            </Box>
                        </Box>
                    </>
                )}
                {!item && (
                    <Box>
                        <Typography sx={{ color: "black" }} variant="h5">
                            Choose a project from the right to visualize
                        </Typography>
                    </Box>
                )}
                <Button
                    color="secondary"
                    variant="contained"
                    sx={{
                        position: "absolute",
                        bottom: 10,
                        right: 10,
                    }}
                    onClick={() => {
                        setVisibility(false);
                    }}
                >
                    Close
                </Button>
            </Card>
        </Fade>
    );
};

type props = {
    onClose: () => void;
    item: ProjectInformation | null;
};

export default ProjectDetailedCard;
