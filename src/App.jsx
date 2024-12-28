import { CountryProvider } from './context/CountryContext.jsx'
import { Home } from './Pages/HomePage.jsx'
import { CountryPage } from './Pages/CountryPage.jsx'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import './css/App.css'

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
      <CountryProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CountryProvider>
    </>
  )
}

export default App
