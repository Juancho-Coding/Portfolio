import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import imageUrl from "../utils/dinamicImport";

const SkillCardHor = ({ title, image }: CardProps) => {
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "row",
                height: "30px",
                width: "auto",
                p: "10px",
                background: "#e9e9e9",
                justifyContent: "space-evenly",
                alignItems: "center",
            }}
        >
            <CardMedia
                component="img"
                alt="skill"
                height="25px"
                image={imageUrl(image)}
                sx={{ width: "100%", objectFit: "contain" }}
            />
            <CardContent style={{ paddingBottom: "10px" }}>
                <Typography gutterBottom variant="h5" component="div" textAlign="center">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
};

type CardProps = {
    title: string;
    body: string;
    image: string;
};

export default SkillCardHor;
