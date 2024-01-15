import { Typography } from "@mui/material";

import classes from "./LinkItem.module.css";

const LinkItem = ({ to, text, location }: LinkItemProps) => {
    // if the link is clicked change its color
    const selected = location.includes(text) ? "#cfcfcf" : "white";
    return (
        <a href={to} className={classes.link}>
            <Typography
                sx={{
                    color: selected,
                    fontSize: { xs: "0.9rem", sm: "0.9rem", md: "1.1rem" },
                    "&:hover": { color: "#cfcfcf" },
                }}
            >
                {text}
            </Typography>
        </a>
    );
};
type LinkItemProps = { to: string; text: string; location: string };

export default LinkItem;
