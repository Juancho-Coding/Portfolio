import {
    Typography,
    Card,
    Fade,
    CardMedia,
    CardContent,
    Box,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { useIntersection } from "../hooks/useIntersection";
import { useRef } from "react";
import imageUrl from "../utils/dinamicImport";

import classes from "./TechCard.module.css";

const TechCard = ({ title, content, image }: props) => {
    const ref = useRef<HTMLElement>(null);
    const isVisible = useIntersection(ref, "0px", false);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <Fade in={isVisible}>
            <Card
                className={classes.card}
                sx={{
                    position: "relative",
                    display: "flex",
                }}
                ref={ref as React.RefObject<HTMLDivElement>}
            >
                <Box className={matches ? classes["card-content"] : classes["card-content-small"]}>
                    <CardContent>
                        <Typography variant="h5" mb="15px">
                            {title}
                        </Typography>
                        <Typography>{content}</Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    className={matches ? classes["card-media"] : classes["card-media-small"]}
                    component="img"
                    image={imageUrl(image)}
                    alt="Live from space album
                    cover"
                />
            </Card>
        </Fade>
    );
};

type props = {
    title: string;
    content: string;
    image: string;
};

export default TechCard;
