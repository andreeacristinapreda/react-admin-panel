import React from 'react';
import PostItem from './PostItem';
function PostList(props){
    const { posts } = props;
    return (
        <div>
            <h2>Postari:</h2>
            { posts.map((post, index) => {
                return <PostItem
                    id={ post.id }
                    title={ post.title }
                    body={ post.body }
                />
            })}
        </div>
    );
}
export default PostList;