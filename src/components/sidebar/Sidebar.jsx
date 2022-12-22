import './sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupIcon from '@mui/icons-material/Group';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeedIcon  className='sidebarListItemIcon'/>
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <PlayCircleIcon  className='sidebarListItemIcon'/>
              <span className="sidebarListItemText">Video</span>
            </li>
            <li className="sidebarListItem">
              <ChatIcon  className='sidebarListItemIcon'/>
              <span className="sidebarListItemText">Chat</span>
            </li>
            <li className="sidebarListItem">
              <BookmarkIcon  className='sidebarListItemIcon'/>
              <span className="sidebarListItemText">Bookmark</span>
            </li>
            <li className="sidebarListItem">
              <GroupIcon  className='sidebarListItemIcon'/>
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <HelpOutlineIcon  className='sidebarListItemIcon'/>
              <span className="sidebarListItemText">Question</span>
            </li>
            <li className="sidebarListItem">
              <WorkIcon  className='sidebarListItemIcon'/>
              <span className="sidebarListItemText">Work</span>
            </li>
            <li className="sidebarListItem">
              <EventIcon  className='sidebarListItemIcon'/>
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <SchoolIcon  className='sidebarListItemIcon'/>
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className='sidebarButton'>Show More</button>
          <hr className='sidebarHr' />
          <ul className="sidebarFriendList">
            <li className="sidebarFriendItem">
              <img src="assets/person/1.jpeg" alt="" className="sidebarFriendIcon" />
              <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriendItem">
              <img src="assets/person/1.jpeg" alt="" className="sidebarFriendIcon" />
              <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriendItem">
              <img src="assets/person/1.jpeg" alt="" className="sidebarFriendIcon" />
              <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriendItem">
              <img src="assets/person/1.jpeg" alt="" className="sidebarFriendIcon" />
              <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriendItem">
              <img src="assets/person/1.jpeg" alt="" className="sidebarFriendIcon" />
              <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriendItem">
              <img src="assets/person/1.jpeg" alt="" className="sidebarFriendIcon" />
              <span className="sidebarFriendName">John Doe</span>
            </li>
            <li className="sidebarFriendItem">
              <img src="assets/person/1.jpeg" alt="" className="sidebarFriendIcon" />
              <span className="sidebarFriendName">John Doe</span>
            </li>
          </ul>
        </div>
    </div>
  )
}
