import { Home } from './Pages/HomePage.jsx'
import { CountryPage } from './Pages/CountryPage.jsx'
import './css/App.css'
import { useRoutes, BrowserRouter } from 'react-router-dom'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/:id', element: <CountryPage /> },
  ])
  return routes
}

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
