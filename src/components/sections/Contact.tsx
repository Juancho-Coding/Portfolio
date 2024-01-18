import { useRef, useEffect } from "react";
import { Box } from "@mui/material";

import { useIntersection } from "../../hooks/useIntersection";
import ContactForm from "../ContactForm";

const Contact = ({ onVisible }: props) => {
    const ref = useRef<HTMLElement>(null);
    const isVisible = useIntersection(ref, "0px");

    useEffect(() => {
        if (isVisible) onVisible("Contacts");
    }, [isVisible]);

    return (
        <section
            style={{
                width: "100%",
            }}
            id="Contact"
            ref={ref}
        >
            <Box sx={{ display: "flex", flexDirection: "row", p: "30px", columnGap: 2 }}>
                <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                    <img src="src/assets/contact.png" alt="contact info" />
                </Box>
                <Box sx={{ margin: "auto" }}>
                    <ContactForm />
                </Box>
            </Box>
        </section>
    );
};

type props = {
    onVisible: React.Dispatch<React.SetStateAction<string>>;
};

export default Contact;
