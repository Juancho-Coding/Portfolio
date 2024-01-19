import { Stack } from "@mui/material";
import Medal from "./Medal";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import pdf from "../assets/HV.pdf";

const MedalsGroup = () => {
    return (
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
            <Medal
                borderColor="#bbbbbb"
                icon={<LinkedInIcon />}
                url="https://www.linkedin.com/in/juanpabloalvarezovalle-backend-developer"
            />
            <Medal
                borderColor="#bbbbbb"
                icon={<GitHubIcon />}
                url="https://github.com/Juancho-Coding"
            />
            <Medal
                borderColor="#bbbbbb"
                icon={<ContactPageIcon />}
                url={pdf}
                popover="Download my resume"
            />
        </Stack>
    );
};

export default MedalsGroup;
