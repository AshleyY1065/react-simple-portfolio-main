import React, {FC} from 'react';
import {useStyles} from './WorkPage.styles';
import {useGlobalStyles} from "../../constants";
import PageHeading from "../../components/PageHeading";
import SayHelloSection from "../../components/SayHelloSection";
import WorkPost from "../../components/WorkPost";
import {tempWorkPosts} from "../../helpers/tempWorkPosts";

interface Props {
}

const WorkPage: FC<Props> = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <main className={globalClasses.container}>
            <PageHeading
                title="Portfolio"
                description={
                    <>
                        I work as a full stack web developer using these skills:<br/><br/>
                        
                        <b>Front End:</b> HTML, CSS, JavaScript, React.js, TypeScript, React Native, Redux.js, Flask, Django, jQuery, SASS
                        <br/><b>Back End:</b> Python, SQL, NodeJS, PostgreSQL, Express.js, Amazon Web Services (AWS), Google Cloud, Azure
                        <br/><b>Developer Tools:</b> Git, Bash, Docker, Kubernetes, VS Code, GitHub <br/><br/>
                        Check out some of the projects I worked on.
                    </>
                }
            />
            <div className={classes.workWrapper}>
                {tempWorkPosts.map((post, i) => <WorkPost post={post} reversed={i % 2 !== 0} />)}
            </div>
            <SayHelloSection />
        </main>
    );
};

export default WorkPage;
