import {createUseStyles} from "react-jss";
import {colorDark, colorGray, defaultFontMedium} from "../../constants";

export const useStyles = createUseStyles({
    blogPostsContainer: {},
    blogPostsWrapper: {
        marginTop: 40,
        marginBottom: 40,
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: 40,
        '@media all and (min-width: 696px)': {
            gridTemplateColumns: '1fr 1fr',
        },
    },
    readMore: {
        fontFamily: defaultFontMedium,
        fontSize: 14,
        color: colorGray,
        textDecoration: 'none',
        '&:hover': {
            color: colorDark,
        },
    },
});
