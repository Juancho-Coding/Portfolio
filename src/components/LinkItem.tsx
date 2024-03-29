import { Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";

import classes from "./LinkItem.module.css";

const LinkItem = ({ to, text, location }: LinkItemProps) => {
    // if the link is clicked change its color
    const selected = location.includes(text);
    return (
        <HashLink to={to} className={classes.link}>
            <Typography
                sx={{
                    fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1.1rem" },
                    "&:hover": { color: "#9c9c9c" },
                }}
                className={`${classes.text} ${selected ? classes["text-selected"] : ""}`}
            >
                {text}
            </Typography>
        </HashLink>
    );
};
type LinkItemProps = { to: string; text: string; location: string };

export default LinkItem;
