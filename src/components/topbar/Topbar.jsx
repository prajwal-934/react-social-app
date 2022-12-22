import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import NotificationIcon from '@mui/icons-material/Notifications';
function Topbar() {
    return ( 
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Facebook</span>
            </div>
            <div className="topbarCenter">
                <div className="seachbar">
                    <SearchIcon className='seachIcon' />
                    <input placeholder='Seach for friend' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                 <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
     );
}

export default Topbar;