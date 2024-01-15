import { createTheme, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme({
    typography: {
        fontFamily: ["Roboto Slab", "Poppins"].join(","),
    },
    palette: {
        primary: {
            main: "#323753",
        },
        secondary: {
            main: "#32534c",
        },
    },
});

const MainTheme = ({ children }: props) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

type props = { children?: ReactNode };

export default MainTheme;
