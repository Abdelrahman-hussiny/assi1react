// import logo from './logo.svg';
import './App.css';

// import Nav from '../src/Nav/Nav';
import Home from '../src/Home/Home';
// import Footer from '../src/Footer/Footer';
import Portfolio from '../src/Portfolio/Portfolio';
import MasterLayout from '../src/MasterLayout/MasterLayout'
import About from './About/About';
import Contact from './Contact/Contact';
import {createBrowserRouter , RouterProvider} from 'react-router-dom'






function App() {

  const routes = createBrowserRouter([
    {path:'/',element:<MasterLayout/> , children:[
      {index:true ,element:<Home/>},
      {path:'Home' , element:<Home/>},
      {path:'Portfolio',element:<Portfolio/>},
      {path:'About',element:<About/>},
      {path:'Contact',element:<Contact/>},
      {path:'*',element:<Home/>}
      ]}
   ])





  return (
    <>
    {/* <MasterLayout/> */}
    <RouterProvider router={routes}/>
    
    
    </>
  );
}

export default App;
