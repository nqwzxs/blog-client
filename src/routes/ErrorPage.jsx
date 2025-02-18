import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className="min-h-screen flex justify-center items-center text-center">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  )
}

export default ErrorPage
