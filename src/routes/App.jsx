import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-screen-md  mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default App
