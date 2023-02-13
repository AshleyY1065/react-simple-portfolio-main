import {createUseStyles} from "react-jss";
import {colorBlue, colorDark, colorLight, DEFAULT_RADIUS, defaultFontBold} from "../../constants";

export const useStyles = createUseStyles({
    aboutContainer: {
        marginTop: 40,
        marginBottom: 40,
        '@media all and (min-width: 960px)': {
            marginTop: 160,
            marginBottom: 160,
        },
    },
    aboutMeContainer: {
        display: 'flex',
        flexDirection: 'column-reverse',
        '@media all and (min-width: 960px)': {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    },
    aboutMeTextWrapper: {
        '& p': {
            fontSize: 16,
        },
        '@media all and (min-width: 960px)': {
            paddingRight: 120,
        },
    },
    aboutMeImage: {
        width: 200,
        height: 200,
        objectFit: 'cover',
        borderRadius: '50%',
        margin: '0 auto 40px',
        '@media all and (min-width: 960px)': {
            width: 500,
            maxWidth: '100%',
            height: 400,
            borderRadius: DEFAULT_RADIUS,
            margin: 'initial',
        },
    },
    checkOutCV: {
        display: 'inline-block',
        marginTop: 80,
        fontSize: 14,
        fontFamily: defaultFontBold,
        color: colorLight,
        backgroundColor: colorBlue,
        padding: '15px 20px',
        borderRadius: DEFAULT_RADIUS,
        textDecoration: 'none',
        transition: 'all ease 500ms',
        '&:hover': {
            backgroundColor: colorDark,
        },
    },
});
