import './App.css';
import SignIn from './componenet/signIn/signIn';
import SignUp from './componenet/SignUp/Signup'
import Home from './componenet/home/Home'
import { createBrowserRouter,createRoutesFromElements, Route,Link,Outlet, RouterProvider} from 'react-router-dom';
import Header from './componenet/Header/Header';

function App() {

 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path="home" index element={<Home/>}/>
      <Route path='signin' element={<SignIn/>}/>
      <Route path='signup' element={<SignUp/>}/>
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
  </>
}

export default App;
