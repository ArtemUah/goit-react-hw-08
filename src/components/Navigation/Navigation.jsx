import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from '../Navigation/Navigation.module.css';
import clsx from "clsx";
import { Toaster } from "react-hot-toast";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

export default function Navigation () {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (<div className={css.container}>
        <NavLink to='/' className={buildLinkClass}><h4>Home</h4></NavLink>
        {isLoggedIn && <NavLink to='/contacts' className={buildLinkClass}><h4>Contacts</h4></NavLink>}
        <Toaster
  position="top-center"
  reverseOrder={false}/>
    </div>)
}