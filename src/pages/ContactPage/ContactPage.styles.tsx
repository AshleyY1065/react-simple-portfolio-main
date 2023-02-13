import {createUseStyles} from "react-jss";
import {colorBlue, colorGray, defaultFontBold} from "../../constants";

export const useStyles = createUseStyles({
    container: {
        paddingTop: 40,
        display: 'grid',
        gridTemplateColumns: '1fr',
        '@media all and (min-width: 960px)': {
            paddingTop: 160,
            gridTemplateColumns: 'repeat(2, 1fr)',
        },
    },
    contactLeftContainer: {},
    contactRightFormContainer: {},
    smallText: {
        fontSize: 14,
        color: colorGray,
        padding: '20px 0',
    },
    email: {
        display: 'block',
        fontFamily: defaultFontBold,
        fontSize: 16,
        color: colorBlue,
        textDecoration: 'none',
        paddingBottom: 80,
        '@media all and (min-width: 960px)': {
            paddingBottom: 0,
        },
    },
});
