import React, {FC} from 'react';
import {useStyles} from './WorkPost.styles';
import IWorkPost from "../../models/IWorkPost";
import clsx from "clsx";
import {useGlobalStyles} from "../../constants";
import {Link} from "react-router-dom";

interface Props {
    post: IWorkPost;
    reversed?: boolean;
}

const WorkPost: FC<Props> = ({ post, reversed }) => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return (
        <div className={clsx(classes.workPost, { [classes.workPostReversed]: reversed })}>
            <img src={post.imageUrl} alt={post.title} className={classes.postImage} />
            <div className={reversed ? classes.postInfoReversed : classes.postInfo}>
                <div>
                    <h3 className={globalClasses.h3}>{post.title}</h3>
                    <p className={classes.postDescription}>{post.description}</p>
                </div>
                {post.websiteUrl && (
                    <Link to={post.websiteUrl} className={classes.visitWebsiteButton}>Visit website</Link>
                )}
            </div>
        </div>
    );
};

export default WorkPost;
