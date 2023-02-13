import React, {FC} from 'react';
import {useStyles} from './BlogPage.styles';
import {useGlobalStyles} from "../../constants";
import PageHeading from "../../components/PageHeading";
import SayHelloSection from "../../components/SayHelloSection";
import BlogPostsSection from "../../components/BlogPostsSection";

interface Props {
}

const BlogPage: FC<Props> = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <main className={globalClasses.container}>
            <PageHeading
                title="Blog posts"
                description={
                    <>
                        Read about my latest challenges and case studies.<br />
                        I try to post about everything and anything I learn.
                    </>
                }
            />
            <BlogPostsSection />
            <SayHelloSection />
        </main>
    );
};

export default BlogPage;
