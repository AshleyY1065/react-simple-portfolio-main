import {createUseStyles} from "react-jss";
import {colorLightGray, DEFAULT_PADDING} from "../../constants";

export const useStyles = createUseStyles({
    footerContainer: {
        borderTop: `1px solid ${colorLightGray}`,
        paddingTop: DEFAULT_PADDING,
        paddingBottom: DEFAULT_PADDING,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
