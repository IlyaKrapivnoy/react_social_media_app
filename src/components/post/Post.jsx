import './post.css';
import { MoreVert } from '@material-ui/icons';

const post = () => {
    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img
                            className='shareProfileImg'
                            src='/assets/person/1.jpeg'
                            alt='user'
                        />
                        <span className='postUsername'>Lisa Simpson</span>
                        <span className='postDate'>5 mins ago</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVert />
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>Hey this is my first post!</span>
                    <img
                        className='postImg'
                        src='/assets/post/1.jpeg'
                        alt='post'
                    />
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <img
                            className='likeIcon'
                            src='/assets/like.png'
                            alt='like'
                        />
                        <img
                            className='likeIcon'
                            src='/assets/heart.png'
                            alt='heart'
                        />
                        <span className='likeCounter'>34 people liked it</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentText'>9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default post;
