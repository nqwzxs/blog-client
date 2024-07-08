import { formatDistance } from 'date-fns'

function Comment({ comment }) {
  const formattedDate = formatDistance(
    new Date(comment.date_created),
    new Date(),
    {
      addSuffix: true,
    }
  )

  return (
    <div className="bg-white rounded-lg flex flex-col p-4">
      <div className="flex justify-between items-center gap-x-2  flex-wrap">
        <h1 className="font-bold">{comment.author}</h1>
        <span className="text-gray-500">{formattedDate}</span>
      </div>
      <div>
        <p className="whitespace-pre-line text-justify">{comment.body}</p>
      </div>
    </div>
  )
}

export default Comment
