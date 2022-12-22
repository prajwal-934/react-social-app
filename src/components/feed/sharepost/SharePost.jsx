
import './sharepost.css'
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PermMediaIcon from '@mui/icons-material/PermMedia';
const SharePost = () => {
    return ( 
        <div className="sharepost">
            <div className="sharepostWrapper">
                <div className="sharepostTop">
                    <img src="/assets/person/1.jpeg" alt="" className="sharepostProfileIcon" />
                    <input placeholder="What's in your mind?" className="sharepostText" />
                </div>
                <hr className='shareHr' />
                <div className="sharepostBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMediaIcon className='shareOptionIcon'/>
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <LabelIcon className='shareOptionIcon'/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <LocationOnIcon className='shareOptionIcon'/>
                            <span className="shareOptionText">Photo/Video</span>
                        </div>
                        <div className="shareOption">
                            <button className="shareOptionButton">
                                Share
                            </button>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SharePost;