import React, {FC} from 'react';
import {useStyles} from './BlogPost.styles';
import IBlogPost from "../../models/IBlogPost";
import {useGlobalStyles} from "../../constants";
import {ReactComponent as ArrowIcon} from '../../assets/icons/arrow.svg';

interface Props {
    post: IBlogPost;
}

const BlogPost: FC<Props> = ({ post }) => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <div className={classes.blogPostContainer}>
            <img src={post.imageUrl} className={classes.blogPostImage} />
            <div className={classes.blogPostTitle}>
                <h5 className={globalClasses.h5}>{post.title}</h5>
                <ArrowIcon />
            </div>
            <p className={classes.blogPostDescription}>{post.description}</p>
        </div>
    );
};

export default BlogPost;
