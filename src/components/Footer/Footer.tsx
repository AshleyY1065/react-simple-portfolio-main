import React, {FC} from 'react';
import {useStyles} from './Footer.styles';
import {useGlobalStyles} from "../../constants";
import NavigationLinks from "../Navigation/NavigationLinks";
import NavigationSocialLinks from "../Navigation/NavigationSocialLinks";

interface Props {
}

const Footer: FC<Props> = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <div className={globalClasses.container}>
            <footer className={classes.footerContainer}>
                <NavigationLinks footer />
                <NavigationSocialLinks />
            </footer>
        </div>
    );
};

export default Footer;
