import './post.css';
import { MoreVert } from '@material-ui/icons';
import { Users } from '../../dummyData';
import { useState } from 'react';

const Post = ({ post }) => {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    };

    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img
                            className='shareProfileImg'
                            src={
                                Users.filter((u) => u.id === post.userId)[0]
                                    .profilePicture
                            }
                            alt='user'
                        />
                        <span className='postUsername'>
                            {
                                Users.filter((u) => u.id === post.userId)[0]
                                    .userName
                            }
                        </span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVert className='postTopRightIcon' />
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>{post?.descr}</span>
                    <img className='postImg' src={post.photo} alt='post' />
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <img
                            className='likeIcon'
                            src='/assets/like.png'
                            alt='like'
                            onClick={likeHandler}
                        />
                        <img
                            className='likeIcon'
                            src='/assets/heart.png'
                            alt='heart'
                            onClick={likeHandler}
                        />
                        <span className='likeCounter'>
                            {like} people liked it
                        </span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentText'>
                            {post.comment} comments
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
