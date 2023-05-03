import './App.css';
import SignIn from './componenet/SignIn/SignIn';
import SignUp from './componenet/SignUp/Signup'
import Home from './componenet/home/Home';
import { Data, mydata } from './componenet/Data/Data';
import { createBrowserRouter,createRoutesFromElements, Route,Link,Outlet, RouterProvider} from 'react-router-dom';
import Header from './componenet/Header/Header';
import Contactus from './componenet/Contactus/Contactus';
import Aboutus from './componenet/Aboutus/Aboutus';
import Services from './componenet/Agreements/Agreements';
import Main from './componenet/Main/Main';
import Footer from './componenet/Footer/Footer';

function App() {

 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path="home" index element={<Home/>}/>
      <Route path='signin' element={<SignIn/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='contactus' element={<Contactus/>}/>
      <Route path='aboutus' element={<Aboutus/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='main' element={<Main/>}/>
      <Route path='data' element={<Data/>} loader={mydata}/>
    </Route>
  )

)

  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

const Root =()=>{
  return <>
  <div>
   <Header/>
  </div>
  <div>
    <Outlet/>
  </div>
  <div>
    <Footer/>
  </div>
  </>
}

export default App;
