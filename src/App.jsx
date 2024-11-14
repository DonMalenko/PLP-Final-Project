import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Layout from './Layouts/Layout';
import LandingPage from './Pages/LandingPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<LandingPage />} />
    </Route>
    )
);

function App() {
  return (
    <RouterProvider router={router } />
  )
}

export default App