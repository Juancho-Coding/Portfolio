import { Box } from "@mui/material";
import MedalsGroup from "./MedalsGroup";

const Footer = () => {
    return (
        <Box
            sx={{
                display: { xs: "block", sm: "block", md: "none" },
                mb: 3,
            }}
        >
            <MedalsGroup />
        </Box>
    );
};

export default Footer;
