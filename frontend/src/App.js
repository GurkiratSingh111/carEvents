import './App.css';
import FeaturedEventCarousel from './components/FeaturedEventCarousel';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';

import Home from './components/Home';
import Categories from './components/Categories';
import Reviews from './components/Reviews'
import SpecialBundles from './components/SpecialBundles';
import ContactUs from './components/ContactUs';
import RootLayout from './components/RootLayout'
import ErrorPage from './components/ErrorPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// TODO : Remove the later div box 

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "categories", element: <Categories /> },
      { path: "reviews", element: <Reviews /> },
      { path: "specialbundle", element: <SpecialBundles /> },
      { path: "contactus", element: <ContactUs /> }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
