import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { selectRefreshing } from "../../redux/auth/selectors";
import BasicSpinner from "../Spinner/Spinner";
import BgVideo from "../BgVideo/BgVideo";
import Layout from "../Layout/Layout";


function App() {
const isRefreshing = useSelector(selectRefreshing);
const dispatch = useDispatch();
useEffect(()=>{
  dispatch(refreshUser());
}, [dispatch]);

  return isRefreshing ? (<BasicSpinner/>) : ( 
 <Layout>
    <Routes>
   
      <Route path="/" element={<BgVideo><HomePage/></BgVideo>}/>
  
      <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/>} redirectTo='/'/>}/>
      <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo='/contacts'/>}/>
      <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/>} redirectTo='/login'/>}/>
    </Routes>
    </Layout>
  )
}

export default App;
