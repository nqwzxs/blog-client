import { useLoaderData } from 'react-router-dom'
import PostCard from '../components/PostCard'
import { apiUrl } from '../utils'

export async function loader() {
  try {
    const response = await fetch(`${apiUrl}/posts`)
    const posts = await response.json()
    return posts
  } catch (error) {
    throw new Error(error)
  }
}

function Home() {
  const posts = useLoaderData()

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl indent-2">blogs</h1>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  )
}

export default Home
