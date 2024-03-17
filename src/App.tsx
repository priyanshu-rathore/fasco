import { RouterProvider } from 'react-router-dom'
import appRouter from './routes/app-routes'

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App