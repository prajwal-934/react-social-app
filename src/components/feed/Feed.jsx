import './feed.css'
import Post from './post/Post'
import SharePost from './sharepost/SharePost'
export default function Feed() {
  return (
    <div className='feed'>
        <div className="feedWrapper">
          <SharePost />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
    </div>
  )
}
