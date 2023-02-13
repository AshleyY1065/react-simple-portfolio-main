import {createUseStyles} from "react-jss";
import {
    colorBlue,
    colorGray, colorLight,
    colorLightGray,
    DEFAULT_PADDING,
    DEFAULT_RADIUS,
    defaultFont,
    defaultFontMedium
} from "../../constants";

export const useStyles = createUseStyles({
    container: {},
    formInput: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: DEFAULT_PADDING,
        '& label': {
            fontFamily: defaultFontMedium,
            fontSize: 14,
            paddingBottom: 8,
        },
        '& input, & textarea': {
            backgroundColor: colorLightGray,
            padding: '13px 16px',
            borderRadius: DEFAULT_RADIUS,
            color: colorGray,
            border: 'none',
            outline: 'none',
            fontFamily: defaultFont,
        },
        '& textarea': {
            resize: 'vertical',
            minHeight: 50,
        },
        '& div': {
            color: 'red',
            fontSize: 14,
            paddingTop: 8,
        },
    },
    formButton: {
        background: colorBlue,
        color: colorLight,
        outline: 'none',
        border: 'none',
        borderRadius: DEFAULT_RADIUS,
        padding: DEFAULT_PADDING,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: defaultFontMedium,
        fontSize: 14,
        cursor: 'pointer',
        '& span': {
            marginRight: 8,
        },
        '& svg path': {
            fill: colorLight,
        },
    },
});
