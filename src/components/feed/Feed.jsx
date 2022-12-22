import './feed.css'
import Post from './post/Post'
import { Posts } from '../../dummyData'
import { Users } from '../../dummyData'
import SharePost from './sharepost/SharePost'
export default function Feed() {

  const renderPost = Posts.map((post)=>{
    const user = Users.filter((user)=>{
      return user.id === post.id;
    })
 
    return <Post user={user} key={post.id} post={post} />
  })

  return (
    <div className='feed'>
        <div className="feedWrapper">
          <SharePost />
          {renderPost}
        </div>
    </div>
  )
}
