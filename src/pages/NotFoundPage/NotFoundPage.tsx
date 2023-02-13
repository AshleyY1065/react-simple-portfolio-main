import React, {FC} from 'react';
import {useStyles} from './NotFoundPage.styles';
import {useGlobalStyles} from "../../constants";

interface Props {
}

const NotFoundPage: FC<Props> = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <div className={globalClasses.container}>
            Oops! Page not found
        </div>
    );
};

export default NotFoundPage;
