import React, {FC, ReactElement} from 'react';
import {useStyles} from './PageHeading.styles';
import {useGlobalStyles} from "../../constants";

interface Props {
    title: string;
    description?: ReactElement;
}

const PageHeading: FC<Props> = ({ title, description }) => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <div className={classes.pageHeadingContainer}>
            <h2 className={globalClasses.h2}>{title}</h2>
            <p className={classes.smallText}>
                {description}
            </p>
        </div>
    );
};

export default PageHeading;
