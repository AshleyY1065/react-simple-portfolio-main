import {createUseStyles} from "react-jss";
import {colorDark, colorGray, DEFAULT_RADIUS, defaultFontMedium} from "../../constants";

export const useStyles = createUseStyles({
    welcomeContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '20vh',
        marginBottom: '20vh',
    },
    welcomeText: {
        paddingRight: 40,
        lineHeight: 1.5,
    },
    welcomeImage: {
        display: 'none',
        width: 300,
        height: 'auto',
        objectFit: 'cover',
        borderRadius: DEFAULT_RADIUS,
        '@media all and (min-width: 960px)': {
            display: 'block',
        },
    },
});
