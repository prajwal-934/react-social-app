import './rightbar.css'
export default function Rightbar() {
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src="assets/gift.png" alt="" className="birthdayImg" />
            <div className="birthdayText">Pola Foster and 3 other friends have birthday today</div>
          </div>
          <img src="assets/ad.png" alt="" className="rightbarAd" />
          <div className="rightbarOnlineFriendListContainer">
            <h4 className="onlineFriendsText">
              Online Friends
            </h4>
            <ul className="onlineFriendList">
              <li className="onlineFriendContainer">
                <div className="onlineFriendImgContainer">
                  <img src="assets/person/1.jpeg" alt="" className="onlineFriendImg" />
                  <div className="onlineTick"></div>
                </div>
                <span className="onlineFriendName">Pankaj </span>
              </li>
              <li className="onlineFriendContainer">
                <div className="onlineFriendImgContainer">
                  <img src="assets/person/1.jpeg" alt="" className="onlineFriendImg" />
                  <div className="onlineTick"></div>
                </div>
                <span className="onlineFriendName">Pankaj </span>
              </li>
              <li className="onlineFriendContainer">
                <div className="onlineFriendImgContainer">
                  <img src="assets/person/1.jpeg" alt="" className="onlineFriendImg" />
                  <div className="onlineTick"></div>
                </div>
                <span className="onlineFriendName">Pankaj</span>
              </li>
              <li className="onlineFriendContainer">
                <div className="onlineFriendImgContainer">
                  <img src="assets/person/1.jpeg" alt="" className="onlineFriendImg" />
                  <div className="onlineTick"></div>
                </div>
                <span className="onlineFriendName">Pankaj </span>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}
