import {createUseStyles} from "react-jss";
import {colorDark, colorGray, DEFAULT_PADDING, defaultFontMedium} from "../../../constants";

export const useStyles = createUseStyles({
    navLinks: {
        fontFamily: defaultFontMedium,
        color: colorGray,
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        '& li': {
            width: '100%',
        },
        '& li a': {
            display: 'block',
            width: '100%',
            padding: '40px 0',
            textAlign: 'center',
            color: colorGray,
            textDecoration: 'none',
            cursor: 'pointer',
            '&:hover': {
                color: colorDark,
            },
        },
        '@media all and (min-width: 696px)': {
            flexDirection: 'row',
            '& li': {
                width: 'initial',
            },
            '& li a': {
                width: 'auto',
                padding: DEFAULT_PADDING,
            },
        },
    },
    navLinksFooter: {
        '& li a': {
            textAlign: 'left',
        },
    },
    navLinkActive: {
        color: `${colorDark} !important`,
    },
});
