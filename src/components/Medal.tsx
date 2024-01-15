import { Avatar } from "@mui/material";

import classes from "./Medal.module.css";

const Medal = (props: medalProps) => {
    const clickHandler = () => {
        window.open(props.url, "_blank");
    };

    return (
        <button className={classes.medal} onClick={clickHandler}>
            <Avatar
                sx={{
                    ml: "-1px",
                    mt: "-1px",
                    boxSizing: "border-box",
                    width: "40px",
                    height: "40px",
                    bgcolor: props.bg ? props.bg : "transparent",
                    border: "2px solid",
                    borderColor: props.borderColor,
                    "&:hover": {
                        color: "#3c52b2",
                    },
                }}
            >
                {props.icon}
            </Avatar>
        </button>
    );
};

type medalProps = {
    bg?: string;
    borderColor: string;
    icon?: React.ReactNode;
    url: string;
};

export default Medal;
