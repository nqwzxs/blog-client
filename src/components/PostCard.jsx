import { Link } from 'react-router-dom'
import { formatDistance } from 'date-fns'

function PostCard({ post }) {
  const formattedDate = formatDistance(
    new Date(post.date_created),
    new Date(),
    {
      addSuffix: true,
    }
  )

  return (
    <div className="bg-white rounded-lg flex flex-col">
      <div className="flex justify-between items-center gap-x-2 p-4 border-b-4 border-gray-100 flex-wrap">
        <Link to={`posts/${post._id}`}>
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </Link>
        <span className="text-gray-500">{formattedDate}</span>
      </div>
      <div className="p-4 max-h-64 overflow-hidden relative">
        <p className="whitespace-pre-line text-justify">{post.body}</p>
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-gradient-to-b from-40% from-transparent to-white rounded-b-lg pointer-events-none"></div>
      </div>
    </div>
  )
}

export default PostCard
