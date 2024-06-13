import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar'
import './App.css'
import Login from './pages/login/Login';
import OTP from './pages/otp/OTP';
import ForgetPassword from './pages/forgetPassword/ForgetPassword'
import Home from './pages/admin/home/Home'
import {Routes,Route} from 'react-router-dom'
function App() {
 

  return (
    <>

   {/* <Routes> */}
   {/* <Navbar/> */}
    {/* <Route path='/' element={<Register/>}/> */}
    {/* <Route path='/login' element={<Login/>}/> */}
    {/* <Route path='/otp' element={<OTP/>}/> */}
    {/* <Route path='/forgetPassword' element={<ForgetPassword/>}/> */}
   {/* </Routes> */}
   {/* <Register/> */}
   {/* <Login/> */}
   {/* <OTP/> */}
   {/* <ForgetPassword/> */}
   
   <Home/>
    </>
  )
}

export default App
