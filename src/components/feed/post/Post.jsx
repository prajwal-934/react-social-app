import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Post = ({post , user}) => {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user[0].profilePicture} alt="" className="postTopImg" />
                        <span className="postTopName">{user[0].username}</span>
                        <span className="postUploadTime">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postCaption">{post.desc}</div>
                    <img src={post.photo} alt="" className="postImage" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="assets/heart.png" alt="" className="postReactIcon" />
                        <img src="assets/like.png" alt="" className="postReactIcon" />
                        <span className="postLikeCount">{post.like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postTotalComments">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
