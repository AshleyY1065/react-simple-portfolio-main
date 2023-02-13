import React, {FC} from 'react';
import {useStyles} from './BlogPostsSection.styles';
import {useGlobalStyles} from "../../constants";
import {tempBlogPosts} from "../../helpers/tempBlogPosts";
import BlogPost from "../BlogPost";
import {Link} from "react-router-dom";

interface Props {
}

const BlogPostsSection: FC<Props> = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <div className={classes.blogPostsContainer}>
            <h2 className={globalClasses.h4}>
                Latest blog posts
            </h2>
            <div className={classes.blogPostsWrapper}>
                {tempBlogPosts.map(post => <BlogPost post={post} />)}
                <Link to="#" className={classes.readMore}>Read more...</Link>
            </div>
        </div>
    );
};

export default BlogPostsSection;
