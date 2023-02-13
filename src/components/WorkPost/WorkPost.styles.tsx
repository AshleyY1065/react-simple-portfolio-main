import {createUseStyles} from "react-jss";
import {
    colorBlue,
    colorGray,
    DEFAULT_PADDING,
    DEFAULT_RADIUS,
    defaultFontMedium
} from "../../constants";

export const useStyles = createUseStyles({
    workPost: {
        display: 'flex',
        flexDirection: 'column',
        '@media all and (min-width: 960px)': {
            flexDirection: 'row',
            justify: 'space-between',
        },
    },
    workPostReversed: {
        flexDirection: 'column',
        '@media all and (min-width: 960px)': {
            flexDirection: 'row-reverse',
        },
    },
    postImage: {
        width: '100%',
        maxWidth: '100%',
        height: 286,
        borderRadius: DEFAULT_RADIUS,
        objectFit: 'cover',
        '@media all and (min-width: 960px)': {
            width: '50%',
            maxWidth: '100vw',
            height: 286,
        },
    },
    postInfo: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '@media all and (min-width: 960px)': {
            marginLeft: 40,
        },
    },
    postInfoReversed: {
        marginTop: 40,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '@media all and (min-width: 960px)': {
            marginRight: 40,
        },
    },
    postDescription: {
        fontSize: 14,
        color: colorGray,
    },
    visitWebsiteButton: {
        fontSize: 14,
        display: 'block',
        fontFamily: defaultFontMedium,
        color: colorBlue,
        textTransform: 'uppercase',
        textDecoration: 'none',
        paddingTop: DEFAULT_PADDING,
        paddingBottom: DEFAULT_PADDING,
        marginTop: 20,
        letterSpacing: 1.5,
    },
});
