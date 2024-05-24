import { Route, Routes } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import HomePage from "../../pages/HomePage/HomePage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refresh } from "../../redux/auth/operations";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { selectRefreshing } from "../../redux/auth/selectors";
import BasicSpinner from "../Spinner/Spinner";
import BgVideo from "../BgVideo/BgVideo";


function App() {
const isRefreshed = useSelector(selectRefreshing);
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(refresh());
}, [dispatch]);

  return isRefreshed ? (<BasicSpinner/>) : ( <div>
  <div>
 
 <NavBar/>
    <Routes>
   
      <Route path="/" element={<BgVideo><HomePage/></BgVideo>}/>
  
      <Route path="/register" element={<RestrictedRoute component={<BgVideo><RegisterPage/></BgVideo>} redirectTo='/'/>}/>
      <Route path="/login" element={<RestrictedRoute component={<BgVideo><LoginPage/></BgVideo>} redirectTo='/contacts'/>}/>
      <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/>} redirectTo='/login'/>}/>
    </Routes>
 
  </div>
  </div>)
}

export default App;
