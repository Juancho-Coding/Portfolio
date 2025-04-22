import { Typography, Card, Fade } from "@mui/material";
import { useIntersection } from "../hooks/useIntersection";
import { useRef } from "react";

const customProps: IconProps = { fontSize: "large" };

const FeatureCard = ({ Icon, title, content }: props) => {
    const ref = useRef<HTMLElement>(null);
    const isVisible = useIntersection(ref, "0px", false);

    return (
        <Fade in={isVisible}>
            <Card
                sx={{ background: "#ffffff", padding: "15px" }}
                ref={ref as React.RefObject<HTMLDivElement>}
            >
                <Icon {...customProps} />
                <Typography variant="h5" mb="15px">
                    {title}
                </Typography>
                <Typography>{content}</Typography>
            </Card>
        </Fade>
    );
};

export type IconProps = {
    fontSize?: "inherit" | "large" | "medium" | "small";
    sx?: { m: string };
};

type props = {
    title: string;
    content: string;
    Icon: React.ComponentType<IconProps>;
};

export default FeatureCard;
