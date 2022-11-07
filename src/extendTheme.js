import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: `'Kumbh Sans', sans-serif`,
        body: `'Kumbh Sans', sans-serif`,
    },

    textStyles: {
        paragraph: {
            fontSize: "16px",
        },
    },

    colors: {
        primary: {
            orange: "hsl(26, 100%, 55%)",
            paleOrange: "hsl(25, 100%, 94%)",
            customLightGray: "#C6C6C6",
            customGray: "#69707D",
        },
        neutral: {
            veryDarkBlue: "hsl(220, 13%, 13%)",
            darkGrayishBlue: "hsl(219, 9%, 45%)",
            grayishBlue: "hsl(220, 14%, 75%)",
            lightGrayishBlue: "hsl(223, 64%, 98%)",
            white: "hsl(0, 0%, 100%)",
            black: "hsl(0, 0%, 0%)", //with 75% opacity for lightbox background
        },
    },
});

export default theme;
