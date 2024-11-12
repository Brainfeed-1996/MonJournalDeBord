import React from 'react';

const Post = ({ author, content, imageUrl }) => {
    return (
        <div className="post">
            <h3>{author}</h3>
            {imageUrl && <img src={imageUrl} alt="Post Image" />}
            <p>{content}</p>
        </div>
    );
};

export default Post;
