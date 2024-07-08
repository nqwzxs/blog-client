import { Form } from 'react-router-dom'
import Comment from './Comment'

function Comments({ comments }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl indent-2">comments</h1>
      <Form
        method="post"
        className="bg-white rounded-lg flex flex-col gap-4 p-4"
      >
        <div className="flex items-center gap-x-4">
          <input
            className="w-full bg-gray-100 p-2"
            placeholder="name"
            name="author"
          />
          <button className="bg-gray-100 p-2 px-8" type="submit">
            Submit
          </button>
        </div>
        <textarea
          className="bg-gray-100 p-2 min-h-10 h-48"
          placeholder="add your comment..."
          name="body"
        ></textarea>
      </Form>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  )
}

export default Comments
