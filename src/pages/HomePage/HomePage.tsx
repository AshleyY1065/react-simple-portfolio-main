import React, {FC} from 'react';
import {useStyles} from './HomePage.styles';
import {useGlobalStyles} from "../../constants";
import WelcomeSection from "../../components/WelcomeSection";
import BlogPostsSection from "../../components/BlogPostsSection";
import SayHelloSection from "../../components/SayHelloSection";

interface Props {
}

const HomePage: FC<Props> = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <main className={globalClasses.container}>
            <WelcomeSection />
            <BlogPostsSection />
            <SayHelloSection />
        </main>
    );
};

export default HomePage;
