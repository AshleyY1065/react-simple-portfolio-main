import React, {FC} from 'react';
import {useStyles} from './NavigationSocialLinks.styles';
import {ReactComponent as GithubIcon} from "../../../assets/icons/github.svg";
import {ReactComponent as LiIcon} from "../../../assets/icons/linkedin.svg";

interface Props {
}

const NavigationSocialLinks: FC<Props> = () => {
    const classes = useStyles();

    return (
        <ul className={classes.navSocialLinks}>
            <li><a href="https://github.com/AshleyY1065"><GithubIcon className={classes.socialIcon} /></a></li>
            <li><a href="https://www.linkedin.com/in/ashleyyarbroughdev"><LiIcon className={classes.socialIcon} /></a></li>
        </ul>
    );
};

export default NavigationSocialLinks;
