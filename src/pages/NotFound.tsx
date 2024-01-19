import { Box, Button } from "@mui/material";

import classes from "./NotFound.module.css";

const Resume = () => {
    return (
        <Box
            width="100%"
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="stretch"
        >
            <Box className={classes.notfound}>
                <Box className={classes["notfound-404"]} mb={3}>
                    <h1>
                        4<span>0</span>4
                    </h1>
                </Box>
                <p>
                    The page you are looking for might have been removed had its name changed or is
                    temporarily unavailable.
                </p>
                <a href="/Portfolio">
                    <Button variant="contained">Home Page</Button>
                </a>
            </Box>
        </Box>
    );
};

export default Resume;
