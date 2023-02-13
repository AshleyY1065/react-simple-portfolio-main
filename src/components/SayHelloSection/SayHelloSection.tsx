import React, {FC} from 'react';
import {useStyles} from './SayHelloSection.styles';
import {useGlobalStyles} from "../../constants";
import {Link} from "react-router-dom";
import clsx from "clsx";

interface Props {
}

const SayHelloSection: FC<Props> = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <div className={classes.sayHelloContainer}>
            <div className={classes.sayHelloContainerLeft}>
                <h3 className={clsx(globalClasses.h3, classes.sayHelloTitle)}>Say hello 👋</h3>
                <p className={classes.smallText}>
                    Interested in working together or need any help?<br/>
                    Get in touch!
                </p>
            </div>
            <Link to="/contact" className={classes.getInTouchButton}>
                Get in touch!
            </Link>
        </div>
    );
};

export default SayHelloSection;
