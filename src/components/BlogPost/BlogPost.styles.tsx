import {createUseStyles} from "react-jss";
import {colorGray, DEFAULT_PADDING, DEFAULT_RADIUS, defaultFont} from "../../constants";

export const useStyles = createUseStyles({
    blogPostContainer: {
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        '& svg': {
            marginLeft: 8,
            transition: 'all ease 500ms',
        },
        '&:hover svg': {
            marginLeft: 16,
        },
    },
    blogPostImage: {
        height: 300,
        width: '100%',
        objectFit: 'cover',
        borderRadius: DEFAULT_RADIUS,
        marginBottom: DEFAULT_PADDING,
    },
    blogPostDescription: {
        fontFamily: defaultFont,
        fontSize: 15,
        color: colorGray,
    },
    blogPostTitle: {
        display: 'flex',
        alignItems: 'center',
    },
});
