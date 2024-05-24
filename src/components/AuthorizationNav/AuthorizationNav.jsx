import { Link, NavLink } from "react-router-dom"
import css from '../AuthorizationNav/AuthorizationNav.module.css'
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

export default function AuthorizationNav () {
    return (
        <div className={css.container}>
        <NavLink to='/register' className={buildLinkClass}><h4>Register</h4></NavLink>
        <NavLink to='/login' className={buildLinkClass}><h4>Log In</h4></NavLink>
        </div>
    );
}