import React, {FC} from 'react';
import {useStyles} from './WelcomeSection.styles';
import AshleyImage from '../../assets/Ashley.png';
import clsx from "clsx";
import {useGlobalStyles} from "../../constants";

interface Props {
}

const WelcomeSection: FC<Props> = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <div className={classes.welcomeContainer}>
            <h1 className={clsx(globalClasses.h1, classes.welcomeText)}>
                Hi there!<br/>
                <span>I’m Ashley - A website developer based in Canton, Texas</span><br/>
                Currently working as a freelance full stack developer & open to collaboration.<br/>
            </h1>
            <img src={AshleyImage} alt="Ashley" className={classes.welcomeImage} />
        </div>
    );
};

export default WelcomeSection;
