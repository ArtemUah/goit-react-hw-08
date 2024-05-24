import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";


export default function PrivateRoute ({component, redirectTo}) {
    const isLoggedIng = useSelector(selectIsLoggedIn);
    return isLoggedIng ? component : <Navigate to={redirectTo}/>
};