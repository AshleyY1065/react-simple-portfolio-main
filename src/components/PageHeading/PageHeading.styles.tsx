import {createUseStyles} from "react-jss";
import {colorGray, defaultFont} from "../../constants";

export const useStyles = createUseStyles({
    pageHeadingContainer: {
        margin: `120px 0`,
    },
    smallText: {
        fontFamily: defaultFont,
        fontSize: 14,
        color: colorGray,
    },
});
