import {createUseStyles} from "react-jss";
import {
    colorBlue,
    colorDark,
    colorLight,
    colorLightGray,
    DEFAULT_PADDING,
    DEFAULT_RADIUS,
    defaultFontBold
} from "../../constants";

export const useStyles = createUseStyles({
    sayHelloContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        background: colorLightGray,
        padding: DEFAULT_PADDING,
        borderRadius: DEFAULT_RADIUS,
        margin: '80px 0 40px',
        '@media all and (min-width: 960px)': {
            flexDirection: 'row',
            alignItems: 'center',
            margin: '120px 0',
        },
    },
    sayHelloContainerLeft: {},
    sayHelloTitle: {
        fontSize: 24,
    },
    smallText: {
        fontSize: 14,
    },
    getInTouchButton: {
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
