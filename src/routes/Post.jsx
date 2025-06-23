import { useLoaderData } from 'react-router-dom'
import Comments from '../components/Comments'
import { apiUrl } from '../utils'

export async function action({ params, request }) {
  try {
    const formData = await request.formData()
    const data = {
      author: formData.get('author'),
      body: formData.get('body'),
    }

    const response = await fetch(
      `${apiUrl}/posts/${params.postId}/comments`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export async function loader({ params }) {
  const postResponse = await fetch(
    `${apiUrl}/posts/${params.postId}`
  )

  if (!postResponse.ok) {
    throw new Response('', {
      status: postResponse.status,
      statusText: postResponse.statusText,
    })
  }

  const commentsResponse = await fetch(
    `${apiUrl}/posts/${params.postId}/comments`
  )

  const post = await postResponse.json()
  const comments = await commentsResponse.json()

  return { post, comments }
}

function Post() {
  const { post, comments } = useLoaderData()

  // const formattedDate = formatDistance(
  //   new Date(post.date_created),
  //   new Date(),
  //   {
  //     addSuffix: true,
  //   }
  // )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl spacing">{post.title}</h1>
        {/* <span className="text-gray-500">{formattedDate}</span> */}
      </div>
      <p className="whitespace-pre-line text-justify pb-8 border-b-2 border-gray-200">
        {post.body}
      </p>
      <Comments comments={comments} />
    </div>
  )
}

export default Post
