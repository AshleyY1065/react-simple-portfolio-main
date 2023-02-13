import {createUseStyles} from "react-jss";

export const useStyles = createUseStyles({
    container: {},
    workWrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: 80,
        '@media (min-width: 696px)': {
            gridGap: 160,
        },
    },
});
