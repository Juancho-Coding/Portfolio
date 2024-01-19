import { Avatar, Popover, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import classes from "./Medal.module.css";
import { useState } from "react";

const Medal = (props: medalProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const navigate = useNavigate();
    const clickHandler = () => {
        if (props.internal) {
            return navigate(props.url);
        }
        window.open(props.url, "_blank");
    };

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <button
                className={classes.medal}
                onClick={clickHandler}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
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
            {props.popover && (
                <Popover
                    id="mouse-over-popover"
                    sx={{
                        pointerEvents: "none",
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "center",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography sx={{ p: 1 }}>{props.popover}</Typography>
                </Popover>
            )}
        </>
    );
};

type medalProps = {
    bg?: string;
    borderColor: string;
    icon?: React.ReactNode;
    url: string;
    internal?: boolean;
    popover?: string;
};

export default Medal;
