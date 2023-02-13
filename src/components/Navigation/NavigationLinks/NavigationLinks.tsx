import React, {FC} from 'react';
import {useStyles} from './NavigationLinks.styles';
import {NavLink} from "react-router-dom";
import clsx from "clsx";

interface Props {
    footer?: boolean;
}

const NavigationLinks: FC<Props> = ({ footer }) => {
    const classes = useStyles();

    return (
        <ul className={clsx(classes.navLinks, { [classes.navLinksFooter]: footer })}>
            <li><NavLink to="/work" className={({ isActive }) => clsx({ [classes.navLinkActive]: isActive })}>Work</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => clsx({ [classes.navLinkActive]: isActive })}>About me</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => clsx({ [classes.navLinkActive]: isActive })}>Blog</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => clsx({ [classes.navLinkActive]: isActive })}>Get in touch</NavLink></li>
        </ul>
    );
};

export default NavigationLinks;
