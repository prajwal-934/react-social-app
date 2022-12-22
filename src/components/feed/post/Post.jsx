import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Post = () => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpeg" alt="" className="postTopImg" />
                        <span className="postTopName">Prajwal Patil</span>
                        <span className="postUploadTime">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postCaption">This is my first Image</div>
                    <img src="assets/post/1.jpeg" alt="" className="postImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/heart.png" alt="" className="postReactIcon" />
                        <img src="assets/like.png" alt="" className="postReactIcon" />
                        <span className="postLikeCount">32 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postTotalComments">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
