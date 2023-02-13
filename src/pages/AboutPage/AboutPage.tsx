import React, {FC} from 'react';
import {useStyles} from './AboutPage.styles';
import {useGlobalStyles} from "../../constants";
import SayHelloSection from "../../components/SayHelloSection";
import AshleyImage from '../../assets/Ashley.png';
import {Link} from "react-router-dom";

interface Props {
}

const AboutPage: FC<Props> = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <main className={globalClasses.container}>
            <div className={classes.aboutContainer}>
                <div className={classes.aboutMeContainer}>
                    <div className={classes.aboutMeTextWrapper}>
                        <p>
                            Hi! My name is Ashley Yarbrough and I'm a full stack developer based in Canton, Texas, USA<br/>
                            <br/>Fluent in both 🇺🇸English and 🇲🇽Spanish.
                        </p>
                        <p>
                            I began my journey with website development in 2021, when I had just returned to Texas from teaching English in South Korea for 4 years. I began with an interest in Data Structure and Algorithms in Python. I quickly learned that my problem-solving skills were perfectly aligned for my Full Stack studies. I knew web development is what interested me the most. A good balance of being both creative and technical.
                        </p>
                        <p>
                            
                        </p>
                        <p>As a full stack developer with experience working abroad, I have a diverse skill set and global perspective that allows me to bring fresh ideas and solutions to any project. As a Latina, I am also committed to increasing diversity and representation in the tech industry. I have a strong foundation in both front-end and back-end development, and am constantly seeking to learn and stay up-to-date with the latest technologies. I am excited to continue learning and growing as a developer, and am eager to join a team where I can utilize my skills and make a positive impact.
                        </p>
                        <p>
                            I’ve worked on a wide range of projects, ranging from creating a curated camping web app to a hybrid working management app.
                        </p>
                    </div>
                    <img src={AshleyImage} alt="Ashley Yarbrough" className={classes.aboutMeImage} />
                </div>
                <Link to="/contact" className={classes.checkOutCV}>Check out my CV</Link>
            </div>
            <SayHelloSection />
        </main>
    );
};

export default AboutPage;
